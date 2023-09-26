import './style.css';
import Card from "./card";
import displayCard from "./dom";

const newTask = document.querySelector(".addNewTask");
const form = document.querySelector("div.formContainer");

newTask.addEventListener('click', ()=> {
    if (form.classList.contains("notVisible")){
        form.classList.remove('notVisible');
        form.classList.add('visiblie');
        console.log(form.getElementsByClassName('visible'));
    } else {
        form.classList.remove('visible');
        form.classList.add('notVisible');
    }
});

const formSubmit = document.querySelector('input[type="submit"]');

formSubmit.addEventListener('click', function(event) {
    event.preventDefault();

});