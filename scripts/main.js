import { loadTasksFromStorage, saveTasksToStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import { setupThemeToggle } from "./ui/theme.js";
import {
  setupExistingTaskModalHandler,
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";

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
