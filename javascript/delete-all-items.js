'use strict';

function deleteAllItems() {
    const confirmDelete = confirm("Are you sure you want to delete all items and statistics?");

    if (confirmDelete) { // Delete everything
        console.log("listOfItems before: " + listOfItems);
        console.log("listOfWinners before: " + listOfWinners);
        listOfItems.length = 0;
        listOfWinners.length = 0;
        refreshComparison();
        console.log("listOfItems after: " + listOfItems);
        console.log("listOfWinners after: " + listOfWinners);
    }
}