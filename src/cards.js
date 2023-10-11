import { displayCard } from "./dom";
import { serializeCard, card_deserializeList, card_List, serializeChecklist, storedLists, serializeCheck } from "./localStorage";

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
        const cardID = document.getElementById(i);
        cardID.children.item(2).firstChild.addEventListener('click', ()=> {
            const newItemtext = prompt("Enter new checklist item");
            if (newItemtext !== ''){
                const newCheckboxLabel = document.createElement('label');
                newCheckboxLabel.htmlFor = newItemtext + "- domBox";
                newCheckboxLabel.textContent = ": " + newItemtext;
    
                const newCheckBox = document.createElement('input');
                newCheckBox.type = 'checkbox';
                newCheckBox.id = newItemtext + "- domBox";
                newCheckBox.addEventListener('change', checkTheBox(cardID, newItemtext, newCheckBox));
    
                newCheckBox.appendChild(newCheckboxLabel);
    
                const cardChecklistdiv = document.createElement("div");
    
                cardID.children.item(1).append(cardChecklistdiv);
                cardID.children.item(1).lastChild.appendChild(newCheckBox);
                cardID.children.item(1).lastChild.appendChild(newCheckboxLabel);
            
                serializeChecklist(cardID.id, newItemtext);
            }
        });
    }

    completeTask(i) {
        const cardID = document.getElementById(i);
        
        cardID.children.item(3).firstChild.addEventListener('click', () => {
            console.log(i);
            console.log(cardID);
            
            for (let r = 0; r < card_List.length; r++){
                if (card_List[r].identifier === cardID.id){
                    console.log(card_List[r].identifier);
                    console.log(card_List[r]);
                    card_List.splice(r, 1);
                    storedLists.splice(r, 1);
                    deleteArrayItems(r);
                }
            }
            
            serializeCard(undefined);
            serializeChecklist(undefined, undefined);

            cardID.remove();
        });
        
    }

}

if(card_deserializeList !== null){
    for(let i = 0; i < card_deserializeList.length; i++){
        card_deserializeList[i] = new Card(card_deserializeList[i].title, card_deserializeList[i].date, card_deserializeList[i].category, card_deserializeList[i].description, card_deserializeList[i].identifier, card_deserializeList[i].priority);
        card_deserializeList[i].addChecklistItem(parseInt(card_deserializeList[i].identifier));
        card_deserializeList[i].completeTask(parseInt(card_deserializeList[i].identifier));

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

export function checkTheBox(id, listitem, newCheckBox) {
    return function() {
        console.log(newCheckBox.checked);
        serializeCheck(id.id, listitem, newCheckBox.checked);
        /*
        if(newCheckBox.checked == false){
            newCheckBox.value = true;
            console.log(newCheckBox.value);
            serializeCheck(id.id, listitem, newCheckBox.checked);
        } else {
            console.log("lol");
            newCheckBox.value = false;
            serializeCheck(id.id, listitem, newCheckBox.);
        }
        */
    }
    
}