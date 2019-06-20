$(function(){
  $("form#groceries").submit(function(event) {
    event.preventDefault();
    $("#groceries").hide();

    // var items = [$("#item1").val(), $("#item2").val(), $("#item3").val()];

    var itemNums = [1, 2, 3, 4];
    var items = itemNums.map(function(itemNum) {
      return $("#item" + itemNum).val();
    });

    // // Using a for loop
    // numberOfItems = 4;
    // items = [];
    // for (var itemNumber = 1; itemNumber <= numberOfItems; itemNumber++) {
    //   items.push( $("#item" + itemNumber).val() );
    // }

    items.sort();

    items.forEach(function(item) {
      $(".list").append("<li>" + item.toUpperCase() + "</li>");
    });

    // Using a for loop
    // for (var index = 0; index < items.length; index++) {
    //   $(".list").append("<li>" + items[index].toUpperCase() + "</li>");
    // }
  });
});
