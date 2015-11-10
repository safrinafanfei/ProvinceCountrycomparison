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

