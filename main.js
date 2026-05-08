// 1. The h1 element
const heading = document.querySelector("h1");
console.log("h1 element:", heading);

// 2. All elements with class "content"
const contentElements = document.getElementsByClassName("content");
console.log("All .content elements:", contentElements);

// 3. The form with id "contact-form"
"const form = document.getElementById('contact-form');"
"console.log('form;', form) ;"

// 4. The email input
const emailInput = document.querySelector("#email");
console.log("Email input:", emailInput);

// 5. All list items in the nav
const navItems = document.querySelectorAll("nav ul li");
console.log("Nav list items:", navItems);

// 6. The first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("First nav-link:", firstNavLink);

// 7. The last paragraph
const lastParagraph = document.querySelector("article p:last-of-type");
console.log("Last paragraph:", lastParagraph);

// 1. Select the header, then navigate to the nav inside it
const header = document.querySelector("header");
const navInsideHeader = header.querySelector("nav");
console.log("Nav inside header:", navInsideHeader);

// 2. Select the first nav-link, then get its parent li
const parentLi = firstNavLink.parentElement;
console.log("Parent li of first nav-link:", parentLi);

// 3. Select the article, then get its next sibling (section)
const article = document.querySelector("article");
const nextSibling = article.nextElementSibling;
console.log("Next sibling of article:", nextSibling);

// 4. Select the ul, then get all its child li elements
const ul = document.querySelector("nav ul");
const childLis = ul.children;
console.log("All li children of ul:", childLis);

// 5. Start from the footer and navigate up to the body
const footer = document.querySelector("footer");
const bodyFromFooter = footer.parentElement;
console.log("Body from footer:", bodyFromFooter);

h1.textContent = "New Title";

article.textContent = "<script>alert('hack!')</script>";

link.getAttribute("href"); // "#"
link.href;                 // full URL

link.setAttribute("href", "https://example.com");
link.href = "https://example.com";

link.hasAttribute("target");   // false
link.removeAttribute("target");

const element = document.querySelector("[data-id]");
console.log(element.dataset.id);        // "123"
console.log(element.dataset.category);  // "tech"
element.dataset.newAttr = "value";      // adds data-new-attr

container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

Object.assign(container.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});

function addNavItem(text, href) {
    // 1. Create the li element
    const li = document.createElement("li");

    // 2. Create the anchor element
    const a = document.createElement("a");
    a.textContent = text;          // Set link text
    a.href = href;                 // Set link destination
    a.className = "nav-link";      // Apply same class for styling

    // 3. Append anchor to li
    li.appendChild(a);

    // 4. Append li to the nav list
    const navList = document.querySelector(".nav-list");
    navList.appendChild(li);
}

// Usage examples
addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

// Create display and buttons
const counterDisplay = document.createElement("div");
counterDisplay.textContent = "Count: 0";
document.body.appendChild(counterDisplay);

const incrementBtn = document.createElement("button");
incrementBtn.textContent = "+";
document.body.appendChild(incrementBtn);

const decrementBtn = document.createElement("button");
decrementBtn.textContent = "-";
document.body.appendChild(decrementBtn);

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
document.body.appendChild(resetBtn);

// Counter state
let count = 0;

// Update function
function updateDisplay() {
    counterDisplay.textContent = `Count: ${count}`;
}

// Event listeners
incrementBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener("click", () => {
    if (count > 0) {   // Prevent going below 0
        count--;
        updateDisplay();
    }
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});

// Create display
const counterDisplay = document.createElement("div");
counterDisplay.textContent = "Count: 0";
document.body.appendChild(counterDisplay);

let countnumber = 0;

// Create buttons
const plusButton = document.createElement("button");
plusButton.textContent = "+";
document.body.appendChild(plusButton);

const minusButton = document.createElement("button");
minusButton.textContent = "-";
document.body.appendChild(minusButton);

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
document.body.appendChild(resetButton);

// Event listeners
plusButton.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = `Count: ${count}`;
});

minusButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
        counterDisplay.textContent = `Count: ${count}`;
    }
});

resetButton.addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = `Count: ${count}`;
});

// Select the form and inputs
const formnumber  = document.createElement("form");
document.body.appendChild(form);

const input1 = document.createElement("input");
input1.type = "text";
form.appendChild(input1);

const input2 = document.createElement("input");
input2.type = "text";
form.appendChild(input2);

const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.textContent = "Submit";
form.appendChild(submitBtn);

// Keyboard shortcuts
document.addEventListener("keydown", function(event) {
    // Ctrl + S → Show "Saved!" alert
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault(); // Prevent browser save dialog
        alert("Saved!");
    }

    // Escape → Clear all form inputs
    if (event.key === "Escape") {
        const inputs = form.querySelectorAll("input");
        inputs.forEach(input => input.value = "");
    }

    // Ctrl + Enter → Submit form
    if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault(); // Prevent default behavior
        form.submit();          // Programmatically submit
    }
});

// Handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload
    alert("Form submitted!");
});

// Create the task list container
const taskList = document.createElement("ul");
document.body.appendChild(taskList);

// Add input + button for new tasks
const input = document.createElement("input");
input.type = "text";
document.body.appendChild(input);

const addButton = document.createElement("button");
addButton.textContent = "Add Task";
document.body.appendChild(addButton);

