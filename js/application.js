/*!
 * Main javascript application file for the Santa Lucia Press landing page.
 * 
 * Intended to be run "deferred", i.e. on page load at the end of the <body> tag.
 * @author nolanlawson
 */
 
(function() {
    
    // redraw the individual links depending on 3 states: hovering, selected, unselected
    $('ul#main-pages li a').bind('redraw-link', function() {
        SantaLuciaPress.ImageMap.redrawLink($(this));
    })
    
    // when hovering, add 'hovering' class and redraw
    $('ul#main-pages li a').hover(function() {
        $(this).parent().addClass('hovering').end().trigger('redraw-link');
    }, function() {
        $(this).parent().removeClass('hovering').end().trigger('redraw-link');
    })

    // add an obfuscated email address courtesy of http://www.javascriptobfuscator.com/
    var emailAddress = ["\x73\x61\x6E\x6C\x75\x63\x69\x61\x70\x72" 
            + "\x65\x73\x73\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D"][0];
    $('li#item-email-address a').attr('href', 'mailto:' + emailAddress);

    // handle the hash changes ourselves
    $("a[href^='#']").click(function(event) {
        event.preventDefault();
        window.location.hash = this.hash;
        window.scrollTo(0,0); // quit movin' around!
    });


    var refreshPage = function() {
        // handle the hash if something is clicked on in this group
        SantaLuciaPress.ImageMap.handleHashChange();

        // draw the slideshow
        SantaLuciaPress.ImageSlideshow.refresh();
        
        // refresh any additional text, if it exists
        SantaLuciaPress.TextContent.refresh();
        
        if (window.location.hash) { // additional content showing
            // move logo down
            $('.container').css('top', SantaLuciaPress.siteIdOffset);
        } else { // no content showing
            // put the logo back where it is normally
            $('.container').css('top','');
        }
    }

    // do the same thing if something is clicked
    window.onhashchange = function(){
        refreshPage();
    }
    
    refreshPage();
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 1);
    
})(jQuery);
