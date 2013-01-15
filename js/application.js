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
    var emailAddress = ["\x69\x6E\x66\x6F\x40\x73\x61\x6E\x74\x61\x6C\x75\x63\x69\x61\x70\x72\x65\x73\x73\x2E\x75\x73"][0];
    $('li#item-email-address a').attr('href', 'mailto:' + emailAddress);

    // handle the hash changes ourselves
    $("a[href^='#']").click(function(event) {
        event.preventDefault();
        SantaLuciaPress.oldHash = window.location.hash;
        window.location.hash = this.hash;
        window.scrollTo(0,0); // quit movin' around!
    });

    // ensure that the slideshow images are all loaded in the background on initial load of this page
    var imagesToLoad = {};
    for (var key in SantaLuciaPress.SiteContent.slideshowImages) {
        var imageDefs = SantaLuciaPress.SiteContent.slideshowImages[key].images;
        for (var i in imageDefs) {
            var imageDef = imageDefs[i];
            if (!imageDef || !imageDef.thumbnail) {
                continue;
            }
            imagesToLoad[imageDef.thumbnail] = true;
        }
    }
    
    for (var imageToLoad in imagesToLoad) {
        // load in advance
        var img = new Image();
        img.src = imageToLoad;
    }

    // function to be called on initial load and whenever an anchor link is clicked
    var refreshPage = function() {
        
        var showContentFunction = function() {
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

            if (window.location.hash) { // new hash
                $('#main-content').fadeIn(SantaLuciaPress.animationFadeTime);
            }
        }
        
        // fade out the stuff below the logo if it exists
        if (SantaLuciaPress.oldHash) { // old hash
            $('#main-content').fadeOut(SantaLuciaPress.animationFadeTime, showContentFunction);
        } else {
            showContentFunction();
        }
        
    }
    

    // do the same thing if something is clicked
    window.onhashchange = function(){
        refreshPage();
    }
    
    refreshPage();
    
    
})(jQuery);
