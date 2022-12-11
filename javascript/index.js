'use strict';

let listOfWinners = [];
const statsInfo = document.getElementById("stats-info");



function refreshComparison() {
    //Choose a random number from the array of items
    let randomizer1 = Math.floor(Math.random() * listOfItems.length);
    let randomizer2 = Math.floor(Math.random() * listOfItems.length);

    // Make sure both items are unique
    do {
        randomizer2 = Math.floor(Math.random() * listOfItems.length);
    } while (randomizer2 === randomizer1);

    document.getElementById("item1").innerText = listOfItems[randomizer1].toUpperCase();
    document.getElementById("item2").innerText = listOfItems[randomizer2].toUpperCase();
}



function CountingUpTheWinners() {
    
    // if (statsInfo.firstChild) {
    //     while (statsInfo.firstChild) {
    //         statsInfo.removeChild();
    //     }
    // }

    let count;

    for (let i = 0; i <= listOfItems.length; i++) {
        count = 0;
        listOfWinners.forEach(element => {
            if (element === listOfWinners[i]) {
                count += 1;
            }
        });
        console.log(`There have been ${count} choosings of ${listOfWinners[i]}!`);
        let addItemToStatsList = document.createElement("li");
        statsInfo.appendChild(addItemToStatsList);
        addItemToStatsList.setAttribute("class", "stats-info-list-item");
        addItemToStatsList.innerText = `There have been ${count} choosings of ${listOfWinners[i]}!`

    }
}

function item1Chosen() {
    listOfWinners.push(document.getElementById("item1").innerText);
    refreshComparison();
    CountingUpTheWinners();
    console.log(listOfWinners);
}

function item2Chosen() {
    listOfWinners.push(document.getElementById("item2").innerText);
    refreshComparison();
    CountingUpTheWinners();
    console.log(listOfWinners);
}