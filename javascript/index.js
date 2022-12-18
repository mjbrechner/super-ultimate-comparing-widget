'use strict';

let listOfWinners = [];
let listOfWinnersUnique = [];
const statsInfo = document.getElementById("stats-info");
let itemChoice1;
let itemChoice2;

function CountingUpTheWinners() {
    let mostRecentWinner = listOfWinners.findLast((element) => element);
    let count = 0;

    listOfWinners.forEach(e => {
        if (e === mostRecentWinner) {
            count += 1;
        }
    });
    document.getElementById("stats-info").innerText = `${mostRecentWinner} has been chosen ${count} times.`;
}



function item1Chosen() {
    listOfWinners.push(document.getElementById("item1").innerText);
    CountingUpTheWinners();
    refreshComparison();
    console.log(listOfWinners);
}

function item2Chosen() {
    listOfWinners.push(document.getElementById("item2").innerText);
    CountingUpTheWinners();
    refreshComparison();
    console.log(listOfWinners);
}