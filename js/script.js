let todos = [];

console.log('Hello World')

function validateForm(){
    const todo = document.getElementById('todo-input').value;
    const date = document.getElementById('todo-date').value; 

    if (todo === '' || date === ''){
        alert('Please fill in both the todo item and the due date')
    } else {
        addTodo(todo, date);
    }
    
}

function addTodo(todo, date) {
    const todoItem = {
        task: todo,
        date: date,
    }

    todos.push(todoItem);
    renderTodos();
}

function renderTodos() {
    const todoList = document.getElementById('todo-list');

    todoList.innerHTML = '';

    todos.forEach((todo, _) => {
        todoList.innerHTML += `
        <li>
            <p class"text-2xl">${todo.task} <span class="text-sm text-gray-500">(${todo.date})</span></p>
            <hr />
        </li>`;
    });
}

function clearTodos() {
    todos = [];
    console.log(todos);
    renderTodos();
}

