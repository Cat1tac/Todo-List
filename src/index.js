import './style.css';

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