import './style.css';
import {cardInfo} from "./cards";
import {updateCategorySelect} from './dom'
//import displayCard from "./dom";


taskform();
formCategory();


function taskform() {
    const form = document.querySelector("div.formContainer");

    const newTask = document.querySelector(".addNewTask");
    newTask.addEventListener('click', ()=> {
        form.classList.toggle("notVisible");
    });

    const formSubmit = document.querySelector('input[type="submit"]');
    formSubmit.addEventListener('click', function(event) {
        event.preventDefault();
        cardInfo();
        form.classList.add('notVisible');
    });
}

//window.onclick = closeForms;

function closeForms() {
    //currently does not work
    const form = document.querySelector("div.formContainer");
    const categoryForm = document.querySelector(".formCategory");
    if(!form.classList.contains("notVisible") || !categoryForm.classList.contains('notVisible')){
        categoryForm.classList.toggle('notVisible');
        form.classList.toggle("notVisible");
    }
}

function formCategory() {
    const newCategory = document.querySelector(".addNewCategory");
    const categoryForm = document.querySelector(".formCategory");
    newCategory.addEventListener("click", () => {
        categoryForm.classList.toggle('notVisible');
    });


    const applybutton = document.querySelector(".formCategory > * > button");
    applybutton.addEventListener('click', function(event) {
        event.preventDefault();
        updateCategorySelect();
        categoryForm.classList.add('notVisible');
    });
}



/*
Things t0 work on:
- Make priority button work
- Make the rest of the side buttons work and add svgs to them
- Make it so the new categories can actually sort the todos
*/