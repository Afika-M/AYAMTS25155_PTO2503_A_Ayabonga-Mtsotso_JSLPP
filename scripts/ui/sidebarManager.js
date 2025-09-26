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
  const mobileLogo = document.querySelector(".logo-mobile");
  const overlay = document.querySelector(".sidebar-overlay");

  if (!sidebar) return;

  const savedState = localStorage.getItem("sidebarState");

  function hideSidebar() {
    sidebar.classList.add("hidden");
    sidebar.classList.remove("show-sidebar");
    layout.classList.remove("with-sidebar");
    
    if (window.innerWidth <= 768) {
      showBtn.style.display = "none";
    } else {
      showBtn.style.display = "block";
    }
    
    localStorage.setItem("sidebarState", "hidden");
  }

  function showSidebar() {
    sidebar.classList.remove("hidden");
    layout.classList.add("with-sidebar");
    showBtn.style.display = "none";
    
    if (window.innerWidth <= 768) {
      sidebar.classList.add("show-sidebar");
    }
    
    localStorage.setItem("sidebarState", "visible");
  }

  // Mobile toggle (logo click)
  function toggleSidebarMobile() {
    if (sidebar.classList.contains("show-sidebar")) {
      hideSidebar();
    } else {
      showSidebar();
    }
  }

  // Close sidebar when clicking overlay (mobile)
  function closeSidebarOnOverlayClick(e) {
    if (e.target === overlay) {
      hideSidebar();
    }
  }

  // Initialize sidebar state
  if (savedState === "hidden") {
    hideSidebar();
  } else {
    showSidebar();
  }

  // Event listeners
  if (hideBtn) hideBtn.addEventListener("click", hideSidebar);
  if (showBtn) showBtn.addEventListener("click", showSidebar);
  if (mobileLogo) mobileLogo.addEventListener("click", toggleSidebarMobile);
  if (overlay) overlay.addEventListener("click", closeSidebarOnOverlayClick);

  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      // On desktop, ensure proper sidebar state
      if (sidebar.classList.contains('hidden')) {
        showBtn.style.display = 'block';
      } else {
        showBtn.style.display = 'none';
      }
      sidebar.classList.remove('show-sidebar');
    } else {
      // On mobile, hide show button
      showBtn.style.display = 'none';
      if (!sidebar.classList.contains('hidden')) {
        sidebar.classList.add('show-sidebar');
      }
    }
  });
}

