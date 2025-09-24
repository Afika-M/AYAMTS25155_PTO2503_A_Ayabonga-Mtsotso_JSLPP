import { addNewTask } from "../tasks/taskManager.js";

export function setupModalCloseHandler() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  closeBtn.addEventListener("click", () => modal.close());
}

export function setupNewTaskModalHandler() {
  const overlay = document.querySelector(".modal-overlay");
  const newTaskBtn = document.getElementById("add-new-task-btn");
  const form = document.querySelector(".modal-window");
  const cancelBtn = document.getElementById("cancel-add-btn");

  newTaskBtn.addEventListener("click", () => {
    overlay.style.visibility = "visible";
    overlay.showModal();
  });

  cancelBtn.addEventListener("click", () => overlay.close());

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
     addNewTask(); 
    } else {
      form.reportValidity();
    }
  });
}

export function setupExistingTaskModalHandler() {
  const modal = document.getElementById("task-modal");
  const form = document.getElementById("task-form"); 
  const closeBtn = document.getElementById("close-modal-btn"); 
  const saveBtn = document.getElementById("save-task-btn");
  const deleteBtn = document.getElementById("delete-task-btn"); 

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("task-title").value.trim();
    const description = document.getElementById("task-desc").value.trim();
    const status = document.getElementById("task-status").value;

    if (!title) {
      alert("Title cannot be empty.");
      return;
    }

    saveBtn.addEventListener("click", () => {
      modal.close();
    })

    updateTasks(updatedTask);
  });
}



export function openTaskModal(task) {
  const modal = document.getElementById("task-modal");
  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-status").value = task.status;

  modal.showModal();
}
