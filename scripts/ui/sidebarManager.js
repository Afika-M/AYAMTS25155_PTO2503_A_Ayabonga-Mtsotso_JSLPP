/**
 * Manages the sidebar UI component, including showing/hiding and updating content.
 * Interacts with local storage to persist sidebar state.
 * Provides functions to toggle visibility and update sidebar items.
 * Handles user interactions with the sidebar.
 */
export function setupSidebar() {
  const sidebar = document.querySelector(".side-bar");
  const hideBtn = document.getElementById("hide-sidebar-btn");
  const showBtn = document.getElementById("show-sidebar-btn");

  if (!sidebar || !hideBtn || !showBtn) return;

  const savedState = localStorage.getItem("sidebarState");
    if (savedState === "hidden") {
        sidebar.classList.add("hidden");
    }
    // hide sidebar
  hideBtn.addEventListener("click", () => {
    sidebar.classList.add("hidden");
    localStorage.setItem("sidebarState", "hidden");
  });

  // show sidebar
  showBtn.addEventListener("click", () => {
    sidebar.classList.remove("hidden");
    localStorage.setItem("sidebarState", "visible");
  });
}

