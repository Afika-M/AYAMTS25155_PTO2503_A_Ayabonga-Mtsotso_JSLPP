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
  const layout = document.getElementById("layout");

  if (!sidebar || !hideBtn || !showBtn || !layout) return;

  const savedState = localStorage.getItem("sidebarState");

  function hideSidebar() {
    sidebar.classList.add("hidden");
    layout.classList.remove("with-sidebar");
    showBtn.style.display = "block";
    localStorage.setItem("sidebarState", "hidden");
  }

  function showSidebar() {
    sidebar.classList.remove("hidden");
    layout.classList.add("with-sidebar");
    showBtn.style.display = "none";
    localStorage.setItem("sidebarState", "visible");
  }


 if (savedState === "hidden") {
      hideSidebar();
    } else {
      showSidebar();
    }
    // Event listeners for buttons
    hideBtn.addEventListener("click", hideSidebar);
    showBtn.addEventListener("click", showSidebar);
}


