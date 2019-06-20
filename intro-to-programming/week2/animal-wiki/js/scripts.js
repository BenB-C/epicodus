$(document).ready(function() {
  // $("img").click(function() {
  //   // With toggle
  //   $(this).parent().children(".info").fadeToggle();
  //
  //   // With fadeIn/Out
  //   // if ($(this).parent().children(".info").is(":visible")) {
  //   //   $(this).parent().children(".info").fadeOut();
  //   // } else {
  //   //   $(this).parent().children(".info").fadeIn();
  //   // }
  // });

  $(".col-md-4").click(function() {
    $(this).children(".info").slideToggle();
    $("img").removeClass("highlight");
    $(this).children("img").addClass("highlight");
  });
});
