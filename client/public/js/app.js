$(document).foundation()

$(window).scroll(function () {
	const navScrollBG = "#6BBAA7"
	// const navTopColor = "#FBA100"
if ($(window).scrollTop() <= 10) {
  $('.topbar-responsive').css('background','RGBA(107, 186, 167, .6)');
$('.menu').css('background','RGBA(107, 186, 167, 0)');
$('.navDrop').css('background','RGBA(107, 186, 167, .6)');
// $('.topbar-responsive.menu').css('color', navTopColor);

} else {
  $('.topbar-responsive').css('background', navScrollBG);
}
});

$(function () {
  var showClass = 'show';

  $('.userInput').on('checkval', function () {
    var label = $(this).prev('label');
    if(this.value !== '') {
      label.addClass(showClass);
    } else {
      label.removeClass(showClass);
    }
  }).on('keyup', function () {
    $(this).trigger('checkval');
  });
});
