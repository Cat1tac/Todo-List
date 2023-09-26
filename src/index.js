import './style.css';
import {cardInfo} from "./cards";
//import displayCard from "./dom";

const newTask = document.querySelector(".addNewTask");
const newCategory = document.querySelector(".addNewCategory");
const form = document.querySelector("div.formContainer");

newTask.addEventListener('click', ()=> {
    if (form.classList.contains("notVisible")){
        form.classList.remove('notVisible');
        form.classList.add('visiblie');
    } else {
        form.classList.remove('visible');
        form.classList.add('notVisible');
    }
});

const formSubmit = document.querySelector('input[type="submit"]');

formSubmit.addEventListener('click', function(event) {
    event.preventDefault();
    cardInfo();
    form.classList.remove('visible');
    form.classList.add('notVisible');
});