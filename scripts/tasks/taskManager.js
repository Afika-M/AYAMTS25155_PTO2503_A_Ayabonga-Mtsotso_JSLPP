import {
  loadTasksFromStorage,
  saveTasksToStorage,
} from "../utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "../ui/render.js";
import { resetForm } from "./formUtils.js";

export async function addNewTask() {
  const title = document.getElementById("title-input").value.trim();
  const description = document.getElementById("desc-input").value.trim();
  const status = document.getElementById("select-status").value;
  const overlay = document.querySelector(".modal-overlay");

  if (!title) return;
  try{
  const tasks = await loadTasksFromStorage();
  const newTask = {
    id: tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
    title,
    description,
    status,
  };

  const updatedTasks = [...tasks, newTask];
  saveTasksToStorage(updatedTasks);

  clearExistingTasks();
  renderTasks(updatedTasks);
  resetForm();
  overlay.close();
}catch(error){
  console.error("Error adding new task", error);
alert("Failed to add new task. Please try again.");
}
}

export async function updateTasks(updatedTask) {
  const tasks = await loadTasksFromStorage();
  const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id);

  if (taskIndex !== -1) {
    tasks[taskIndex] = updatedTask; // Replace the existing task
    saveTasksToStorage(tasks);
    clearExistingTasks();
    renderTasks(tasks);
    console.log("Task updated successfully:", updatedTask);
  } else {
    console.warn("Task not found:", updatedTask.id);
  }
}

/*export async function editExistingTask(taskId, updatedData) {
  try {
    const tasks = await loadTasksFromStorage();
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const updatedTask = { ...tasks[taskIndex], ...updatedData };
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex] = updatedTask;

    saveTasksToStorage(updatedTasks);

    clearExistingTasks();
    renderTasks(updatedTasks);
  } catch (error) {
    console.error("Error editing task", error);
    alert("Failed to edit task. Please try again.");
  }
}

export async function deleteTask(taskId) {
  try {
    const tasks = await loadTasksFromStorage();
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    saveTasksToStorage(updatedTasks);

    clearExistingTasks();
    renderTasks(updatedTasks);
  } catch (error) {
    console.error("Error deleting task", error);
    alert("Failed to delete task. Please try again.");
  }*/