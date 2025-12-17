/**
 * Form UI Component
 * Handles form data binding and collection
 */
import { byId } from '/js/utils/dom.js';
import { validateCandidate, showFormErrors, clearFormErrors } from '/js/utils/validator.js';

/**
 * Initialize avatar upload functionality
 */
export function initAvatarUpload() {
  const avatarUpload = byId('avatarUpload');
  const avatarPreview = byId('avatarPreview');
  const avatarUploadContainer = document.querySelector('.avatar-upload');
  
  if (avatarUpload && avatarPreview) {
    // File input change event
    avatarUpload.addEventListener('change', function(e) {
      readAvatarURL(this);
    });
    
    // Click on entire avatar-upload to trigger file input
    if (avatarUploadContainer) {
      avatarUploadContainer.addEventListener('click', function(e) {
        // Prevent if clicking on the label (edit button) - let it handle naturally
        if (!e.target.closest('label')) {
          avatarUpload.click();
        }
      });
      
      // Add cursor pointer style
      avatarUploadContainer.style.cursor = 'pointer';
    }
  }
}

/**
 * Read and preview uploaded avatar
 * @param {HTMLInputElement} input
 */
function readAvatarURL(input) {
  // Check if file is selected
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
      const avatarPreview = byId('avatarPreview');
      const avatarUpload = document.querySelector('.avatar-upload');
      
      if (avatarPreview) {
        avatarPreview.style.backgroundImage = `url(${e.target.result})`;
        avatarPreview.classList.add('has-image');
        
        // Add has-image class to parent to show edit button
        if (avatarUpload) {
          avatarUpload.classList.add('has-image');
        }
        
        // Fade in effect
        avatarPreview.style.opacity = '0';
        setTimeout(() => {
          avatarPreview.style.transition = 'opacity 0.4s ease-in-out';
          avatarPreview.style.opacity = '1';
        }, 10);
      }
    };
    
    reader.readAsDataURL(input.files[0]);
  }
}

/**
 * Reset avatar preview
 */
export function resetAvatarPreview() {
  const avatarPreview = byId('avatarPreview');
  const avatarUploadInput = byId('avatarUpload');
  const avatarUploadContainer = document.querySelector('.avatar-upload');
  
  if (avatarPreview) {
    avatarPreview.style.backgroundImage = '';
    avatarPreview.classList.remove('has-image');
  }
  
  if (avatarUploadContainer) {
    avatarUploadContainer.classList.remove('has-image');
  }
  
  if (avatarUploadInput) {
    avatarUploadInput.value = '';
  }
}

/**
 * Bind candidate data to form
 * @param {Object} candidate
 */
export function bindCandidateToForm(candidate) {
  if (!candidate) return;
  
  // Personal information
  setFieldValue('fullName', candidate.fullName);
  setFieldValue('gender', candidate.gender);
  setFieldValue('dateOfBirth', candidate.dateOfBirth);
  setFieldValue('phone', candidate.phone);
  setFieldValue('email', candidate.email);
  setFieldValue('address', candidate.address);
  setFieldValue('area', candidate.area);
  
  // Education information
  setFieldValue('educationLevel', candidate.educationLevel);
  setFieldValue('trainingPlace', candidate.trainingPlace);
  setFieldValue('major', candidate.major);
  
  // Application information
  setFieldValue('position', candidate.position);
  setFieldValue('company', candidate.company);
  setFieldValue('source', candidate.source);
  setFieldValue('recruiter', candidate.recruiter);
  setFieldValue('collaborator', candidate.collaborator);
  setFieldValue('appliedDate', candidate.appliedDate);
  
  // Work experience
  setFieldValue('workplace', candidate.workplace);
  setFieldValue('workStartDate', candidate.workStartDate);
  setFieldValue('workEndDate', candidate.workEndDate);
  setFieldValue('jobDescription', candidate.jobDescription);
  
  // Avatar
  if (candidate.avatar) {
    const avatarPreview = byId('avatarPreview');
    const avatarUploadContainer = document.querySelector('.avatar-upload');
    
    if (avatarPreview) {
      avatarPreview.style.backgroundImage = `url(${candidate.avatar})`;
      avatarPreview.classList.add('has-image');
    }
    
    if (avatarUploadContainer) {
      avatarUploadContainer.classList.add('has-image');
    }
  }
}

/**
 * Collect form data as candidate object
 * @returns {Object|null}
 */
export function collectFormData() {
  const formData = {
    fullName: getFieldValue('fullName'),
    gender: getFieldValue('gender'),
    dateOfBirth: getFieldValue('dateOfBirth'),
    phone: getFieldValue('phone'),
    email: getFieldValue('email'),
    address: getFieldValue('address'),
    area: getFieldValue('area'),
    educationLevel: getFieldValue('educationLevel'),
    trainingPlace: getFieldValue('trainingPlace'),
    major: getFieldValue('major'),
    position: getFieldValue('position'),
    company: getFieldValue('company'),
    source: getFieldValue('source'),
    recruiter: getFieldValue('recruiter'),
    collaborator: getFieldValue('collaborator'),
    appliedDate: getFieldValue('appliedDate'),
    workplace: getFieldValue('workplace'),
    workStartDate: getFieldValue('workStartDate'),
    workEndDate: getFieldValue('workEndDate'),
    jobDescription: getFieldValue('jobDescription')
  };
  
  // Validate
  const validation = validateCandidate(formData);
  
  if (!validation.valid) {
    showFormErrors(validation.errors);
    return null;
  }
  
  clearFormErrors();
  return formData;
}

/**
 * Reset form to initial state
 */
export function resetForm() {
  const form = byId('candidate-form');
  if (form) {
    form.reset();
  }
  clearFormErrors();
  resetAvatarPreview();
}

/**
 * Set field value by ID
 * @param {string} fieldId
 * @param {any} value
 */
function setFieldValue(fieldId, value) {
  const field = byId(fieldId);
  if (field) {
    field.value = value || '';
  }
}

/**
 * Get field value by ID
 * @param {string} fieldId
 * @returns {string}
 */
function getFieldValue(fieldId) {
  const field = byId(fieldId);
  return field ? field.value.trim() : '';
}

/**
 * Initialize form validation on input
 */
export function initFormValidation() {
  const form = byId('candidate-form');
  if (!form) return;
  
  // Clear error on input
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const errorMessage = input.parentNode.querySelector('.error-message');
      if (errorMessage) {
        errorMessage.remove();
      }
    });
  });
}

/**
 * Set form mode (add or edit)
 * @param {string} mode - 'add' or 'edit'
 * @param {string} candidateId - required for edit mode
 */
export function setFormMode(mode, candidateId = null) {
  const form = byId('candidate-form');
  if (form) {
    form.setAttribute('data-mode', mode);
    if (candidateId) {
      form.setAttribute('data-candidate-id', candidateId);
    } else {
      form.removeAttribute('data-candidate-id');
    }
  }
}

/**
 * Get current form mode
 * @returns {Object} { mode: string, candidateId: string|null }
 */
export function getFormMode() {
  const form = byId('candidate-form');
  if (!form) return { mode: 'add', candidateId: null };
  
  return {
    mode: form.getAttribute('data-mode') || 'add',
    candidateId: form.getAttribute('data-candidate-id') || null
  };
}
