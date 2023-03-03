import { compareAsc, format } from "date-fns"
import { fr } from "date-fns/locale";

const button = document.querySelector('.create');
const tododiv = document.querySelector('.todos');
const popup = document.querySelector('.popup');
const postTodo = document.querySelector('.postTodo');
const form = document.querySelector('.form');
const titleInput = document.querySelector('.titleinp');
const descriptionInput = document.querySelector('.descriptioninp');
const dueInput = document.querySelector('.dueinp');
const priorityInput = document.querySelector('.priorinp');
const todos = document.querySelector('.todos');
let datas;
class Todos{

    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    } 
}




function popUp(){
   popup.style.display = "block";
 
}

button.addEventListener('click', popUp);

postTodo.addEventListener('click', postList);


let todoList = localStorage.getItem("todoList")? JSON.parse(localStorage.getItem("todoList")) : [];

if (localStorage.getItem("todoList") !== null) {
    todoList.forEach(function(todo) {


    const postedList = document.createElement('div');
    postedList.classList.add('postedList');
    const listInfo = document.createElement('p');           
    const delButton = document.createElement('button');
  
    listInfo.classList.add('listInfo');
    listInfo.textContent = `Title: ${todo.title} \n Description: ${todo.description} \n Due date: ${todo.dueDate} \n Priority: ${todo.priority} \n`;
    postedList.appendChild(listInfo);
    todos.appendChild(postedList);

    delButton.classList.add('delete');
    delButton.textContent = "X";
    delButton.addEventListener('click', () => {
        delButton.parentElement.remove(postedList);
        todoList.splice(todoList.indexOf(todo), 1);
        localStorage.setItem('todoList', JSON.stringify(todoList));


    })
    postedList.appendChild(delButton);
    localStorage.setItem('todoList', JSON.stringify(todoList));

        })
}

function postList(e) {
    e.preventDefault();
    const title = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = dueInput.value;
    const priority = priorityInput.value;
    let todo = new Todos(title, description, dueDate, priority);
    popup.style.display = "none";
   



    const postedList = document.createElement('div');
    postedList.classList.add('postedList');
    const listInfo = document.createElement('p');
    const delButton = document.createElement('button');
  
    listInfo.classList.add('listInfo');
    listInfo.textContent = `Title: ${todo.title} \n Description: ${todo.description} \n Due date: ${todo.dueDate} \n Priority: ${todo.priority} \n`;
    postedList.appendChild(listInfo);
    todos.appendChild(postedList);

    todoList.push(todo);

    delButton.classList.add('delete');
    delButton.textContent = "X";
    delButton.addEventListener('click', () => {
        delButton.parentElement.remove(postedList);
        todoList.splice(todoList.indexOf(todo), 1);
        localStorage.setItem('todoList', JSON.stringify(todoList));


    })
    postedList.appendChild(delButton);

    localStorage.setItem('todoList', JSON.stringify(todoList));

    console.log(JSON.parse(localStorage.getItem('todoList')));
};



/** */