// Event delegation: ONE listener on the parent <ul>
taskList.addEventListener("click", function(event) {
    // Toggle completed class when clicking on a task
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }

    // Handle delete button
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    }
});

// Add new tasks
addButton.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        // Add delete button inside li
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
        input.value = "";
    }
});

// Optional: style completed tasks
const style = document.createElement("style");
style.textContent = `
    .completed {
        text-decoration: line-through;
        color: gray;
    }
    .delete-btn {
        margin-left: 10px;
        color: red;
    }
`;
document.head.appendChild(style);

const formData = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const email = document.getElementById("email");

// Real-time validation
nameInput.addEventListener("input", function(event) {
    const value = event.target.value;
    if (value.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
    }
});

emailInput.addEventListener("input", function(event) {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        showError(emailInput, "Please enter a valid email");
    } else {
        clearError(emailInput);
    }
});

// Form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();  // Stop form from submitting

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log("Form data:", data);

    if (isValid(data)) {
        showSuccess("Form submitted successfully!");
        form.reset();
    }
});

// Validation helpers
function isValid(data) {
    let valid = true;

    if (data.name.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
        valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showError(emailInput, "Please enter a valid email");
        valid = false;
    }

    return valid;
}

function showError(input, message) {
    input.classList.add("error");

    // Check if error message already exists
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains("error-message")) {
        error = document.createElement("div");
        error.classList.add("error-message");
        input.insertAdjacentElement("afterend", error);
    }
    error.textContent = message;
}

function clearError(input) {
    input.classList.remove("error");
    let error = input.nextElementSibling;
    if (error && error.classList.contains("error-message")) {
        error.remove();
    }
}

function showSuccess(message) {
    let success = document.getElementById("success-message");
    if (!success) {
        success = document.createElement("div");
        success.id = "success-message";
        success.classList.add("success-message");
        form.insertAdjacentElement("beforebegin", success);
    }
    success.textContent = message;
}

// Optional styling
const style = document.createElement("style");
style.textContent = `
    .error {
        border: 2px solid red;
    }
    .error-message {
        color: red;
        font-size: 0.9em;
        margin-top: 4px;
    }
    .success-message {
        color: green;
        font-weight: bold;
        margin-bottom: 10px;
    }
`;
document.head.appendChild(style);

// DOM Elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// State
let todos = [];
let currentFilter = "all";

// Functions
function createTodoElement(todo) {
    const li = document.createElement("li");
    li.dataset.id = todo.id;
    li.className = todo.completed ? "completed" : "";

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.classList.add("task-text");

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "×";
    deleteBtn.classList.add("delete-btn");

    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

function renderTodos() {
    todoList.innerHTML = "";

    let filteredTodos = todos;
    if (currentFilter === "active") {
        filteredTodos = todos.filter(todo => !todo.completed);
    } else if (currentFilter === "completed") {
        filteredTodos = todos.filter(todo => todo.completed);
    }

    filteredTodos.forEach(todo => {
        const li = createTodoElement(todo);
        todoList.appendChild(li);
    });

    updateStats();
}

function addTodo(text) {
    const newTodo = {
        id: Date.now(),
        text,
        completed: false
    };
    todos.push(newTodo);
    renderTodos();
}

function toggleTodo(id) {
    todos = todos.map(todo =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
    );
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id != id);
    renderTodos();
}

function updateStats() {
    const activeCount = todos.filter(todo => !todo.completed).length;
    itemsLeft.textContent = `${activeCount} item${activeCount !== 1 ? "s" : ""} left`;
}

function filterTodos(filter) {
    currentFilter = filter;
    filters.forEach(btn => btn.classList.remove("active"));
    document.querySelector(`[data-filter="${filter}"]`).classList.add("active");
    renderTodos();
}

function clearCompleted() {
    todos = todos.filter(todo => !todo.completed);
    renderTodos();
}

// Event Listeners
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const text = input.value.trim();
    if (text) {
        addTodo(text);
        input.value = "";
    }
});

todoList.addEventListener("click", function(event) {
    const li = event.target.closest("li");
    if (!li) return;

    const id = li.dataset.id;

    if (event.target.classList.contains("delete-btn")) {
        deleteTodo(id);
    } else if (event.target.classList.contains("task-text")) {
        toggleTodo(id);
    }
});

// Bonus: Edit tasks on double-click
todoList.addEventListener("dblclick", function(event) {
    if (event.target.classList.contains("task-text")) {
        const span = event.target;
        const li = span.parentElement;
        const id = li.dataset.id;

        const inputEdit = document.createElement("input");
        inputEdit.type = "text";
        inputEdit.value = span.textContent;
        inputEdit.classList.add("edit-input");

        li.replaceChild(inputEdit, span);
        inputEdit.focus();

        inputEdit.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                const newText = inputEdit.value.trim();
                if (newText) {
                    todos = todos.map(todo =>
                        todo.id == id ? { ...todo, text: newText } : todo
                    );
                }
                renderTodos();
            } else if (e.key === "Escape") {
                renderTodos();
            }
        });
    }
});

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        filterTodos(btn.dataset.filter);
    });
});

clearCompletedBtn.addEventListener("click", clearCompleted);

// Initialize
renderTodos();
