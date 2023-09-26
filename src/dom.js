
let cardShell = [];
const cardContainer = document.querySelector('.todoItems');

function displayCard(point, title, date, category, description) {
    const allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');



    for (let i = point; i < point + 1; i++){
        cardShell[i] = document.createElement("div");
        cardShell[i].classList.add('item'); 

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
    
        //will add the check lists in a different function
        //will need to make an array


    
    //card button for creating a nwe checklist item
        const cardAddChecklist = document.createElement("div");
        cardAddChecklist.classList.add('addNewChecklistItem');
    
        const checklistAddButton = document.createElement('button');
        checklistAddButton.textContent = "Add Item";
    
        cardAddChecklist.appendChild(checklistAddButton);
    
    //bottom area of card
        const cardBottom = document.createElement("div");
        cardBottom.classList.add('bottomItemArea');
    
        const cardComplete = document.createElement('button');
        cardComplete.textContent = "Done";
        //will need to make an array
        
        cardBottom.appendChild(cardComplete);
        ///////////////////////////////////////////////
    
        cardShell[i].append(cardTop, cardChecklist, cardAddChecklist, cardBottom);
        console.log(cardShell[i]);
        cardContainer.appendChild(cardShell[i]);
        console.log("lol");
    }
    
    //return {cardChecklist}
}

function newChecklistDisplay(cardChecklist) {

}

export {displayCard};