var $win = $(window);
var $sun = $('.sun');
var $sunSection = $('.sun-section');
var $dipperSection = $('.dipper-section');
var $dipper = $('.dipper');
var $spaceShip = $('.spaceship-1');
var $spaceShipSection = $('.spaceship-1-section');


$win.on('scroll',function () {
    var scrollPos = $win.scrollTop();

    $sun.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');
    $sunSection.css('background-position', 'center ' + scrollPos / 2 + 'px')
});

$dipperSection.waypoint(function () {
    $dipper.addClass('js-dipper-fade');
}, { offset: '50%' });

$spaceShipSection.waypoint(function () {
    $spaceShip.addClass('js-spaceship-fade');
}, { offset: '75%' });
