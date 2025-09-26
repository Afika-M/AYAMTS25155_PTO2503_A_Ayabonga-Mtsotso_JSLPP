/**
 * Manages the sidebar UI component, including showing/hiding and updating content.
 * Interacts with local storage to persist sidebar state.
 * Provides functions to toggle visibility and update sidebar items.
 * Handles user interactions with the sidebar.
 */
export function setupMobileSidebar() {
    const sidebar = document.querySelector('.side-bar');
    const favicon = document.querySelector('.logo-mobile');
    const closeBtn = document.getElementById("close-modal-btn");

    //Close sidebar when close button is clicked
    closeBtn.addEventListener("click", () => sidebar.classList.remove("open")); 

    // Open sidebar when favicon is clicked
    if (favicon) {
        favicon.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }
}