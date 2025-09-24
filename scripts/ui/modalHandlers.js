import { addNewTask, updateTasks } from "../tasks/taskManager.js";

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
// Handler for saving edits to an existing task
export function setupExistingTaskModalHandler() {
  const modal = document.getElementById("task-modal");
  const form = document.getElementById("task-form"); 
  const saveBtn = document.getElementById("save-task-btn");
  const deleteBtn = document.getElementById("delete-task-btn"); 

  saveBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const title = document.getElementById("task-title").value.trim();
    const description = document.getElementById("task-desc").value.trim();
    const status = document.getElementById("task-status").value;

    if (!title || !status || !description) {
      alert("Please fill in all fields.");
      return;
    }
    await updateTasks({
      id: parseInt(form.dataset.taskId, 10),
      title,
      description,
      status});
    modal.close();
  });
}

export function openTaskModal(task) {
  const modal = document.getElementById("task-modal");
  const form = document.getElementById("task-form");
  form.dataset.taskId = task.id; // store task ID in form dataset

  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-status").value = task.status;

  modal.showModal();
}
