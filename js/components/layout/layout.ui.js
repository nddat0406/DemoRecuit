/**
 * Layout UI Component
 * Handles header and sidebar interactions
 */
import { byId, toggleClass, addClass, removeClass } from '/js/utils/dom.js';
import { getSidebarState, setSidebarState } from '/js/utils/storage.js';

/**
 * Initialize layout components
 */
export function initLayout() {
  initSidebar();
  initHeader();
}

/**
 * Initialize sidebar collapse/expand
 */
function initSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const collapseBtn = document.querySelector('.collapse-btn');
  
  if (!sidebar || !collapseBtn) return;
  
  const collapseBtnText = collapseBtn.querySelector('.sidebar-item-content');
  const collapseBtnIcon = collapseBtn.querySelector('.icon');
  
  // Restore saved state
  const isCollapsed = getSidebarState();
  if (isCollapsed) {
    addClass(sidebar, 'shrink-mode');
    if (collapseBtnText) collapseBtnText.textContent = 'Mở rộng';
    if (collapseBtnIcon) {
      removeClass(collapseBtnIcon, 'icon-left');
      addClass(collapseBtnIcon, 'icon-right');
    }
  }
  
  // Toggle on button click
  collapseBtn.addEventListener('click', function() {
    toggleSidebar(sidebar, collapseBtnText, collapseBtnIcon);
  });
}

/**
 * Toggle sidebar collapsed state
 */
export function toggleSidebar(sidebar, collapseBtnText, collapseBtnIcon) {
  if (!sidebar) {
    sidebar = document.querySelector('.sidebar');
    collapseBtnText = document.querySelector('.collapse-btn .sidebar-item-content');
    collapseBtnIcon = document.querySelector('.collapse-btn .icon');
  }
  
  if (!sidebar) return;
  
  sidebar.classList.toggle('shrink-mode');
  
  if (sidebar.classList.contains('shrink-mode')) {
    if (collapseBtnText) collapseBtnText.textContent = 'Mở rộng';
    if (collapseBtnIcon) {
      removeClass(collapseBtnIcon, 'icon-left');
      addClass(collapseBtnIcon, 'icon-right');
    }
    setSidebarState(true);
  } else {
    if (collapseBtnText) collapseBtnText.textContent = 'Thu nhỏ';
    if (collapseBtnIcon) {
      removeClass(collapseBtnIcon, 'icon-right');
      addClass(collapseBtnIcon, 'icon-left');
    }
    setSidebarState(false);
  }
}

/**
 * Initialize header components
 */
function initHeader() {
  // Dropdown toggle functionality
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdown = document.querySelector('.app-dropdown');
  
  if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!dropdown.contains(e.target) && !dropdownToggle.contains(e.target)) {
        dropdown.classList.remove('show');
      }
    });
  }
  
  // User menu dropdown (if exists)
  const userMenu = byId('user-menu');
  const userMenuBtn = byId('user-menu-btn');
  
  if (userMenuBtn && userMenu) {
    userMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleClass(userMenu, 'show');
    });
    
    // Close when clicking outside
    document.addEventListener('click', () => {
      removeClass(userMenu, 'show');
    });
  }
  
  // Notification dropdown (if exists)
  const notificationMenu = byId('notification-menu');
  const notificationBtn = byId('notification-btn');
  
  if (notificationBtn && notificationMenu) {
    notificationBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleClass(notificationMenu, 'show');
    });
    
    // Close when clicking outside
    document.addEventListener('click', () => {
      removeClass(notificationMenu, 'show');
    });
  }
}

/**
 * Set active sidebar menu item
 * @param {string} menuId
 */
export function setActiveMenu(menuId) {
  const menuItems = document.querySelectorAll('.sidebar-menu-item');
  
  menuItems.forEach(item => {
    removeClass(item, 'active');
  });
  
  const activeItem = byId(menuId);
  if (activeItem) {
    addClass(activeItem, 'active');
  }
}
