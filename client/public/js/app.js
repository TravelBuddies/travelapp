$(document).foundation()
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
