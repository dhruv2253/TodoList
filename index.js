const button = document.querySelector('.create');
const tododiv = document.querySelector('.todos');
const popup = document.querySelector('.popup');
const postTodo = document.querySelector('.postTodo');
class todos{


    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    } 
}




function popUp(){
   popup.style.display = "block";
   console.log('ff');
}

button.addEventListener('click', popUp)

postTodo.addEventListener('click', () =>{
    popup.style.display = "none";
})
