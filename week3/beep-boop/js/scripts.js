// -- User Interface -----------------------------------------------------------
$(document).ready(function() {
  document.getElementById("numberInput").focus();

  $("#form").submit(function( event ) {
    event.preventDefault();

    var inputNumber = parseInt($("#numberInput").val());
    if (inputNumber >= 0) {
      $("#outputList").empty();
      $("#beepBoopNumber").text(inputNumber);
      beepBoopList(inputNumber).forEach(function(item) {
        $("#outputList").append(newListItem(item));
      });
      $("#output").show();
      $("#form")[0].reset();
      document.getElementById("output").scrollIntoView({behavior: "smooth", block: "end"});
    } else {
      console.log("invalid input number");
    }
  });
});

function newListItem(text) {
  return "<li>" + text + "</li>";
}

// -- Business Logic -----------------------------------------------------------

// Returns an array of numbers from 0 up to the given number, with the following
// exceptions:
// * Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
// * Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
// * Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."
function beepBoopList(endNumber) {
  var list = [];
  for (var i = 0; i <= endNumber; i++) {
    var numberStr = i.toString();
    if (numberStr.includes("3")){
      list[i] = "I'm sorry, Dave. I'm afraid I can't do that."
    } else if (numberStr.includes("2")) {
      list[i] = "Boop!"
    } else if (numberStr.includes("1")) {
      list[i] = "Beep!"
    } else {
      list[i] = i;
    }
  }
  return list;
}
