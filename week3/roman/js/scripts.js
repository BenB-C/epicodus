// Front end
$(document).ready(function() {
  $("#some-form").submit(function(event) {
    event.preventDefault();

    // var someInput = parseInt($("#some-input").val());
    var someInput = $("#some-input").val();
    // var outPut = roman(someInput);


    $("#output").text(roman(someInput));
    $("#output").show();
  });
});
// Back end
function roman1(number){
  if (number <= 3) {
    var romanLetters = "";
    for(var count = 1; count <= number; count += 1){
      romanLetters += "I";
    }
    return romanLetters;
  }
  else if (number === 4) {
    return "IV";
  }
  else if (number === 5) {
      return "V";
  }
  else if (number <= 8) {
    var romanLetters = "V";
    var destination = number - 5
    for(var count = 1; count <= destination; count += 1){
      romanLetters += "I";
    }
    return romanLetters;
  }
  else if (number === 9) {
    return "IX";
  }
  else if (number === 10) {
    return "X";
  }
  else if (number === 14){
    return "XIV"
  }


  return "?";
}

// Returns the Roman Numerals for the number reprented by the given numberString
function roman(numberString) {
  placeLetters = ["I", "X", "C", "M"]; // Roman Numerals for 1, 10, 100, 1000
  romanLetters = ["I", "V", "X", "L", "C", "D", "M"]; // Roman Numerals

  var digits = numberString.split("").reverse();
  for (var i = 0; i < digits.length; i += 1) {
    digit = parseInt(digits[i]);
  }

  return "?";
}
