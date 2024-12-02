import { addTask, removeTask, renderTasks } from "./taskmanager.js";

let tasks = [];

const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");

taskList.style.display = "none";

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTask = { id: Date.now(), title: taskInput.value, completed: false };
    tasks = addTask(tasks, newTask);
    taskInput.value = "";
    renderTasks(tasks, taskList);
});

taskList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".delete-btn");
  if (deleteButton) {
      const id = parseInt(deleteButton.dataset.id, 10); 
      tasks = removeTask(tasks, id); 
      renderTasks(tasks, taskList); 
  }
});

renderTasks(tasks, taskList);
