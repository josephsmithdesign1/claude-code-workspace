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
        <input type="checkbox" onchange="toggleComplete(this)">
        <span>${todoText}</span>
        <button class="delete-btn" onclick="deleteTodo(this)">Delete</button>
    `;

    todoList.appendChild(li);
    input.value = '';
}

function deleteTodo(button) {
    button.parentElement.remove();
}

function toggleComplete(checkbox) {
    const todoItem = checkbox.parentElement;
    const span = todoItem.querySelector('span');

    if (checkbox.checked) {
        span.style.textDecoration = 'line-through';
        span.style.opacity = '0.6';
    } else {
        span.style.textDecoration = 'none';
        span.style.opacity = '1';
    }
}

// Allow adding todo by pressing Enter
document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});