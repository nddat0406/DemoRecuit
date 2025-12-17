/**
 * Modal UI Component
 * Handles modal open/close and mode switching
 */
import { byId, addClass, removeClass } from '/js/utils/dom.js';
import { bindCandidateToForm, resetForm, setFormMode, initFormValidation } from '../form/form.ui.js';

/**
 * Open modal
 * @param {string} modalId
 */
export function openModal(modalId) {
    console.log('Opening modal:', modalId);
    const modal = byId(modalId);
    const overlay = byId('modal-overlay');

    if (modal) {
        addClass(modal, 'show');
        addClass(document.body, 'modal-open');
    }

    if (overlay) {
        addClass(overlay, 'show');
    }
}

/**
 * Close modal
 * @param {string} modalId
 */
export function closeModal(modalId) {
    const modal = byId(modalId);
    const overlay = byId('modal-overlay');

    if (modal) {
        removeClass(modal, 'show');
        removeClass(document.body, 'modal-open');
    }

    if (overlay) {
        removeClass(overlay, 'show');
    }

    // Reset form when closing
    if (modalId === 'candidate-modal') {
        resetForm();
    }
}

/**
 * Open candidate modal in Add mode
 */
export function openAddCandidateModal() {
    const modalTitle = byId('modal-title');

    if (modalTitle) {
        modalTitle.textContent = 'Thêm ứng viên';
    }

    resetForm();
    setFormMode('add');
    openModal('candidate-modal');
}

/**
 * Open candidate modal in Edit mode
 * @param {Object} candidate
 */
export function openEditCandidateModal(candidate) {
    const modalTitle = byId('modal-title'); 

    if (modalTitle) {
        modalTitle.textContent = 'Chỉnh sửa thông tin ứng viên';
    }


    setFormMode('edit', candidate.id);
    bindCandidateToForm(candidate);
    openModal('candidate-modal');
}

/**
 * Initialize modal event listeners
 */
export function initModal() {
    const overlay = byId('modal-overlay');
    const closeBtn = byId('modal-close');
    const cancelBtn = byId('cancel-btn');

    // Close modal when clicking on overlay background (not on modal content)
    if (overlay) {
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) {
                closeModal('candidate-modal');
            }
        });
    }

    // Close modal on close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            closeModal('candidate-modal');
        });
    }

    // Close modal on cancel button click
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function () {
            closeModal('candidate-modal');
        });
    }

    // Initialize form validation
    initFormValidation();

    // Escape key to close
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            const modal = byId('candidate-modal');
            if (modal && modal.classList.contains('show')) {
                closeModal('candidate-modal');
            }
        }
    });
}
