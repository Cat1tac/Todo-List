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



//Add clear to all forms, fix spacnig issue for newly created items, add ability to add checklists to items, generally make everything look better