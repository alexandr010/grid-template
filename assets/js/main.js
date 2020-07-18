$(document).ready(function () {
  $('.header-menu-link-btn').click(function () {
    $(this).toggleClass('open');
    $('.header-menu-link-list').stop(true, true).fadeToggle(500);
  });
  $(window).resize(function () {
    if($(window).width() >= 767.8){
      $('.header-menu-link-list').css('display', '');
    }
  });
});
