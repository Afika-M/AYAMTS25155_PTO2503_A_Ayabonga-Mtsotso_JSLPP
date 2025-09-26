import { loadTasksFromStorage, saveTasksToStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import { setupThemeToggle } from "./ui/theme.js";
import {
  setupExistingTaskModalHandler,
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";
/**
 * Initializes the task board by loading tasks, rendering them, and setting up event handlers.
 * Handles errors gracefully and logs them to the console.
*/
async function initTaskBoard() {
  const tasks = await loadTasksFromStorage();

  clearExistingTasks();
  renderTasks(tasks);
  setupModalCloseHandler();
  setupNewTaskModalHandler();
  setupExistingTaskModalHandler();
  setupThemeToggle();
}

document.addEventListener("DOMContentLoaded", initTaskBoard);
