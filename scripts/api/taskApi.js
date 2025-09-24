/**
 * Task API module for interacting with the backend task management service.
 * Provides functions to fetch, create, update, and delete tasks.
 */
const API_BASE_URL = "https://jsl-kanban-api.vercel.app/"

/** Fetches all tasks from the backend API.
 * @returns {Promise<Array>} A promise that resolves to an array of tasks.
 */
export async function fetchTasksFromApi() {
  try  {
    const response = await fetch(`${API_BASE_URL}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch tasks. Status: ${response.status}`);
    }

    const apiTasks = await response.json();

    return apiTasks.map((task) => ({
        id: task.id,
        title: task.title,
        description: task.description,
        status: task.status,
    }));
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }

}