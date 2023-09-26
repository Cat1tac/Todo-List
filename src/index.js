import './style.css';
import {cardInfo} from "./cards";
import {updateCategorySelect} from './dom'
//import displayCard from "./dom";



const form = document.querySelector("div.formContainer");

const newTask = document.querySelector(".addNewTask");
newTask.addEventListener('click', ()=> {
    if (form.classList.contains("notVisible")){
        form.classList.remove('notVisible');
        form.classList.add('visiblie');
    } else {
        form.classList.remove('visible');
        form.classList.add('notVisible');
    }
});

const newCategory = document.querySelector(".addNewCategory");
const categoryForm = document.querySelector(".formCategory")
newCategory.addEventListener("click", () => {
    if (categoryForm.classList.contains("notVisible")){
        categoryForm.classList.remove('notVisible');
        categoryForm.classList.add('visiblie');
    } else {
        updateCategorySelect();
        categoryForm.classList.remove('visible');
        categoryForm.classList.add('notVisible');
    }

});

const formSubmit = document.querySelector('input[type="submit"]');

formSubmit.addEventListener('click', function(event) {
    event.preventDefault();
    cardInfo();
    form.classList.remove('visible');
    form.classList.add('notVisible');
});