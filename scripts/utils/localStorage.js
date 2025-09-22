import { initialTasks } from "../../initialData.js";

/**
 * Loads tasks from localStorage or initializes with initialTasks.
 * @returns {Array<Object>} The array of tasks.
 */
export function loadTasksFromStorage() {
  const stored = localStorage.getItem("tasks");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (err) {
      console.error("Error parsing tasks from localStorage:", err);
    }
  }

  // If no tasks in storage, initialize with initialTasks
  localStorage.setItem("tasks", JSON.stringify(initialTasks));
  return initialTasks;
}

/**
 * Saves the given task array to localStorage.
 * @param {Array<Object>} tasks
 */
export function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
