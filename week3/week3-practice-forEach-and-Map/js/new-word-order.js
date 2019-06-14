$(function(){
  $("form#groceries").submit(function(event) {
    event.preventDefault();
    $(".wordTable").empty();
    var text = $("#inputText").val()
    var words = text.split(/\W/)
    // var punctuationChars = [" ", ",", ".", ""]
    // words = words.filter(word => !punctuationChars.includes(word))
    words = words.filter(word => word !== "")
    var wordcount = new Map()
    words.forEach(function(word){
      var count = wordcount.get(word);
      // debugger
      if (count) {
        count += 1;
      } else {
        count = 1;
      }
      wordcount.set(word, count);
    });
    words = Array.from(wordcount.keys());
    words.sort((word1, word2) => wordcount.get(word1) - wordcount.get(word2))
    console.log(wordcount);
    console.log(words)
    words.forEach(function(words){
      $(".wordTable").append("<tr><td>" + words +"</td><td>" + wordcount.get(words) + "</td></tr>")
    })
    // debugger
  });
});
