/**
 * Main global constant for the SantaLuciaPress project.
 */
var SantaLuciaPress = {
    
    /* constants */
    imageMapHeight : parseInt($('ul#main-pages').css('height')),
    imageUrl       : $('ul#main-pages').css('background').match(/url\([^)]+\)/)
    
};