/**
 * Displays a loading message while tasks are being fetched.
 * @param {string} message
 */
export function showLoading(message = "Loading tasks...") {
  const statusDiv = document.getElementById("status-message");
  if (!statusDiv) return;
  
  statusDiv.textContent = message;
  statusDiv.className = "status-message loading";
  statusDiv.style.display = "block";
}

/**
 * Displays an error message if fetching tasks fails.
 * @param {string} message
 */
export function showError(message = "⚠️ Failed to load tasks.") {
  const statusDiv = document.getElementById("status-message");
  if (!statusDiv) return;
  statusDiv.textContent = message;
  statusDiv.className = "status-message error";
  statusDiv.style.display = "block";
}

/**
 * Clears any loading/error message.
 */
export function clearStatus() {
  const statusDiv = document.getElementById("status-message");
  if (!statusDiv) return;
  statusDiv.textContent = "";
  statusDiv.className = "status-message";
  statusDiv.style.display = "none";
}
