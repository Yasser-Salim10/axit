$(function () {
  'use strict';
  $(window).scroll(function () {
    var navbar = $('.navbar');
    if ($(window).scrollTop() >= navbar.height()){
      navbar.addClass('scrolled');
    } else {
      navbar.removeClass('scrolled')
    }

    //condation  ? true : false ;
    // $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');
  });
  //Deal With Tabs
  $('.tab-switch li').click(function () {
    //Add Selected class To Active Link
    $(this).addClass('selected').siblings().removeClass('selected');
    //Hide ALL DIVS
    $('.tabs-section .tabs-content div').hide();
    //Show DIV Connected with This Link
    $('.' + $(this).data('class')).show();
  })
});












// $(function () {
//   'use strict';
//   $(window).scroll(function () {
//     var navbar = $('.navbar');
//     $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');
//   });
//   // Deal With Tabs
//   $('.tab-switch li').click(function () {
//     // Add Selected Class To Active Link
//     $(this).addClass('selected').siblings().removeClass('selected');
//     // Hide All Divs
//     $('.tabs-section .tabs-content > div').hide();
//     // Show Div Connected With This Link
//     $($(this).data('class')).show();
//   });
// });
