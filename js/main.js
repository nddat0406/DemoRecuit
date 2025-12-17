/**
 * Main Application Entry Point
 * 
 * Bootstraps the candidate management application and coordinates
 * all components and services.
 * 
 * Architecture:
 * - Service layer: Handles data operations (CRUD)
 * - UI components: Modular rendering (table, modal, form)
 * - Utilities: Shared helpers (DOM, storage, validation)
 * 
 * Application Flow:
 * 1. Initialize all UI components
 * 2. Load seed data into service
 * 3. Fetch and display candidates
 * 4. Bind event handlers
 * 
 * @module main
 */

// Import seed data
import seedData from './data/candidate-data.js';

// Import services
import { candidateService } from './services/candidate.service.js';

// Import UI components
import { initLayout } from './components/layout/layout.ui.js';
import { initModal, openAddCandidateModal, openEditCandidateModal } from './components/modal/modal.ui.js';
import { renderCandidateTable, initTable, filterCandidates, getCandidateById } from './components/table/table.ui.js';
import { initToast, showSuccess, showError } from './components/ui/toast.ui.js';
import { collectFormData, getFormMode, resetForm, initAvatarUpload } from './components/form/form.ui.js';

// Import utilities
import { byId, delegate } from './utils/dom.js';
import { sortByKey, arrayToCSV, downloadCSV } from './utils/common.js';

/**
 * Application state
 * 
 * Maintains global application state for:
 * - Current candidates list (local cache for performance)
 * - Search debounce timeout
 * - Table sort state (column and direction)
 */
let currentCandidates = [];
let searchTimeout;
let sortOrder = 'asc';
let sortColumn = null;

/**
 * Initialize the application
 * 
 * Bootstrap sequence:
 * 1. Initialize all UI components (layout, modal, table, toast, form)
 * 2. Seed the service with initial data
 * 3. Load and display candidates
 * 4. Bind global event listeners
 * 
 * Error handling: Shows user-friendly error message if initialization fails.
 * User should reload the page to retry.
 */
async function bootstrap() {
  try {
    console.log(' Initializing Candidate Management System...');

    // Initialize UI components
    initLayout();
    initModal();
    initTable();
    initToast();
    initAvatarUpload();

    // Initialize data
    await candidateService.init(seedData);

    // Load and display candidates
    await loadCandidates();

    // Bind event listeners
    bindEvents();

    console.log(' Application initialized successfully!');
  } catch (error) {
    console.error(' Error initializing application:', error);
    showError('Không thể khởi tạo ứng dụng. Vui lòng tải lại trang.');
  }
}

/**
 * Load and display candidates with current sort state
 * 
 * Fetches candidates from service, applies sorting if active,
 * and renders the table with sort indicators.
 * 
 * Sort logic:
 * - Uses client-side sorting for better UX
 * - Case-insensitive string comparison
 * - Maintains sort state across operations (add/edit)
 * 
 * Error handling: Shows error toast if loading fails.
 */
async function loadCandidates() {
  try {
    currentCandidates = await candidateService.list();
    
    // Apply sorting if active
    if (sortColumn) {
      currentCandidates = sortByKey(currentCandidates, sortColumn, sortOrder);
    }
    
    // Pass sort state to table for visual indicators
    renderCandidateTable(currentCandidates, {
      column: sortColumn,
      order: sortOrder
    });
  } catch (error) {
    console.error('Error loading candidates:', error);
    showError('Không thể tải danh sách ứng viên');
  }
}

/**
 * Bind global event listeners
 * 
 * Sets up event handlers for:
 * - Add candidate button
 * - Search input (debounced)
 * - Form submission (prevent default)
 * - Submit button (add/edit)
 * - Table actions (edit via delegation)
 * - Column sorting (via delegation)
 * - Export and filter buttons
 * - Date picker triggers
 * 
 * Rationale: Uses event delegation for dynamically generated elements
 * (table rows, date inputs) to avoid memory leaks and improve performance.
 */
