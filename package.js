//* Starting the opening chapter
//fade in & fade out
jQuery(function($) {
    var divs = $('.head');
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        divs.css({ 
            'margin-top' : -(st/3)+"px", 
            'opacity' : 1 - st/35
        }); 
    });
});
//* end of the opening chapter

/* starting map1 
<!--- $(window).scroll(function() {
    var pxFromBottom = 400;
    if ($(window).scrollTop() + $(window).height() > $(document).height() - pxFromBottom) {
        $('.gdpcap').fadeOut('slow');
    } else {
        $('.gdpcap').fadeIn('slow')
    }
}); 

starting map2 
$(window).scroll(function() {
    var pxFromBottom = 1400;
    if ($(window).scrollTop() + $(window).height() > $(document).height() - pxFromBottom) {
        $('.unemployment').fadeOut('slow');
    } else {
        $('.unemployment').fadeIn('slow')
    }
});    

*/
