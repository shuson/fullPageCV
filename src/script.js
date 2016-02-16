$(document).ready(function () {
    $('#fullpage').fullpage({
        //design
        controlArrows: true,
        verticalCentered: false,
        sectionsColor: ['#80D7FF', '#69E875', '#FFEE73', '#FFA49D'],

        //vavigation style
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Welcome', 'Professions', 'Careers', 'Educations'],

        //scroll style
        css3: true,
        scrollingSpeed: 700,
        easing: 'easeInOutCubic',
        easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        loopTop: true,

        //accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //events
        onLeave: function(index, nextIndex, direction){},
    });
});
