$(document).ready(function () {
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'sectionsColor': ['#80D7FF', '#69E875', '#FFEE73', '#FFA49D'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['Welcome', 'Professions', 'Careers', 'Educations'],
        'easingcss3': 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
    });
});
