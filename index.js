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

function postList(e) {
    e.preventDefault();
    title = titleInput.value;
    description = descriptionInput.value;
    dueDate = dueInput.value;
    priority = priorityInput.value;
    todo = new Todos(title, description, dueDate, priority);
    popup.style.display = "none";
    console.log(todo);

    const postedList = document.createElement('div');
    postedList.classList.add('postedList');
    const listInfo = document.createElement('p');
    listInfo.classList.add('listInfo');
    listInfo.textContent = `Title: ${todo.title} \n Description: ${todo.description} \n Due date: ${todo.dueDate} \n Priority: ${todo.priority} \n`;
    console.log(listInfo.textContent);
    postedList.appendChild(listInfo);
    postedList.appendChild(todos);
};