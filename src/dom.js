import {deleteArrayItems} from "./cards";

let cardShell = [];

const cardContainer = document.querySelector('.todoItems');

export function displayCard(point, title, date, category, description) {
    const titleinput = document.querySelector("input[type='text']");
    titleinput.value = ''; 
    const textarea = document.querySelector("#description");
    textarea.value = '';
    const dateInput = document.querySelector("input[type='date']");
    dateInput.value = '';

    for (let i = point; i < point + 1; i++){
        cardShell[i] = document.createElement("div");
        cardShell[i].classList.add('item'); 
        cardShell[i].id = '' + i;

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
        cardComplete.textContent = "Complete" + point;
        
        cardBottom.appendChild(cardComplete);
        ///////////////////////////////////////////////
    
        cardShell[i].append(cardTop, cardChecklist, cardAddChecklist, cardBottom);
        cardContainer.appendChild(cardShell[i]);
    }
}

export function newChecklistDisplay(i) {
    cardShell[i].children.item(2).firstChild.addEventListener('click', ()=> {
        const newItemtext = prompt("Enter new checklist item");

        const newCheckboxLabel = document.createElement('label');
        newCheckboxLabel.htmlFor = newItemtext + "- domBox";
        newCheckboxLabel.textContent = newItemtext + ": ";

        const newCheckBox = document.createElement('input');
        newCheckBox.type = 'checkbox';
        newCheckBox.id = newItemtext + "- domBox";

        newCheckboxLabel.appendChild(newCheckBox);
        

        cardShell[i].children.item(1).appendChild(newCheckboxLabel);
        //const addCheck = document.createElement("input[type = 'text']");
    });
}

export function doneButtonScript(i) {
    cardShell[i].children.item(3).firstChild.addEventListener('click', () => {
        deleteArrayItems(i);
        const cardID = document.getElementById(i);
        cardID.remove();
    });
}

export function updateCategorySelect() {
    const selectCategories = document.querySelector('#category');
    const removeCategories = document.querySelector('#removecategory');
    const newCategory = document.createElement('option');
    const newSidebarCategory = document.createElement('li');
    const ulCategories = document.querySelector(".addCategories")
    
    
    if (document.getElementById('addcategory').value === ''){
        return
    } else {
        newCategory.textContent = document.getElementById('addcategory').value;

        newSidebarCategory.textContent = document.getElementById('addcategory').value;
        ulCategories.appendChild(newSidebarCategory);

        selectCategories.appendChild(newCategory);
        removeCategories.appendChild(newCategory.cloneNode(true));

        document.getElementById('addcategory').value = '';
        removeCategories.value = "";
    }


}

//Sidebar functionality
let items = document.querySelectorAll(".item");

document.querySelector('#index').addEventListener("click", index());
function index() {
    return function() {
        items = document.querySelectorAll(".item");
        items.forEach( item => {
            item.classList.remove("hide");
        });
    }
}

document.querySelector("#today").addEventListener("click", today());
function today() {
    return function() {
        items = document.querySelectorAll(".item");
        console.log(items);
        items.forEach( item => {
            console.log(item)
            const cardDay = new Date(item.children.item(0).children.item(1).children.item(1).textContent.replace(/-/g,"/"));
            
            const userDay = new Date();

            const fullCardDate = `${cardDay.getMonth()} ${cardDay.getDate()} ${cardDay.getFullYear()}`;
            const fullUserDate = `${userDay.getMonth()} ${userDay.getDate()} ${userDay.getFullYear()}`;

            if (fullCardDate !== fullUserDate){
                item.classList.add("hide");
            }
        });
    }
}

document.querySelector("#tomorrow").addEventListener("click", tomorrow());
function tomorrow() {
    return function() {
        items = document.querySelectorAll(".item");
        items.forEach( item => {
            item.classList.add("hide");
            const cardDay = new Date(item.children.item(0).children.item(1).children.item(1).textContent.replace(/-/g,"/"));
            
            const userDay = new Date();

            if ([0, 2, 4, 6, 7, 9, 11].includes(userDay.getMonth())){
                //checks 31 day months
                if(((userDay.getDate + 1) === 32) && (((((userDay.getMonth() + 1) === cardDay.getMonth()) && (userDay.getFullYear() === cardDay.getFullYear())) || (((userDay.getMonth() + 1) === 12) && (userDay.getFullYear() + 1 === cardDay.getFullYear()))))){
                    //checks if it is the next month or year
                    item.classList.remove("hide");
                } else if (((userDay.getDate() + 1) === cardDay.getDate()) && (userDay.getMonth() === cardDay.getMonth()) && (userDay.getFullYear() === cardDay.getFullYear())) {
                    item.classList.remove("hide");
                }
            } else if ([3, 5, 8, 10].includes(userDay.getMonth())) {
                //Checks 30 day months
                if (((userDay.getDate + 1) === 31) && ((userDay.getMonth() + 1) === cardDay.getMonth()) && (userDay.getFullYear() === cardDay.getFullYear())){
                    item.classList.remove("hide");
                } else if (((userDay.getDate() + 1) === cardDay.getDate()) && (userDay.getMonth() === cardDay.getMonth()) && (userDay.getFullYear() === cardDay.getFullYear())){
                    item.classList.remove("hide");
                }
            } else if ((userDay.getMonth === 1) && ((userDay.getFullYear % 4) !== 0)){
                //not leap year
                if (((userDay.getDate + 1) === 29) && (userDay.getFullYear() === cardDay.getFullYear())){
                    item.classList.remove("hide");
                } else if (((userDay.getDate() + 1) === cardDay.getDate()) && (userDay.getFullYear() === cardDay.getFullYear())){
                    item.classList.remove("hide");
                } 
            } else if ((userDay.getMonth === 1) && ((userDay.getFullYear % 4) === 0)){
                //leap year
                if (((userDay.getDate + 1) === 30) && (userDay.getFullYear() === cardDay.getFullYear())){
                    item.classList.remove("hide");
                } else if (((userDay.getDate() + 1) === cardDay.getDate()) && (userDay.getFullYear() === cardDay.getFullYear())){
                    item.classList.remove("hide");
                } 
            } else {
                return
            }
        });
    }
}

document.querySelector('#someday').addEventListener("click", someday());
function someday() {
    return function() {
        items = document.querySelectorAll(".item");
        items.forEach( item => {
            const cardDay = item.children.item(0).children.item(1).children.item(1).textContent;
            console.log(cardDay);
            if (cardDay === '') {
                item.classList.add("hide");
            }
        });
    }
}

document.querySelector('#noDate').addEventListener("click", nodate());
function nodate() {
    return function() {
        items = document.querySelectorAll(".item");
        items.forEach( item => {
            const cardDay = item.children.item(0).children.item(1).children.item(1).textContent;
            console.log(cardDay);
            if (cardDay !== '') {
                item.classList.add("hide");
            }
        });
    }
}