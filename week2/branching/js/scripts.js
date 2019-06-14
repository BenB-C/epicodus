$(document).ready(function(){
  var age = parseInt(prompt("What's your age?"));

  if (age >= 18) {
    $("#Voting").show();
  } else {
    $("#Under18").show();
  }
});
