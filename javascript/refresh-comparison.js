'use strict';

function refreshComparison() {
    // Only run this if listOfItems has at least three entries
    if (listOfItems.length >= 3) {

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

        if (listOfItems.length <= 1) {
            document.getElementById("instructions").innerText = `The widget can only run with at least three entries. Please add ${3-(listOfItems.length)} items to the list!`;
        } else {
            document.getElementById("instructions").innerText = `The widget can only run with at least three entries. Please add one more item to the list!`;
        };
        document.getElementById("item1").innerText = `n/a`;
        document.getElementById("item2").innerText = `n/a`;
    }
}