/*!
 * JavaScript file describing the images used in the main graphic with navigational links 
 * (e.g. 'illustration','design', etc.)
 *
 * @author nolanlawson
 */
(function() {
    
    SantaLuciaPress.ImageMap = {
        
        /** get a new css 'background' value depending on how far we need to shift down 
        */
        getNewBackground : function(element, shiftDownPixels) {
            var newLeft = -parseInt(element.parent().css('left'));
            var newTop = -parseInt(element.parent().css('top')) - shiftDownPixels;

            var newBackground = SantaLuciaPress.imageUrl 
                    + ' no-repeat ' 
                    + newLeft + 'px ' 
                    + newTop + 'px';

            return newBackground;
        },

        /* Deal with the anchor hash (e.g. #screenprinting), do what's necessary depending on
         * which sub-page we're on
         * 
         */
        handleHashChange : function() {

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
        },
        
        redrawLink    : function(element) {

            var hovering = element.parent().hasClass('hovering');
            var selected = element.parent().hasClass('selected');

            var background = '';

            if (hovering) {
                // 'hovering' image is one down
                background = this.getNewBackground(element, SantaLuciaPress.imageMapHeight);
            } else if (selected) {
                // 'selected' image is two down
                background = this.getNewBackground(element, SantaLuciaPress.imageMapHeight * 2)
            }

            element.css('background', background);
        }
    };
    
    
})(jQuery);