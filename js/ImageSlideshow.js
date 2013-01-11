/*!
 * JavaScript file describing the images used in the slideshow.
 *
 * @author nolanlawson
 */
(function() {

    var tux = {
        thumbnail: 'http://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tux.png/220px-Tux.png',
        large: 'http://content.comrz.com/AcuCustom/Sitename/DAM/374/Tux.png',
        title: 'The tux penguin!'
    };

    SantaLuciaPress.ImageSlideshow = {
        
        // top offset for the site id, i.e. the big logo, when the images appear
        siteIdOffset   : '-4em',

        /** 
         * Main definition of images to display in the slideshow
         */
        images: {
            letterpress:    [tux, tux, tux, tux, tux, tux, tux, tux, tux, tux],
            screenprinting: [tux, tux, tux, tux, tux, tux],
            design:         [tux, tux, tux, tux, tux, tux, tux, tux, tux, tux, tux, tux, tux, tux],
            illustration:   [tux, tux, tux, tux]

        },

        /*
         * write the images in a format that ColorBox will understand
         * Write it to the #image-thumbnails div
         */
        refreshImages: function() {

            var thumbnailsDiv = $('#image-thumbnails');
            
            var isEmpty = thumbnailsDiv.children().length == 0;
            var groupName = window.location.hash ? window.location.hash.substring(1) : null;
            
            if (!isEmpty) {
                // fade out
                thumbnailsDiv.fadeOut().empty();
            }
            
            if (groupName) {
                
                // fade something in
                thumbnailsDiv.empty().hide();
                
                var images = SantaLuciaPress.ImageSlideshow.images;
                var numImages = images[(groupName)].length;

                // draw rows of 4
                for (var i = 0; i < numImages; i += 4) {
                    
                    var imageRow = $('<div></div').addClass('thumbnail-row');
                    
                    for (var j = i; j < Math.min(numImages, i + 4); j++) {
                        var image = images[(groupName)][j];

                        var thumbnailId = 'thumbnail-' + j;

                        // <a> with an <img> inside
                        imageRow.append(
                            $('<a></a>')
                            .addClass('thumbnail')
                            .attr({
                                id: thumbnailId,
                                href: image.large,
                                title: image.title +" for group " + groupName
                        }).append($('<img/>').attr('src', image.thumbnail)));
                    }      
                    
                    thumbnailsDiv.append(imageRow);
                }
                
                // ColorBox properties
                $(".thumbnail").colorbox({
                    rel: groupName,
                    slideshow: true,
                    transition: "fade",
                    width: "75%",
                    height: "75%"
                });
                
                thumbnailsDiv.fadeIn().show();
                
                // move logo down
                $('.container').css('top',this.siteIdOffset);
                
            } else { // no content in the slideshow
                
                // put the logo back where it is normally
                $('.container').css('top','');
            }

        }

    };

})(jQuery);
