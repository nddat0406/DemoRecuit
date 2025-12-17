/**
 * DOM utility functions
 */

/**
 * Query selector shorthand
 * @param {string} selector
 * @param {Element} parent
 * @returns {Element|null}
 */
export function $(selector, parent = document) {
  return parent.querySelector(selector);
}

/**
 * Query selector all shorthand
 * @param {string} selector
 * @param {Element} parent
 * @returns {NodeList}
 */
export function $$(selector, parent = document) {
  return parent.querySelectorAll(selector);
}

/**
 * Get element by ID
 * @param {string} id
 * @returns {Element|null}
 */
export function byId(id) {
  return document.getElementById(id);
}

/**
 * Add event listener
 * @param {Element} element
 * @param {string} event
 * @param {Function} handler
 */
export function on(element, event, handler) {
  if (element) {
    element.addEventListener(event, handler);
  }
}

/**
 * Add event listener with delegation
 * @param {Element} parent
 * @param {string} event
 * @param {string} selector
 * @param {Function} handler
 */
export function delegate(parent, event, selector, handler) {
  parent.addEventListener(event, (e) => {
    const target = e.target.closest(selector);
    if (target) {
      handler.call(target, e);
    }
  });
}

/**
 * Toggle class on element
 * @param {Element} element
 * @param {string} className
 */
export function toggleClass(element, className) {
  if (element) {
    element.classList.toggle(className);
  }
}

/**
 * Add class to element
 * @param {Element} element
 * @param {string} className
 */
export function addClass(element, className) {
  if (element) {
    element.classList.add(className);
  }
}

/**
 * Remove class from element
 * @param {Element} element
 * @param {string} className
 */
export function removeClass(element, className) {
  if (element) {
    element.classList.remove(className);
  }
}

/**
 * Check if element has class
 * @param {Element} element
 * @param {string} className
 * @returns {boolean}
 */
export function hasClass(element, className) {
  return element ? element.classList.contains(className) : false;
}

/**
 * Set multiple attributes
 * @param {Element} element
 * @param {Object} attrs
 */
export function setAttrs(element, attrs) {
  if (!element) return;
  
  Object.entries(attrs).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

/**
 * Create element with properties
 * @param {string} tag
 * @param {Object} props
 * @returns {Element}
 */
export function createElement(tag, props = {}) {
  const element = document.createElement(tag);
  
  Object.entries(props).forEach(([key, value]) => {
    if (key === 'className') {
      element.className = value;
    } else if (key === 'text') {
      element.textContent = value;
    } else if (key === 'html') {
      element.innerHTML = value;
    } else {
      element.setAttribute(key, value);
    }
  });
  
  return element;
}

/**
 * Show element
 * @param {Element} element
 */
export function show(element) {
  if (element) {
    element.style.display = '';
  }
}

/**
 * Hide element
 * @param {Element} element
 */
export function hide(element) {
  if (element) {
    element.style.display = 'none';
  }
}
