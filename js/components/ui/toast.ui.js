/**
 * Toast UI Component
 * Handles success and error notifications
 */
import { byId, addClass, removeClass } from '/js/utils/dom.js';

let toastTimeout;

/**
 * Show toast notification
 * @param {string} message
 * @param {string} type - 'success', 'error', 'warning', or 'info'
 * @param {number} duration - in milliseconds
 */
export function showToast(message, type = 'success', duration = 3000) {
  const toast = byId('toast');
  const toastMessage = byId('toast-message');
  const toastIcon = byId('toast-icon');
  
  if (!toast || !toastMessage) return;
  
  // Clear existing timeout
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }
  
  // Set message and type
  toastMessage.textContent = message;
  
  // Remove all type classes and add new one
  toast.className = 'toast';
  addClass(toast, type);
  addClass(toast, 'show');
  
  // Auto hide after duration
  toastTimeout = setTimeout(() => {
    hideToast();
  }, duration);
}

/**
 * Hide toast notification
 */
export function hideToast() {
  const toast = byId('toast');
  if (toast) {
    removeClass(toast, 'show');
  }
}

/**
 * Show success toast
 * @param {string} message
 */
export function showSuccess(message) {
  showToast(message, 'success');
}

/**
 * Show error toast
 * @param {string} message
 */
export function showError(message) {
  showToast(message, 'error', 4000);
}

/**
 * Initialize toast component
 */
export function initToast() {
  const toast = byId('toast');
  const toastClose = byId('toast-close');
  
  if (toast) {
    // Click toast to dismiss
    toast.addEventListener('click', hideToast);
  }
  
  if (toastClose) {
    // Click close button to dismiss
    toastClose.addEventListener('click', (e) => {
      e.stopPropagation();
      hideToast();
    });
  }
}
