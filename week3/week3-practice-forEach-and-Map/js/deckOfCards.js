var deck = []
var suits = ["spades", "hearts" ,"diamonds", "clubs"]
var faces = ["Ace",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"]
suits.forEach(function(suit){
 faces.forEach(function(card){
    deck.push(card + " of " + suit)
  });
});

function shuffle(values) {
  for (var currentIndex = 0; currentIndex < values.length; currentIndex++) {
    // Generate a random index
    var randomIndex = Math.floor(Math.random() * values.length);
    // Swap value at current index with value at
    var currentValue = values[currentIndex];
    values[currentIndex] = values[randomIndex];
    values[randomIndex] = currentValue;
  }
}

shuffle(deck);
console.log(deck);
