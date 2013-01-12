/*!
 * JavaScript file with the main logic for the image slideshow.
 *
 * @author nolanlawson
 */
(function() {

    SantaLuciaPress.TextContent = {
        
        /*
         * write the images in a format that ColorBox will understand
         * Write it to the #image-thumbnails div
         */
        refresh: function() {

            var textDiv = $('#additional-text');
            
            var groupName = window.location.hash ? window.location.hash.substring(1) : null;
            var htmlContent = groupName ? SantaLuciaPress.SiteContent.htmlContent[(groupName)] : null;
            
            if (!htmlContent) {
                textDiv.hide();
            } else {
                textDiv.show().load(htmlContent);
            }
        }
            
    };

})(jQuery);
