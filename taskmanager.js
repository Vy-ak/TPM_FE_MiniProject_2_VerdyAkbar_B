export const addTask = (tasks, newTask) => {
    return [...tasks, newTask];
};
  
export const renderTasks = (tasks, container) => {
  if (tasks.length === 0) {
    container.style.display = "none";
     return;
  } else {
      container.style.display = "block";
      container.style.textAlign = "left";
  }

  container.innerHTML = "";

  tasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task-box");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed || false;
    checkbox.classList.add("task-checkbox");

    const title = document.createElement("span");
    title.textContent = task.title;

    const deleteBtn = document.createElement("button");
    deleteBtn.dataset.id = task.id;
    deleteBtn.classList.add("delete-btn");
          
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "close-icon.png";
    deleteIcon.alt = "Delete";
    deleteIcon.style.width = "10px";
    deleteIcon.style.height = "10px";

    deleteBtn.appendChild(deleteIcon);

    taskElement.appendChild(checkbox);
    taskElement.appendChild(title);
    taskElement.appendChild(deleteBtn);

    container.appendChild(taskElement);
  });
};


export const removeTask = (tasks, id)=>{
  return tasks.filter(task => task.id !== id);
}