$(document).ready(function() {
  $("#leapYear").submit(function(event){
    event.preventDefault();

    var year = parseInt( $("input#year").val() );
    var isLeapYear = leapYear(year);

    $("#result").show();
    $(".year").text(year);
    if (isLeapYear) {
      $(".not").hide();
    } else {
      $(".not").show();
    }
  });
});

function leapYear(year) {
  // Method 1:
  return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);

  // // Method 2:
  // if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
  //   return true;
  // } else {
  //   return false;
  // }

  // // Method 3:
  // if (year % 4 === 0) {
  //   if (year % 100 === 0) {
  //     if (year % 400 === 0) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   } else {
  //     return true;
  //   }
  // } else {
  //   return false;
  // }
}
