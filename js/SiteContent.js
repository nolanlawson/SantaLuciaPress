/** 
 * Main definition of Santa Lucia Press site content.
 */
(function() {

    // TODO: delete me and replace with real images
    var tux = {
        thumbnail: 'http://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tux.png/220px-Tux.png',
        large: 'http://content.comrz.com/AcuCustom/Sitename/DAM/374/Tux.png',
        title: 'The tux penguin!'
    };
    
    SantaLuciaPress.SiteContent = {
        
        slideshowImages : {
            letterpress    : [tux, tux, tux, tux, tux, tux, tux, tux, tux, tux],
            screenprinting : [tux, tux, tux, tux, tux, tux],
            design         : [tux, tux, tux, tux, tux, tux, tux, tux, tux, tux, tux, tux, tux, tux],
            illustration   : [tux, tux, tux, tux]

        },
        
        htmlContent   : {
            about    : 'html/about.html',
            contact  : 'html/contact.html',
        }
    };
})(jQuery);
