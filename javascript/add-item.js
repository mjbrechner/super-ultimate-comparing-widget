'use strict';

function addItem() {
    let itemToBeAdded = document.getElementById("add-item-textbox");
    itemToBeAdded.value = itemToBeAdded.value.toUpperCase();

    let isThereADuplicate = (listOfItems.indexOf(itemToBeAdded.value) > -1);

    if (isThereADuplicate === true) {
        alert("This item has already been added. Try a different option.");
        itemToBeAdded.value = "";
    }

    if ((itemToBeAdded.value.trim() !== "") && (isThereADuplicate === false)) { // Make sure there is something actually there to add
        listOfItems.push(itemToBeAdded.value);
        alert(`${itemToBeAdded.value} added to the list of possibilities!`);
        itemToBeAdded.value = "";

        console.log(`listOfItems now reads: ${listOfItems}. There are ${listOfItems.length} items.`);

        refreshComparison(); // Once the item is added, refresh the choices currently being presented.
    } else { // If the button has been clicked but there is nothing to add
        alert("Type in a new entry.");
        itemToBeAdded.value = ""; // In case the user just added blank spaces, clear out the input box.
    }

}