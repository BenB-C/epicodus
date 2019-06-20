$(document).ready(function() {
  var btn1Shown;
  var btn2Shown;

  $("h1").click(function()  {
    $("img").slideToggle();
  });
  // $("p").hover(function() {
  //   $("p").css("color", "green")
  // })

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("greenText");
    $("#btn1").show();
    $("#btn2").hide();
    btn1Shown = true;
    btn2Shown = false;
    $("button#yellow").hide();
    $("button#red").hide();
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellowText");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("redText");
  });

  $("#btn1").hover(function() {
    if (btn1Shown) {
      $("#btn1").hide();
      $("#btn2").show();
      btn1Shown = false;
      btn2Shown = true;
    }
  });

  $("#btn2").hover(function() {
    if (btn2Shown) {
      $("#btn2").hide();
      $("#btn1").show();
      btn2Shown = false;
      btn1Shown = true;
    }
  });

function f() {
  alert("f called");
}





});
