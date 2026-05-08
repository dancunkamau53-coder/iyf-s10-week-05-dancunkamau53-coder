const taskInput = document.getElementById("taskInput");/*Go find the input box where users type tasks*/
const taskList = document.getElementById("taskList");/*Go find the list where tasks will appear*/

let currentFilter = "all"; /*show all tasks*/

// ADD TASK
function addTask() { /*reates a function called addTask*/
    const text = taskInput.value.trim(); /*Gets what the user typed in the input box, trim() removes extra spaces*/
    if (text === "") return; /*Checks if the input is empty*/

    const li = document.createElement("li"); /*Creates a new list item*/

    li.innerHTML = `
        <label>
            <input type="checkbox"> 
            <span>${text}</span> 
        </label>
        <button class="delete">✖</button> 
    `;

    taskList.appendChild(li); /*Adds the new task (li) to the task list on the page*/
    taskInput.value = ""; /*Clears the input box after adding the task*/

    const checkbox = li.querySelector("input");
    const deleteBtn = li.querySelector(".delete");

    // COMPLETE TASK
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }

        updateStats();
        displayTasks();
    });

    // DELETE TASK
    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateStats();
        displayTasks();
    });

    updateStats();
    displayTasks(); // keep this so new tasks follow current filter
}

// FILTER TASKS
function filterTasks(event, filter) {
    currentFilter = filter;

    document.querySelectorAll(".filters button").forEach(btn => {
        btn.classList.remove("active");
    });

    event.target.classList.add("active");

    displayTasks();
}

// DISPLAY TASKS (FIXED LOGIC)-to show every task you select (active, all, or completed)
function displayTasks() {
    const tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(task => {
        const isCompleted = task.classList.contains("completed");

        if (currentFilter === "active") {
            task.style.display = isCompleted ? "none" : "flex";
        } 
        else if (currentFilter === "completed") {
            task.style.display = isCompleted ? "flex" : "none";
        } 
        else {
            task.style.display = "flex";
        }
    });
}

// UPDATE STATS
function updateStats() {
    const tasks = document.querySelectorAll("#taskList li");
    const completedTasks = document.querySelectorAll("#taskList li.completed");

    const total = tasks.length;
    const completed = completedTasks.length;
    const active = total - completed;

    document.getElementById("total-count").textContent = total;
    document.getElementById("active-count").textContent = active;
    document.getElementById("completed-count").textContent = completed;

    // CLEAR BUTTON STATE
    const clearBtn = document.querySelector(".clear");

    if (completed === 0) {
        clearBtn.disabled = true;
        clearBtn.style.opacity = "0.5";
        clearBtn.style.cursor = "not-allowed";
    } else {
        clearBtn.disabled = false;
        clearBtn.style.opacity = "1";
        clearBtn.style.cursor = "pointer";
    }
}

// CLEAR COMPLETED TASKS
document.querySelector(".clear").addEventListener("click", function () {
    const completedTasks = document.querySelectorAll("#taskList li.completed");

    completedTasks.forEach(task => task.remove());

    updateStats();
    displayTasks();
});

// ENTER KEY SUPPORT
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
