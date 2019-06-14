var sentence = prompt("Enter a sentence without ending punctuation.");
console.log(sentence);

function capitalizeFirstAndLastLetter( sentence ) {

  // var regex = /(?<firstLetter>^.)/
  // var newSentence = sentence.replace(regex, "$<firstLetter>".toUpperCase());

  var end = sentence.length - 1
  var firstLetter = sentence.charAt(0).toUpperCase();
  var lastLetter = sentence.charAt(end).toUpperCase();
  // var newSentence = firstLetter + sentence.substring(1, end) + lastLetter;
  var newSentence = firstLetter + lastLetter;
  return newSentence;
}

function switchFirstAndLastLetter( sentence ) {
  var end = sentence.length - 1
  var firstLetter = sentence.charAt(0);
  var lastLetter = sentence.charAt(end);
  var newSentence = lastLetter + firstLetter;
  return newSentence;
}

function function3(sentence) {
  var firstAndLast = capitalizeFirstAndLastLetter(sentence);
  var firstAndLastSwitched = switchFirstAndLastLetter(firstAndLast);
  return sentence + firstAndLastSwitched;
}

function function4(sentence) {
  var middlePosition = sentence.length / 2;
  var middleCharacter = sentence.charAt(middlePosition);
  return middleCharacter + function3(sentence);
}

function function5(sentence) {
  var toBeReversed = function4(sentence);
  var letters = toBeReversed.split("");
  var i = toBeReversed.length - 1 ;
  var reversed = "";
  while (i >= 0) {
    // console.log(letters[i]);
    reversed += letters[i];
    i--;
  }


  return reversed;
}
alert(function4(sentence));
alert(function5(sentence));
