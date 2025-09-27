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
  const closeBtn = document.getElementById("close-sidebar-btn")

  if (!sidebar || !layout) return;

  const savedState = localStorage.getItem("sidebarState");

  function hideSidebar() {
    sidebar.classList.add("hidden");
    sidebar.classList.remove("show-sidebar");
    layout.classList.remove("with-sidebar");
    

 
    // Hide overlay on mobile
    if (window.innerWidth <= 768) {
      overlay.classList.remove("active");
      showBtn.style.display = "none";
    } else{
      showBtn.style.display = "block";
    }
    
    localStorage.setItem("sidebarState", "hidden");
  }

  function showSidebar() {
    sidebar.classList.remove("hidden");
    showBtn.style.display = "none";
    
    if (window.innerWidth <= 768) {
      sidebar.classList.add("show-sidebar");
      overlay.classList.add("active");
    } else {
      layout.classList.add("with-sidebar");
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
  function closeSidebarOnOverlayClick() {
    hideSidebar();
  }

  // Initialize sidebar state
  if (window.innerWidth > 768 && savedState !== "hidden") {
    showSidebar();
  /*} else {
    hideSidebar();*/
  }

  // Event listeners
  if (hideBtn) hideBtn.addEventListener("click", hideSidebar);
  if (showBtn) showBtn.addEventListener("click", showSidebar);
  if (mobileLogo) mobileLogo.addEventListener("click", toggleSidebarMobile);
  if (overlay) overlay.addEventListener("click", closeSidebarOnOverlayClick);
  if (closeBtn) closeBtn.addEventListener("click", hideSidebar); 

  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      // On desktop, ensure proper sidebar state
      overlay.classList.remove("active");
      if (sidebar.classList.contains('hidden')) {
        showBtn.style.display = 'block';
      } else {
        layout.classList.add("with-sidebar");
        showBtn.style.display = 'none';
      }
      sidebar.classList.remove('show-sidebar');
    } else {
      // On mobile, hide show button
      layout.classList.remove("with-sidebar")
      showBtn.style.display = 'none';
      if (!sidebar.classList.contains('hidden')) {
        sidebar.classList.add('show-sidebar');
        overlay.classList.add("active");
      }
    }
  });
}

