import { createTaskElement } from "./taskElement.js";

/**
 * Finds the task container element based on task status.
 */
function getTaskContainerByStatus(status) {
  const column = document.querySelector(`.column-div[data-status="${status}"]`);
  return column ? column.querySelector(".tasks-container") : null;
}

/**
 * Clears all existing task-divs from all task containers.
 */
export function clearExistingTasks() {
  document.querySelectorAll(".tasks-container").forEach((container) => {
    container.innerHTML = "";
  });
}

/**
 * Renders tasks to their appropriate columns.
 */
export function renderTasks(tasks) {
  tasks.forEach((task) => {
    const container = getTaskContainerByStatus(task.status);
    if (container) {
      const taskElement = createTaskElement(task);
      container.appendChild(taskElement);
    }
  });
  taskCounter(tasks);
  
  /**
 * Updates the column headers with task counts
 */
function taskCounter(tasks) {
  const todoCount = tasks.filter((task) => task.status === "todo").length;
  const doingCount = tasks.filter((task) => task.status === "doing").length;
  const doneCount = tasks.filter((task) => task.status === "done").length;

  document.getElementById("toDoText").textContent = `TODO (${todoCount})`;
  document.getElementById("doingText").textContent = `DOING (${doingCount})`;
  document.getElementById("doneText").textContent = `DONE (${doneCount})`;
}
}
