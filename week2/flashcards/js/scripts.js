$(document).ready(function() {

  $(".term").click(function() {
    $(this).hide();
    $(this).parent().children(".definition").show();
  });

  $(".definition").click(function() {
    $(this).hide();
    $(this).parent().children(".term").show();
  });

});
