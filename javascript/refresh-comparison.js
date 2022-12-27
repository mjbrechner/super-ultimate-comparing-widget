'use strict';

function refreshComparison() {
// Only run this if listOfItems has at least five entries
if (listOfItems.length >= 5) {

    document.getElementById("instructions").innerText = `Which is best?`;
    //Choose a random number from the array of items
    let randomizer1 = Math.floor(Math.random() * listOfItems.length);
    let randomizer2 = Math.floor(Math.random() * listOfItems.length);

    // Make sure both items are unique
    do {
        randomizer2 = Math.floor(Math.random() * listOfItems.length);
    } while (randomizer2 === randomizer1);

    let itemChoice1 = listOfItems[randomizer1].toUpperCase();
    let itemChoice2 = listOfItems[randomizer2].toUpperCase();

    document.getElementById("item1").innerText = itemChoice1;
    document.getElementById("item2").innerText = itemChoice2;

} else {
    document.getElementById("instructions").innerText = `The widget can only run with at least five entries. Please add an item to the list!`;
    document.getElementById("item1").innerText = `n/a`;
    document.getElementById("item2").innerText = `n/a`;
}
}