const API_URL = "http://localhost:5000/todos";

// Load todos when page opens
window.onload = getTodos;

/* ======================
   GET ALL TODOS
   ====================== */
async function getTodos() {
  const res = await fetch(API_URL);
  const todos = await res.json();

  const list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span ${todo.completed ? 'style="text-decoration:line-through"' : ""}>
        ${todo.title}
      </span>
      <div class="actions">
        <button onclick="editTodo('${todo._id}', '${todo.title}')">✏️</button>
        <button onclick="deleteTodo('${todo._id}')">🗑️</button>
      </div>
    `;

    list.appendChild(li);
  });
}

/* ======================
   POST TODO
   ====================== */
async function addTodo() {
  const input = document.getElementById("todoInput");
  const title = input.value.trim();

  if (!title) return alert("Enter a task");

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false })
  });

  input.value = "";
  getTodos();
}

/* ======================
   PUT TODO
   ====================== */
async function editTodo(id, oldTitle) {
  const newTitle = prompt("Edit task", oldTitle);
  if (!newTitle) return;

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: newTitle })
  });

  getTodos();
}

/* ======================
   DELETE TODO
   ====================== */
async function deleteTodo(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  getTodos();
}
