import { openTaskModal } from "./modalHandlers.js";
/**
 * Creates a task DOM element.
 * @param {*} task 
 * @returns
 */
export function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.dataset.taskId = task.id;

const titleDiv = document.createElement("div");
  titleDiv.classList.add("task-title");

  // Priority dot
  const dot = document.createElement("span");
  dot.classList.add("priority-dot", `priority-${task.priority?.toLowerCase() || "low"}`);

  // Title text
  const titleText = document.createElement("span");
  titleText.textContent = task.title;

  
  titleDiv.appendChild(dot);
  titleDiv.appendChild(titleText);

  taskDiv.appendChild(titleDiv);

  taskDiv.addEventListener("click", () => {
    openTaskModal(task); 
  });

  return taskDiv;
}
