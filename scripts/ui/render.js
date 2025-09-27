import { createTaskElement } from "./taskElement.js";
import { taskCounter } from "./taskCounter.js";
import { sortTasksByPriority } from "./sortTasks.js";

/**
 * Finds the task container element based on task status.
 * @param {string} status The status of the task ("todo", "doing", "done").
 * @returns {HTMLElement|null} The container element or null if not found.
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
 * Renders tasks to their appropriate columns sorted by priority
 */
export function renderTasks(tasks) {
  clearExistingTasks();

  const sortedTasks = sortTasksByPriority([...tasks]);
  
  sortedTasks.forEach((task) => {
    const container = getTaskContainerByStatus(task.status);
    if (container) {
      const taskElement = createTaskElement(task);
      container.appendChild(taskElement);
    }
  });
  taskCounter(tasks);
}


