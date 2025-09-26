/**
 * Resets the task form fields to their default values.
 * Clears title and description inputs, and sets status to "todo".
 */
export function resetForm() {
  document.getElementById("title-input").value = "";
  document.getElementById("desc-input").value = "";
  document.getElementById("select-status").value = "todo";
}
