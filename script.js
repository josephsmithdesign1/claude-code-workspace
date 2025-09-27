function addTodo() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();

    if (todoText === '') {
        alert('Please enter a task!');
        return;
    }

    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');
    li.className = 'todo-item';

    li.innerHTML = `
        <span>${todoText}</span>
        <button class="delete-btn" onclick="deleteTodo(this)">Delete</button>
    `;

    todoList.appendChild(li);
    input.value = '';
}

function deleteTodo(button) {
    button.parentElement.remove();
}

// Allow adding todo by pressing Enter
document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});