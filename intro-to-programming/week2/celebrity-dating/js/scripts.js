// Business logic
function getMatch(seeking, gender, music) {
  if (seeking === "marriage") {
    if (gender === "Female") {
      if (music === "hiphop") {
        return "riri.jpg";
      } else if (music === "rock") {
        return "cher.jpg";
      } else { // music === "country"
        return "carrie.jpg";
      }
    } else if (gender === "Male") {
      if (music === "hiphop") {
        return "jcole.jpg";
      } else if (music === "rock") {

      } else { // music === "country"

      }
    } else {
      if (music === "hiphop") {

      } else if (music === "rock") {

      } else { // music === "country"

      }
    }
  } else if (seeking === "relationship") {
    if (gender === "Female") {
      if (music === "hiphop") {

      } else if (music === "rock") {

      } else { // music === "country"

      }
    } else if (gender === "Male") {
      if (music === "hiphop") {

      } else if (music === "rock") {

      } else { // music === "country"

      }
    } else {
      if (music === "hiphop") {

      } else if (music === "rock") {

      } else { // music === "country"

      }
    }
  } else {
    if (gender === "Female") {
      if (music === "hiphop") {

      } else if (music === "rock") {

      } else { // music === "country"

      }
    } else if (gender === "Male") {
      if (music === "hiphop") {

      } else if (music === "rock") {

      } else { // music === "country"

      }
    } else {
      if (music === "hiphop") {

      } else if (music === "rock") {

      } else { // music === "country"

      }
    }
  }
  return "kermit.jpg";
}


// User interface
$(document).ready(function(){
  $("form#aboutMe").submit(function(event) {
    var seeking = $("#seeking").val();
    var gender = $("#gender").val();
    var music = $("input:radio[name=music]:checked").val();
    var match = getMatch(seeking, gender, music);
    var imgElement = '<img src="img/' + match + '" alt="picture of your match">';
    $("#yourMatch img").remove();
    $("#yourMatch").append(imgElement);
    event.preventDefault();
  });
});
