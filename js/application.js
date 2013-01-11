/*!
 * Main javascript application file for the Santa Lucia Press landing page.
 * @author nolanlawson
 */
(function() {

    var imageMapHeight = parseInt($('ul#main-pages').css('height'));
    var imageSrc = 'images/mainpagemain_all.jpg';

    /** get a new css 'background' value depending on how far we need to shift down 
    */
    var getNewBackground = function(element, shiftDownPixels) {
        var newLeft = -parseInt(element.parent().css('left'));
        var newTop = -parseInt(element.parent().css('top')) - shiftDownPixels;

        var newBackground = 'url(' + imageSrc + ') no-repeat ' + newLeft + 'px ' + newTop + 'px';
        
        return newBackground;
    }

    /* Deal with the anchor hash (e.g. #screenprinting), do what's necessary depending on
     * which sub-page we're on
     * 
     */
    var handleHashChange = function() {
        
        if (window.location.hash) {
            var hash = window.location.hash.substring(1);
            
            // slide the image down 467 * 2 pixels for the "selected" image
            // when we're on that particular page (e.g. the hash is #letterpress)
            $('ul#main-pages')
                .find('li#' + hash)
                    .addClass('selected')
                .end()
                .find('li')
                .not('#' + hash)
                    .removeClass('selected');
        }
        
        $('ul#main-pages li a').trigger('redraw-link');
    };

    // when hovering, just slide the image down 467 pixels
    $('ul#main-pages li a').hover(function() {
        var self = $(this);

        self.parent().addClass('hovering');
        self.trigger('redraw-link');

    }, function() {
        var self = $(this);
        
        self.parent().removeClass('hovering');
        self.trigger('redraw-link');
    })
    
    $('ul#main-pages li a').bind('redraw-link', function(){
        var self = $(this);
        
        var hovering = self.parent().hasClass('hovering');
        var selected = self.parent().hasClass('selected');
        
        var background = '';
        
        if (hovering) {
            // 'hovering' image is one down
            background = getNewBackground(self, imageMapHeight);
        } else if (selected) {
            // 'selected' image is two down
            background = getNewBackground(self, imageMapHeight * 2)
        }
        
        self.css('background', background);
    })

    // add an obfuscated email address courtesy of http://www.javascriptobfuscator.com/
    var emailAddress = ["\x73\x61\x6E\x6C\x75\x63\x69\x61\x70\x72" 
            + "\x65\x73\x73\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D"][0];
    
    $('li#email-address a').attr('href', 'mailto:' + emailAddress);
    

    handleHashChange();
        
    // handle the hash if something is clicked on in this group
    window.onhashchange = function(){
        handleHashChange();
    }
    
})(jQuery);
