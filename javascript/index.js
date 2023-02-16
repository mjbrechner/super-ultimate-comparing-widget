'use strict';

let listOfWinners = [];
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
    statsInfo.innerText = `${mostRecentWinner} has been chosen ${count} times.`;
    statsInfo.style.visibility = "visible";
}



function item1Chosen() {
    // Add the chosen item to listOfWinners unless it is a choice that is n/a.
    let winningItem = document.getElementById("item1").innerText;
    if (winningItem !== `n/a`) {
        listOfWinners.push(winningItem);
        CountingUpTheWinners();
        refreshComparison();
        console.log(listOfWinners);
    }
}

function item2Chosen() {
    // Add the chosen item to listOfWinners unless it is a choice that is n/a.
    let winningItem = document.getElementById("item2").innerText;
    if (winningItem !== `n/a`) {
        listOfWinners.push(winningItem);
        CountingUpTheWinners();
        refreshComparison();
        console.log(listOfWinners);
    }
}