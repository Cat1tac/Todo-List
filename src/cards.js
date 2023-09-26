import { displayCard } from "./dom";

let cardArray = [];
let cards = [];

class Card {
    constructor(title, date, category, description){
        this.title = title;
        this.date = date;
        this.category = category;
        this.description = description;
    }

    /*addChecklistItem(){

    }

    completeTask() {

    }
    */
}

export function cardInfo() {
    let cardTitle;
    let cardDescription;
    let cardCategory;
    let cardDate;
    let cardPriority;
    cardTitle = document.getElementById('title');
    cardDescription = document.getElementById('description');
    cardCategory = document.getElementById('category');
    cardDate = document.getElementById('due');
    cardPriority = priorityValue();
    for(let i = cardArray.length; i < cardArray.length + 1; i++){
        cards[i] = new Card(title, date, category, description);
        displayCard
    }

    cardArray.push(cards[cards.length - 1]);

    return {cards}
}

function priorityValue() {
    const priorityCheck = document.querySelector("input[type='checkbox']");
    for (let i = 0; i < priorityCheck.length; i++) {
        if (priorityCheck.checked){
            //going to change card color
        }
    }
}