/**
 * Date Formatting Utilities
 * 
 * Provides centralized date/time formatting functions for consistent display
 * across the application. Handles null/invalid date cases gracefully.
 * 
 * @module utils/date-format
 */

/**
 * Format a date string to DD/MM/YYYY format
 * 
 * Converts ISO date strings or Date objects to Vietnamese date format.
 * Returns empty string for null/undefined, original string for invalid dates.
 * 
 * @param {string|Date|null} dateInput - Date string, Date object, or null
 * @returns {string} Formatted date string (DD/MM/YYYY) or empty string
 * 
 * @example
 * formatDate('2024-12-17') // Returns: '17/12/2024'
 * formatDate(null) // Returns: ''
 * formatDate('invalid') // Returns: 'invalid'
 */
export function formatDate(dateInput) {
  if (!dateInput) return '';

  const date = new Date(dateInput);
  
  // Check if date is valid
  if (isNaN(date.getTime())) return dateInput;

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

/**
 * Format a date to YYYY-MM-DD format (ISO date string)
 * 
 * Useful for date input values and API communications.
 * 
 * @param {string|Date|null} dateInput - Date string, Date object, or null
 * @returns {string} ISO date string (YYYY-MM-DD) or empty string
 * 
 * @example
 * formatDateISO(new Date('2024-12-17')) // Returns: '2024-12-17'
 */
export function formatDateISO(dateInput) {
  if (!dateInput) return '';

  const date = new Date(dateInput);
  
  if (isNaN(date.getTime())) return '';

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

/**
 * Format a date to a readable Vietnamese format with full month name
 * 
 * @param {string|Date|null} dateInput - Date string, Date object, or null
 * @returns {string} Formatted date string (DD Tháng MM, YYYY) or empty string
 * 
 * @example
 * formatDateLong('2024-12-17') // Returns: '17 Tháng 12, 2024'
 */
export function formatDateLong(dateInput) {
  if (!dateInput) return '';

  const date = new Date(dateInput);
  
  if (isNaN(date.getTime())) return dateInput;

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day} Tháng ${month}, ${year}`;
}

/**
 * Parse DD/MM/YYYY format string to Date object
 * 
 * @param {string} dateString - Date string in DD/MM/YYYY format
 * @returns {Date|null} Date object or null if invalid
 * 
 * @example
 * parseDateDMY('17/12/2024') // Returns: Date object
 */
export function parseDateDMY(dateString) {
  if (!dateString) return null;

  const parts = dateString.split('/');
  if (parts.length !== 3) return null;

  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed
  const year = parseInt(parts[2], 10);

  const date = new Date(year, month, day);
  
  // Validate the date
  if (isNaN(date.getTime())) return null;
  
  return date;
}

/**
 * Check if a date string is valid
 * 
 * @param {string|Date} dateInput - Date to validate
 * @returns {boolean} True if valid date, false otherwise
 * 
 * @example
 * isValidDate('2024-12-17') // Returns: true
 * isValidDate('invalid') // Returns: false
 */
export function isValidDate(dateInput) {
  if (!dateInput) return false;
  
  const date = new Date(dateInput);
  return !isNaN(date.getTime());
}

/**
 * Get today's date in YYYY-MM-DD format
 * 
 * @returns {string} Today's date as ISO string
 * 
 * @example
 * getTodayISO() // Returns: '2024-12-17'
 */
export function getTodayISO() {
  return formatDateISO(new Date());
}

/**
 * Calculate age from date of birth
 * 
 * @param {string|Date} dateOfBirth - Date of birth
 * @returns {number|null} Age in years or null if invalid
 * 
 * @example
 * calculateAge('1990-05-15') // Returns: 34 (as of 2024)
 */
export function calculateAge(dateOfBirth) {
  if (!dateOfBirth) return null;

  const birthDate = new Date(dateOfBirth);
  if (isNaN(birthDate.getTime())) return null;

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // Adjust if birthday hasn't occurred this year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}
