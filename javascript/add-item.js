'use strict';

function addItem() {
    let itemToBeAdded = document.getElementById("add-item-textbox");
    let isThereADuplicate = (listOfItems.indexOf(itemToBeAdded.value) > -1);

    if (isThereADuplicate === true) {
        alert("There is a dupe");
    }

    if ((itemToBeAdded.value.trim() !== "") && (isThereADuplicate === false)) { // Make sure there is something actually there to add
        listOfItems.push(itemToBeAdded.value);
        itemToBeAdded.value = "";
    }

    console.log(listOfItems);
}