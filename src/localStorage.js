export function serialize(domCard) {
    const domCard_serialized = JSON.stringify(domCard);
    localStorage("domCards", domCard_serialized);
}

function deserialize(){
    
}