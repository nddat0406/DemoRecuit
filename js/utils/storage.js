/**
 * Storage utility for UI state (not for data)
 * Only for sidebar state, theme preferences, etc.
 */

const STORAGE_KEYS = {
  SIDEBAR_COLLAPSED: 'sidebar_collapsed',
  THEME: 'theme'
};

/**
 * Get sidebar collapsed state
 * @returns {boolean}
 */
export function getSidebarState() {
  return localStorage.getItem(STORAGE_KEYS.SIDEBAR_COLLAPSED) === 'true';
}

/**
 * Set sidebar collapsed state
 * @param {boolean} collapsed
 */
export function setSidebarState(collapsed) {
  localStorage.setItem(STORAGE_KEYS.SIDEBAR_COLLAPSED, collapsed.toString());
}

/**
 * Get theme preference
 * @returns {string}
 */
export function getTheme() {
  return localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
}

/**
 * Set theme preference
 * @param {string} theme
 */
export function setTheme(theme) {
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
}
