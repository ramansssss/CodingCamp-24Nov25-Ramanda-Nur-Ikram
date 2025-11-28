let todos = [];

function validateForm() {
    const task = document.getElementById('todo-input').value;
    const date = document.getElementById('todo-date').value;

    if (task === '' || date === '') {
        alert('Please fill in the todo and date');
        return;
    }

    addTodo(task, date);
}

function addTodo(task, date) {
    const todoItem = {
        id: Date.now(),
        task,
        date,
        status: "pending"
    };

    todos.push(todoItem);
    renderTodos(todos);

    document.getElementById('todo-input').value = "";
    document.getElementById('todo-date').value = "";
    
}

function renderTodos(list = todos) {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    if (list.length === 0) {
        todoList.innerHTML = '<li>No Todos Available</li>';
        return;
    }

    list.forEach(todo => {
        const isDone = todo.status === "done";

        todoList.innerHTML += `
        <li class="p-2">
            <label class="flex items-center space-x-3">

                <input 
                    type="checkbox" 
                    ${isDone ? "checked" : ""} 
                    onclick="toggleStatus(${todo.id})"
                    class="w-5 h-5"
                >

                <div class="${isDone ? 'text-green-600 font-bold' : 'text-black'}">
                    <p class="text-xl">${todo.task}</p>
                    <p class="text-sm text-gray-600">(${todo.date})</p>
                </div>

            </label>
            <hr class="mt-2" />
        </li>`;
    });
}

function toggleStatus(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            todo.status = todo.status === "pending" ? "done" : "pending";
        }
        return todo;
    });

    renderTodos(todos);
}

function clearTodos() {
    todos = [];
    renderTodos();
}

function toggleFilter() {
    const filterBox = document.getElementById("filter-section");
    filterBox.classList.toggle("hidden");
}

function applyFilter() {
    const text = document.getElementById('filter-text').value.toLowerCase();
    const date = document.getElementById('filter-date').value;

    let filtered = todos;

    if (text !== "") {
        filtered = filtered.filter(todo =>
            todo.task.toLowerCase().includes(text)
        );
    }

    if (date !== "") {
        filtered = filtered.filter(todo =>
            todo.date === date
        );
    }

    if (filtered.length === 0) {
        document.getElementById('todo-list').innerHTML =
            '<li>No Todos Found</li>';
        return;
    }

    renderTodos(filtered);
}

function filterByDate() {
    const text = document.getElementById('todo-input').value.toLowerCase();
    const date = document.getElementById('todo-date').value;

    if (text === '' && date === '') {
        alert("Please enter text or date to filter.");
        return;
    }

    let filtered = todos;

    if (text !== '') {
        filtered = filtered.filter(todo =>
            todo.task.toLowerCase().includes(text)
        );
    }

    if (date !== '') {
        filtered = filtered.filter(todo =>
            todo.date === date
        );
    }

    if (filtered.length === 0) {
        document.getElementById('todo-list').innerHTML =
            '<li>No Todos Found</li>';
        return;
    }

    renderTodos(filtered);

}
