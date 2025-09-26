  /**
 * Updates the column headers with task counts
 * @param {Array} tasks Array of task objects
 */
export function taskCounter(tasks) {
  const todoCount = tasks.filter((task) => task.status === "todo").length;
  const doingCount = tasks.filter((task) => task.status === "doing").length;
  const doneCount = tasks.filter((task) => task.status === "done").length;

  document.getElementById("toDoText").textContent = `TODO (${todoCount})`;
  document.getElementById("doingText").textContent = `DOING (${doingCount})`;
  document.getElementById("doneText").textContent = `DONE (${doneCount})`;
}