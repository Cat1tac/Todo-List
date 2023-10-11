import { displayCard, displayStoredChecklists } from "./dom";

export let card_List = [];
export let storedLists = [];
function CheckListStore(id) {
    this.cardid = id,
    this.cardListArray = [],
    this.checked = []
}

export const card_deserializeList = JSON.parse(localStorage.getItem("domCards"));
const storedlist_deserialize = JSON.parse(localStorage.getItem("checklist"));

deserializecards();
deserializeChecklist()

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

export function serializeChecklist(id, listItem){
    if (id === undefined){
        const StoredList_serialized = JSON.stringify(storedLists);
        localStorage.setItem("checklist", StoredList_serialized);
    } else {

        if(storedLists.some(e => e.cardid === id)){
            const index = storedLists.findIndex(e => e.cardid === id);
            storedLists[index].cardListArray.push(listItem);
        } else {
            const newStoredList = new CheckListStore(id);
            newStoredList.cardListArray.push(listItem);
            newStoredList.checked.push(false);
            storedLists.push(newStoredList);
            
        }
        
        const StoredList_serialized = JSON.stringify(storedLists);
        localStorage.setItem("checklist", StoredList_serialized);
    }
    
}

export function serializeCheck(id, listItem, check){
   
    const cardindex = storedLists.findIndex(e => e.cardid === id);
    
    const listItemIndex = storedLists[cardindex].cardListArray.findIndex(e => e === listItem);
    
    
    storedLists[cardindex].checked[listItemIndex] = check;
    

    const StoredList_serialized = JSON.stringify(storedLists);
    localStorage.setItem("checklist", StoredList_serialized);
}

function deserializecards() {
    
    if(card_deserializeList !== null){
        for(let i = 0; i < card_deserializeList.length; i++){
            card_List.push(card_deserializeList[i]);
            displayCard(i, parseInt(card_deserializeList[i].identifier), card_deserializeList[i].title, card_deserializeList[i].date, card_deserializeList[i].category, card_deserializeList[i].description, card_deserializeList[i].priority);
        }
    }

}

function deserializeChecklist() {
    if(storedlist_deserialize !== null){
        for(let i = 0; i < storedlist_deserialize.length; i++){
            storedLists.push(storedlist_deserialize[i]);
            for(let r = 0; r < storedlist_deserialize[i].cardListArray.length; r++){
                displayStoredChecklists(storedlist_deserialize[i].cardid, storedlist_deserialize[i].cardListArray[r], storedlist_deserialize[i].checked[r]);
            }
        }
    }
}