function bindEvents() {
  // Add candidate button
  const addBtn = byId('add-candidate-btn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      openAddCandidateModal();
    });
  }

  // Search input
  const searchInput = byId('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }

  // Prevent form submission
  const candidateForm = byId('candidate-form');
  if (candidateForm) {
    candidateForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }

  // Submit form (Add or Edit)
  const submitBtn = byId('submit-btn');
  if (submitBtn) {
    submitBtn.addEventListener('click', handleSubmit);
  }

  // Table actions (Edit buttons)
  const tbody = byId('candidate-tbody');
  const thead = byId('candidate-thead');

  // Sortable columns
  if (thead) {
    delegate(thead, 'click', 'th.sortable', handleSort);
  }

  if (tbody) {
    // Edit button
    delegate(tbody, 'click', '.btn-edit', async function (e) {
      e.preventDefault();
      const candidateId = this.getAttribute('data-id');
      await handleEdit(candidateId);
    });
  }

  // Export button
  const exportBtn = byId('export-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', handleExport);
  }

  // Filter button
  const filterBtn = byId('filter-btn');
  if (filterBtn) {
    filterBtn.addEventListener('click', handleFilter);
  }

  // Date calendar buttons - trigger date picker when clicked
  const modalBody = document.querySelector('.modal-body');
  if (modalBody) {
    delegate(modalBody, 'click', '.date-calendar-btn', function (e) {
      e.preventDefault();
      e.stopPropagation();

      // Find the date input in the same date-input-group
      const dateInputGroup = this.closest('.date-input-group');
      if (dateInputGroup) {
        const dateInput = dateInputGroup.querySelector('input[type="date"]');
        if (dateInput) {
          dateInput.showPicker();
        }
      }
    });
  }
}

/**
 * Handle search input with debouncing
 * 
 * Debounces search requests to avoid excessive API calls during typing.
 * Wait time: 300ms after last keystroke.
 * 
 * Search behavior:
 * - Searches across all candidate fields
 * - Case-insensitive matching
 * - Updates table with filtered results
 * 
 * @param {Event} e - Input event
 */
async function handleSearch(e) {
  const keyword = e.target.value.trim();

  // Debounce search
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(async () => {
    try {
      const results = await candidateService.search(keyword);
      filterCandidates(results);
    } catch (error) {
      console.error('Error searching candidates:', error);
      showError('Không thể tìm kiếm ứng viên');
    }
  }, 300);
}
/**
 * Handle table column sorting
 * 
 * Toggles sort order when clicking the same column.
 * Resets to ascending when switching columns.
 * 
 * Sort behavior:
 * - First click: ascending
 * - Second click: descending
 * - Third click on same column: descending (toggles)
 * 
 * Visual feedback: Sort indicators (▲/▼) update automatically.
 * 
 * @param {Event} e - Click event on sortable column header
 */
async function handleSort(e) {
  // Find the closest <th> element in case user clicks on nested div/text
  const th = e.target.closest('th');
  const column = th ? th.getAttribute('data-key') : null;
  if (!column) return;

  // Toggle sort order or set new column
  if (sortColumn === column) {
    sortOrder = (sortOrder === 'asc') ? 'desc' : 'asc';
  } else {
    sortColumn = column;
    sortOrder = 'asc';
  }
  
  await loadCandidates();
}
/**
 * Handle form submission (Add or Edit candidate)
 * 
 * Workflow:
 * 1. Collect and validate form data
 * 2. Determine mode (add/edit) from form state
 * 3. Call appropriate service method
 * 4. Show success message
 * 5. Reload table data
 * 6. Close modal and reset form
 * 
 * Validation: Performed by collectFormData().
 * Returns null if validation fails.
 * 
 * Error handling: Shows error toast if save operation fails.
 */
async function handleSubmit() {
  try {
    const formData = collectFormData();

    if (!formData) {
      // Validation failed
      return;
    }

    const { mode, candidateId } = getFormMode();

    if (mode === 'add') {
      await candidateService.create(formData);
      showSuccess('Thêm ứng viên thành công!');
    } else if (mode === 'edit') {
      await candidateService.update(candidateId, formData);
      showSuccess('Cập nhật thông tin ứng viên thành công!');
    }

    // Reload candidates
    await loadCandidates();

    // Close modal
    const { closeModal } = await import('./components/modal/modal.ui.js');
    closeModal('candidate-modal');
    resetForm();

  } catch (error) {
    console.error('Error submitting form:', error);
    showError('Không thể lưu thông tin ứng viên. Vui lòng thử lại.');
  }
}

