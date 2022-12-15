'use strict';

function refreshComparison() {
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
}