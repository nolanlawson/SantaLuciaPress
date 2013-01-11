/*!
 * Main javascript application file for the Santa Lucia Press landing page.
 * @author nolanlawson
 */
(function(){
  
    var imageMapHeight = parseInt($('ul#main-pages').css('height'));
    var imageSrc = 'images/mainpagemain_all.jpg';

    // when hovering, just slide the image down 467 pixels
    
    $('ul#main-pages li a').hover(function(){
        var self = $(this);
        
        var newLeft = -parseInt(self.parent().css('left'));
        var newTop = -parseInt(self.parent().css('top')) - imageMapHeight;
        
        var newBackground = 'url(' + imageSrc + ') no-repeat ' + newLeft + 'px ' + newTop + 'px';
        
        self.css('background', newBackground);
        
    }, function(){
        var self = $(this);
        
        self.css('background' ,'');
        
    })
    
    
})(jQuery);