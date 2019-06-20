// Count to: 30
// Count by: 5
// Output: 5, 10, 15, 20, 25, 3

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    console.log("Form test");
    var countTo = parseInt( $("#firstInput").val() );
    var countBy = parseInt( $("#secondInput").val() );
    // console.log(countTo, typeof countTo, countTo === NaN, typeof(countTo) !== "number");
    if (isNaN(countTo)) {
      $("#outputNumbers").text("Please enter a number for 'Count to'");
    } else if (isNaN(countBy)) {
      $("#outputNumbers").text("Please enter a number for 'Count by'");
    } else if (countTo <= 0 || countBy <= 0) {
      $("#outputNumbers").text("Please enter a positive number");
    } else if (countBy > countTo) {
      $("#outputNumbers").text("'Count by' can not be larger than 'Count to'");
    } else {
      $("#outputNumbers").text(listOfNumbers(countTo, countBy));
    }
  });
});

// Backend

// Returns the list of numbers from countBy to countTo

function listOfNumbers(countTo, countBy) {

  var list = "";

  for (var number = countBy; number <= countTo; number += countBy) {
    list += number;
    if (number + countBy <= countTo) {
      list += ", ";
    }
  }
  return list;
}
