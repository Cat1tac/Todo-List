import { checkTheBox } from "./cards";

let cardShell = [];

const cardContainer = document.querySelector('.todoItems');

export function displayCard(point, identification, title, date, category, description, priority) {
    const titleinput = document.querySelector("input[type='text']");
    titleinput.value = ''; 
    const textarea = document.querySelector("#description");
    textarea.value = '';
    const dateInput = document.querySelector("input[type='date']");
    dateInput.value = '';

    for (let i = point; i < point + 1; i++){
        cardShell[i] = document.createElement("div");
        cardShell[i].classList.add('item'); 
        cardShell[i].id = '' + identification;

        if (priority === true) cardShell[i].classList.add('priority'); 

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
        cardChecklist.classList.add('checklistItemDisplay');
    
    //card button for creating a new checklist item
        const cardAddChecklist = document.createElement("div");
        cardAddChecklist.classList.add('addNewChecklistItem');
    
        const checklistAddButton = document.createElement('button');
        checklistAddButton.textContent = "Add Item";
    
        cardAddChecklist.appendChild(checklistAddButton);
    
    //bottom area of card
        const cardBottom = document.createElement("div");
        cardBottom.classList.add('bottomItemArea');
    
        const cardComplete = document.createElement('button');
        cardComplete.textContent = "Complete";
        
        cardBottom.appendChild(cardComplete);
        ///////////////////////////////////////////////
    
        cardShell[i].append(cardTop, cardChecklist, cardAddChecklist, cardBottom);
        cardContainer.appendChild(cardShell[i]);
        
    }
}

export function displayStoredChecklists(i, listItem, check) {
    const cardID = document.getElementById(i);

    const newCheckboxLabel = document.createElement('label');
    newCheckboxLabel.htmlFor = listItem + "- domBox";
    newCheckboxLabel.textContent = ": " + listItem;

    const newCheckBox = document.createElement('input');
    newCheckBox.type = 'checkbox';
    newCheckBox.id = listItem + "- domBox";
    newCheckBox.value = check;
    newCheckBox.checked = check;
    newCheckBox.addEventListener('change', checkTheBox(cardID, listItem, newCheckBox));


    newCheckBox.appendChild(newCheckboxLabel);

    const cardChecklistdiv = document.createElement("div");

    cardID.children.item(1).append(cardChecklistdiv);
    cardID.children.item(1).lastChild.appendChild(newCheckBox);
    cardID.children.item(1).lastChild.appendChild(newCheckboxLabel);
}

