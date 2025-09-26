import { openTaskModal } from "./modalHandlers.js";
/**
 * Creates a task DOM element.
 * @param {*} task The task object.
 * @returns {HTMLElement} The task element.
 */
export function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;
  taskDiv.dataset.taskId = task.id;

  taskDiv.addEventListener("click", () => {
    openTaskModal(task);
  });

  return taskDiv;
}