/**
 * Handle edit candidate action
 * 
 * Loads candidate data from service and opens edit modal with pre-filled form.
 * 
 * @param {string} candidateId - Unique identifier of candidate to edit
 * 
 * Error handling: Shows error if candidate not found or loading fails.
 */
async function handleEdit(candidateId) {
  try {
    const candidate = await candidateService.getById(candidateId);

    if (!candidate) {
      showError('Không tìm thấy ứng viên');
      return;
    }

    openEditCandidateModal(candidate);
  } catch (error) {
    console.error('Error editing candidate:', error);
    showError('Không thể tải thông tin ứng viên');
  }
}


/**
 * Handle filter application
 * 
 * Applies multiple filters (position, source) simultaneously.
 * Shows all candidates if no filters are selected.
 * 
 * Filter logic:
 * - AND condition between multiple filters
 * - Exact match filtering (not partial)
 * 
 * Future enhancement: Add partial matching and date range filters.
 */
async function handleFilter() {
  try {
    const position = byId('filter-position')?.value;
    const source = byId('filter-source')?.value;

    const filters = {};
    if (position) filters.position = position;
    if (source) filters.source = source;

    if (Object.keys(filters).length === 0) {
      // No filters, show all
      await loadCandidates();
      return;
    }

    const results = await candidateService.filter(filters);
    filterCandidates(results);
    showSuccess('Đã áp dụng bộ lọc');

  } catch (error) {
    console.error('Error filtering candidates:', error);
    showError('Không thể lọc dữ liệu');
  }
}

/**
 * Handle export to CSV
 * 
 * Exports currently displayed candidates to CSV file.
 * 
 * Export format:
 * - UTF-8 encoding with BOM for Excel compatibility
 * - Vietnamese column headers
 * - All visible fields included
 * - Filename includes current date
 * 
 * Constraint: Exports only current filter results (not all data).
 * User should clear filters first to export everything.
 * 
 * Future enhancement: Add Excel format export with formatting.
 */
function handleExport() {
  try {
    const candidates = currentCandidates;

    if (candidates.length === 0) {
      showError('Không có dữ liệu để xuất');
      return;
    }

    // Define CSV structure
    const headers = [
      'Họ và tên',
      'Giới tính',
      'Ngày sinh',
      'Số điện thoại',
      'Email',
      'Địa chỉ',
      'Khu vực',
      'Vị trí',
      'Công ty',
      'Nguồn',
      'Người tuyển dụng',
      'Người cộng tác',
      'Ngày ứng tuyển'
    ];

    const columnKeys = [
      'fullName',
      'gender',
      'dateOfBirth',
      'phone',
      'email',
      'address',
      'area',
      'position',
      'company',
      'source',
      'recruiter',
      'collaborator',
      'appliedDate'
    ];

    // Convert to CSV using utility
    const csvContent = arrayToCSV(
      candidates.map(c => {
        const row = {};
        columnKeys.forEach((key, index) => {
          row[key] = c[key] || '';
        });
        return row;
      }),
      columnKeys
    );

    // Add headers
    const fullCSV = headers.join(',') + '\n' + csvContent;

    // Trigger download
    const filename = `candidates_${new Date().toISOString().split('T')[0]}`;
    downloadCSV(fullCSV, filename);

    showSuccess('Đã xuất dữ liệu thành công!');

  } catch (error) {
    console.error('Error exporting candidates:', error);
    showError('Không thể xuất dữ liệu');
  }
}

/**
 * Application entry point
 * 
 * Starts the application when DOM is ready.
 * Handles both scenarios:
 * - DOMContentLoaded event (if document is still loading)
 * - Immediate execution (if DOM is already loaded)
 * 
 * This ensures the app starts reliably regardless of script load timing.
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}