//* Starting the opening chapter
//fade in & fade out
jQuery(function($) {
    var divs = $('#head');
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        divs.css({ 
            'margin-top' : -(st/3)+"px", 
            'opacity' : 1 - st/35
        }); 
    });
});
//* end of the opening chapter

$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
    });
});

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
