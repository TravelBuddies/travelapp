$(document).foundation()

// $(window).scroll(function () {
// 	const navScrollBG = "#6BBAA7"
// 	// const navTopColor = "#FBA100"
// if ($(window).scrollTop() >= 50) {
// $('.topbar-responsive').css('background', navScrollBG);
// } else {
// $('.topbar-responsive').css('background','transparent');
// $('.menu').css('background','transparent');
// // $('.topbar-responsive.menu').css('color', navTopColor);
// }
// });

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
