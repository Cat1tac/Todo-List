import { displayCard } from "./dom";

export let card_List = [];
let listItemArray = [];
export const card_deserializeList = JSON.parse(localStorage.getItem("domCards"));


deserialize();

export function serializeCard(card) {
    if(card === undefined){
        const card_serializedList = JSON.stringify(card_List);
        localStorage.setItem("domCards", card_serializedList);
    } else {
        card_List.push(card);
        const card_serializedList = JSON.stringify(card_List);
        
        localStorage.setItem("domCards", card_serializedList);
    }
    
}
//whe a new check is created, the program should find the cardid it was created on then append it to the list of cardItems
export function serializeChecklist(id, listItem){
    const checkListStore = {
        cardid: id,
        cardListItem: function () {
            listItemArray.push(listItem);
            return listItemArray;
        }
    }
    console.log(checkListStore);
    
}

function deserialize() {
    
    if(card_deserializeList !== null){
        for(let i = 0; i < card_deserializeList.length; i++){
            card_List.push(card_deserializeList[i]);
            displayCard(i, parseInt(card_deserializeList[i].identifier), card_deserializeList[i].title, card_deserializeList[i].date, card_deserializeList[i].category, card_deserializeList[i].description, card_deserializeList[i].priority);
        }
    }

}

