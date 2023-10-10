import { displayCard, newChecklistDisplay } from "./dom";
import { serializeCard, card_deserializeList, card_List } from "./localStorage";

let cardArray = [];
let cards = [];

export class Card {
    constructor(title, date, category, description, identifier, priority){
        this.title = title;
        this.date = date;
        this.category = category;
        this.description = description;
        this.identifier = '' + identifier;
        this.priority = priority;
    }

    addChecklistItem(i){
        newChecklistDisplay(i)
    }

    completeTask(i) {
        const cardID = document.getElementById(i);
        console.log(cardID);
        console.log(cardID.children);
        cardID.children.item(3).firstChild.addEventListener('click', () => {
            console.log(i);
            console.log(cardID);
            
            for (let r = 0; r < card_List.length; r++){
                if (card_List[r].identifier === cardID.id){
                    console.log(card_List[r].identifier);
                    console.log(card_List[r]);
                    card_List.splice(r, 1);
                    deleteArrayItems(r);
                }
            }
            
            serializeCard(undefined);

            cardID.remove();
        });
        
    }

}

if(card_deserializeList !== null){
    for(let i = 0; i < card_deserializeList.length; i++){
        card_deserializeList[i] = new Card(card_deserializeList[i].title, card_deserializeList[i].date, card_deserializeList[i].category, card_deserializeList[i].description, card_deserializeList[i].identifier, card_deserializeList[i].priority);
        card_deserializeList[i].addChecklistItem(parseInt(card_deserializeList[i].identifier));
        card_deserializeList[i].completeTask(parseInt(card_deserializeList[i].identifier));

        console.log(card_deserializeList[i]);
        cards.push(card_deserializeList[i]); 
        cardArray.push(i);
    }
}

export function cardInfo() {
    let cardTitle;
    let cardDescription;
    let cardCategory;
    let cardDate;
    let cardPriority;
    let identification;
    cardTitle = document.getElementById('title').value;
    cardDescription = document.getElementById('description').value;
    cardCategory = document.getElementById('category').value;
    cardDate = document.getElementById('due').value;
    cardPriority = priorityValue();
    identification = Math.floor((Math.random() * 1000) * (Math.random() * 100));
    console.log(identification);
    for(let i = cardArray.length; i < cardArray.length + 1; i++){
        cards[i] = new Card(cardTitle, cardDate, cardCategory, cardDescription, identification, cardPriority);
        displayCard(i, identification, cardTitle, cardDate, cardCategory, cardDescription, cardPriority);
        cards[i].addChecklistItem(identification);
        cards[i].completeTask(identification);
        serializeCard(cards[i]);
    }

    cardArray.push(cards[cards.length - 1]);
}

function priorityValue() {
    const priorityCheck = document.querySelector("input[type='checkbox']");
    if (priorityCheck.checked){
        return true;
    } else {
        return false;
    }
}

export function deleteArrayItems(i) {
    cards.splice(i, 1);
    console.log(cards);
    cardArray.splice(i, 1);
}