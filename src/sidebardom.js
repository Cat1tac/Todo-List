//Sidebar functionality
console.log("res");
let items = document.querySelectorAll(".item");
highlight(document.querySelector('#index'));


document.querySelector('#index').addEventListener("click", index());
function index() {
    return function(event) {
        highlight(event.target);
        items = document.querySelectorAll(".item");
        items.forEach( item => {
            item.classList.remove("hide");
        });
    }
}

document.querySelector("#today").addEventListener("click", today());
function today() {
    return function(event) {
        highlight(event.target);
        items = document.querySelectorAll(".item");
        items.forEach( item => {
            item.classList.remove("hide");
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
    return function(event) {
        highlight(event.target)
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
    return function(event) {
        highlight(event.target);
        items = document.querySelectorAll(".item");
        items.forEach( item => {
            item.classList.remove("hide");
            const cardDay = item.children.item(0).children.item(1).children.item(1).textContent;
            if (cardDay === '') {
                item.classList.add("hide");
            }
        });
    }
}

document.querySelector('#noDate').addEventListener("click", nodate());
function nodate() {
    return function(event) {
        highlight(event.target);
        items = document.querySelectorAll(".item");
        items.forEach( item => {
            item.classList.remove("hide");
            const cardDay = item.children.item(0).children.item(1).children.item(1).textContent;
            if (cardDay !== '') {
                item.classList.add("hide");
            }
        });
    }
}

//Category functtionality

function categoryClick(){
    return function(event) {
        highlight(event.target)
        items = document.querySelectorAll(".item");
        const clickedCategory = event.target.textContent;
        items.forEach( item => {
            item.classList.remove("hide");
            
            const cardCategory = item.children.item(0).children.item(0).textContent;
             
            if(clickedCategory !== cardCategory){
                item.classList.add("hide");
            }
        });
    }
}

function highlight(pressed) {
    const timeCats = document.querySelector(".sortTime").children;
    for(let i = 0; i < timeCats.length; i++){
        timeCats[i].classList.remove("highlight");
    }
    
    console.log(pressed);
    pressed.classList.add("highlight");
}