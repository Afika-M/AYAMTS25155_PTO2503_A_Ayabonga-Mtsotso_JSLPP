import { fetchTasksFromApi } from "../api/taskApi.js";

/**
 * Loads tasks from localStorage or initializes with initialTasks.
 * @returns {Array<Object>} The array of tasks.
 */
export async function loadTasksFromStorage() {
  const stored = localStorage.getItem("tasks");
  if (stored) {
    try {
      const tasks = JSON.parse(stored);
      console.log("Loaded tasks from localStorage:", tasks.length);
      return tasks;
    } catch (err) {
      console.error("Error parsing tasks from localStorage:", err);
    }
  }

  // Fetch tasks from API if localStorage is empty
  try {
    console.log("Fetching tasks from API...");
    const apiTasks = await fetchTasksFromApi();

    if (Array.isArray(apiTasks) && apiTasks.length > 0) {
      console.log(" Successfully fetched tasks from API:", apiTasks.length);
      localStorage.setItem("tasks", JSON.stringify(apiTasks));
      return apiTasks;
    } else {
      console.warn("API did not return an array. Using empty list.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching tasks", error);
    console.warn("Using empty task list due to fetch error.");
    return [];
  }
}
/**
 * Saves the given task array to localStorage.
 * @param {Array<Object>} tasks
 */
export function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log("Tasks saved to localStorage:", tasks.length);
}
