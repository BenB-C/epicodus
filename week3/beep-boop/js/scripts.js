// -- User Interface -----------------------------------------------------------
$(document).ready(function() {
  $("#form").submit(function( event ) {
    event.preventDefault();

    var inputNumber = parseInt($("#numberInput").val());

    $("#outputList").empty();
    if (inputNumber && inputNumber >= 0) {
      $("#beepBoopNumber").text(inputNumber);
      beepBoopList(inputNumber).forEach(function(item) {
        $("#outputList").append(newListItem(item));
      });
      $("#output").show();
      $("#form")[0].reset();
    } else {
      // TODO
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
function beepBoopList(number) {
  var list = [];
  for (var i = 0; i <= number; i++) {
    list[i] = i;
  }
  return list;
}
