'use strict';

let listOfWinners = [];
let listOfWinnersUnique = [];
const statsInfo = document.getElementById("stats-info");
let itemChoice1;
let itemChoice2;

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
        // console.log(`There have been ${count} choosings of ${listOfWinners[i]}!`);


        if ((count >= 1) && (listOfWinners[i])) {
            listOfWinnersUnique.push(`${listOfWinners[i]} has been chosen ${count} times.`);
            let addItemToStatsList = document.createElement("li");
            statsInfo.appendChild(addItemToStatsList);
            addItemToStatsList.setAttribute("class", "stats-info-list-item");
            addItemToStatsList.innerText = `${listOfWinners[i]} has been chosen ${count} times.`;
        }
    }

    // Erase duplicates
    listOfWinnersUnique = [...new Set(listOfWinnersUnique)];
    console.log(listOfWinnersUnique);
}



function item1Chosen() {
    listOfWinners.push(document.getElementById("item1").innerText);
    refreshComparison();
    CountingUpTheWinners();
    // console.log(listOfWinners);
}

function item2Chosen() {
    listOfWinners.push(document.getElementById("item2").innerText);
    refreshComparison();
    CountingUpTheWinners();
    // console.log(listOfWinners);
}