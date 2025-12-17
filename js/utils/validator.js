/**
 * Validation utility functions
 */

/**
 * Check if value is empty
 * @param {any} value
 * @returns {boolean}
 */
export function isEmpty(value) {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim() === '';
  if (Array.isArray(value)) return value.length === 0;
  return false;
}

/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (Vietnamese format)
 * @param {string} phone
 * @returns {boolean}
 */
export function isValidPhone(phone) {
  const phoneRegex = /^(0|\+84)[0-9]{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Validate date format (YYYY-MM-DD)
 * @param {string} date
 * @returns {boolean}
 */
export function isValidDate(date) {
  if (!date) return false;
  const dateObj = new Date(date);
  return dateObj instanceof Date && !isNaN(dateObj);
}

/**
 * Validate required fields in form data
 * @param {Object} data
 * @param {Array<string>} requiredFields
 * @returns {Object} { valid: boolean, errors: Object }
 */
export function validateRequired(data, requiredFields) {
  const errors = {};

  requiredFields.forEach(field => {
    if (isEmpty(data[field])) {
      errors[field] = `${field} là bắt buộc`;
    }
  });

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Validate candidate form data
 * @param {Object} data
 * @returns {Object} { valid: boolean, errors: Object }
 */
export function validateCandidate(data) {
  const errors = {};

  // Required fields
  if (isEmpty(data.fullName)) {
    errors.fullName = 'Không được để trống họ và tên';
  }
  if (isEmpty(data.appliedDate)) {
    errors.appliedDate = 'Ngày ứng tuyển là bắt buộc';
  }

  if (!isEmpty(data.email) && !isValidEmail(data.email)) {
    errors.email = 'Email không hợp lệ';
  }
  // Optional validations
  if (!isEmpty(data.dateOfBirth) && !isValidDate(data.dateOfBirth)) {
    errors.dateOfBirth = 'Ngày sinh không hợp lệ';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Show validation errors on form
 * @param {Object} errors
 */
export function showFormErrors(errors) {
  // Clear previous errors
  document.querySelectorAll('.error-message').forEach(el => el.remove());
  document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

  // Show new errors
  Object.entries(errors).forEach(([field, message]) => {
    const input = document.getElementById(field) || document.querySelector(`[name="${field}"]`);
    if (input) {
      input.classList.add('error');

      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = message;

      input.parentNode.appendChild(errorDiv);
    }
  });
}

/**
 * Clear form errors
 */
export function clearFormErrors() {
  document.querySelectorAll('.error-message').forEach(el => el.remove());
  document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
}
