/*!
 * JavaScript file with the main logic for the image slideshow.
 *
 * @author nolanlawson
 */
(function() {

    SantaLuciaPress.ImageSlideshow = {

        /*
         * write the images in a format that ColorBox will understand
         * Write it to the #image-thumbnails div
         */
        refresh: function() {

            var thumbnailsDiv = $('#image-thumbnails');
            
            var isEmpty = thumbnailsDiv.children().length == 0;
            var groupName = window.location.hash ? window.location.hash.substring(1) : null;
            var imageGroup = groupName ? SantaLuciaPress.SiteContent.slideshowImages[(groupName)] : null;
            
            if (!isEmpty) {
                // fade out
                thumbnailsDiv.fadeOut().empty();
            }
            
            if (imageGroup) {
                
                // fade something in
                thumbnailsDiv.empty().hide();
                
                var numImages = imageGroup.length;

                // draw rows of 4
                for (var i = 0; i < numImages; i += 4) {
                    
                    var imageRow = $('<div></div').addClass('thumbnail-row');
                    
                    for (var j = i; j < Math.min(numImages, i + 4); j++) {
                        var image = imageGroup[j];

                        var thumbnailId = 'thumbnail-' + j;

                        // <a> with an <img> inside
                        var title = image.title;
                        imageRow.append(
                            $('<div></div>')
                            .addClass('thumbnail')
                                .append($('<a></a>')
                                .addClass('thumbnail-link')
                                .attr({
                                    id    : thumbnailId,
                                    href  : image.large,
                                    title : title
                                })
                                .append($('<div></div>')
                                    .addClass('thumbnail-label')
                                    .append($('<span></span>')
                                        .text(title))
                                    .hide())
                                .append($('<img/>')
                                    .attr({
                                        src   : image.thumbnail
                                    }))));
                    }      
                    
                    thumbnailsDiv.append(imageRow);
                }
                
                // ColorBox properties
                $(".thumbnail-link").colorbox({
                    rel: groupName,
                    transition: "elastic"
                    //width: "75%",
                    //height: "75%"
                });
                
                thumbnailsDiv.fadeIn().show();
                
            }

        }

    };

})(jQuery);
