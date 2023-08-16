const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('#todo-input');
const todo = document.querySelector('.form');

console.log(todoInput)

todo.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log(e.target);
    const newTodoText = todoInput.value;
    const newTodo = document.createElement('li');
    console.log(todoInput.value)
    const liHtml = `<span class="text">${newTodoText}</span>
    <div class="button-group">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`
    todoInput.value = ""
    newTodo.innerHTML = liHtml;
    todoList.append(newTodo)
});

// Creating this using event Delegation Technique

todoList.addEventListener("click", (e) => {
    console.log(e.target)
    if(e.target.classList.contains("done")) {
        // console.log("done")
        e.target.parentNode.previousElementSibling.style.textDecoration = "line-through"
    }else if(e.target.classList.contains("remove")) {
        console.log("remove")
        e.target.parentNode.parentNode.remove();
    }
})