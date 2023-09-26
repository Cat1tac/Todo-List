import {cardInfo, } from "./card.js";


function displayCard(title, date, category, description) {
    const cardShell = document.createElement("div");
    cardShell.classList.add('.item'); 
//tophalf of card, 3 children
    const cardTop = document.createElement("div");
    cardTop.classList.add('topItemArea');

    const categoryLabel = document.createElement('h5');
    categoryLabel.textContent = category;
    ////////////////////////////////////////////////
    const titleDate = document.createElement('div');

    const titleLabel = document.createElement('h5');
    titleLabel.textContent = title;

    const dateLabel = document.createElement('h6');
    dateLabel.textContent = date;

    titleDate.append(titleLabel, dateLabel);
    ///////////////////////////////////////////////
    const descriptionlabel = document.createElement('p');
    descriptionlabel.textContent = description;
    
    cardTop.append(categoryLabel, titleDate, descriptionlabel);

//card checklist area
    const cardChecklist = document.createElement("div");
    cardChecklist.classList.add('.checklistItemDisplay');

    //will add the check lists in a different function

//card button for creating a nwe checklist item
    const cardAddChecklist = document.createElement("div");
    cardAddChecklist.classList.add('.addNewChecklistItem');

    const checklistAddButton = document.createElement('button');
    checklistAddButton.textContent = "Add Item";

    cardAddChecklist.appendChild(checklistAddButton);

//bottom area of card
    const cardBottom = document.createElement("div");
    cardBottom.classList.add('bottomItemArea');

    const cardComplete = document.createElement('button');
    cardComplete.textContent = "Done";
    
    cardBottom.appendChild(cardComplete);
    ///////////////////////////////////////////////

    cardShell.append(cardTop, cardChecklist, cardAddChecklist, cardBottom);

    return {cardShell, cardChecklist}
}

function newChecklistDisplay(cardChecklist) {

}

export {displayCard};