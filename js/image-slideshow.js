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

    var images = {
        illustration: [tux, tux, tux, tux],
        screenprinting: [tux, tux, tux, tux],
        design: [tux, tux, tux, tux],
        illustration: [tux, tux, tux, tux]

    }
    
    // write the images in a format that ColorBox will understand.  Write it to the #image-thumbnails div
    
    var thumbnailsDiv = $('#image-thumbnails').empty();
    var groupName = 'illustration';
    for (var i in images[(groupName)]) {
        var image = images[(groupName)][i];
        
        var thumbnailId = 'thumbnail-' + i;
        
        // <a> with an <img> inside
        thumbnailsDiv.append($('<a></a>')
            .attr({
                id    : thumbnailId,
                href  : image.large,
                title : image.title
                }) 
            .append($('<img/>')
                .attr('src', image.thumbnail)));
                
        // ColorBox properties
        $("#" + thumbnailId).colorbox({
            rel        : groupName, 
            slideshow  : true, 
            transition : "fade", 
            width      : "75%", 
            height     : "75%"});
    }

})(jQuery);
