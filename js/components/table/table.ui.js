/**
 * Table UI Component
 * 
 * Manages candidate table rendering with advanced features:
 * - Dynamic column rendering with custom widths
 * - Client-side pagination with configurable items per page
 * - Column resizing via mouse drag
 * - Visual sort indicators (ascending/descending arrows)
 * - Row selection with checkbox support
 * - Responsive design with ellipsis for long text
 * 
 * @module components/table/table.ui
 */
import { byId, delegate } from '/js/utils/dom.js';
import { formatDate } from '/js/utils/date-format.js';
import { escapeHtml, getInitials, getAvatarColorClass } from '/js/utils/common.js';

// Table state management
let currentPage = 1;
let itemsPerPage = 25;
let allCandidates = [];
let filteredCandidates = [];

// Sort state tracking (used for visual indicators)
let currentSortColumn = null;
let currentSortOrder = 'asc';

/**
 * Column configuration with width settings
 * 
 * Defines default and minimum widths for each table column.
 * Used for column resizing and initial table layout.
 * 
 * Structure: { key: string, width: number (px), minWidth: number (px) }
 */
const columnWidths = [
    { key: 'checkbox', width: 50, minWidth: 10 },
    { key: 'fullName', width: 200, minWidth: 10 },
    { key: 'phone', width: 150, minWidth: 10 },
    { key: 'source', width: 150, minWidth: 10 },
    { key: 'email', width: 200, minWidth: 10 },
    { key: 'gender', width: 100, minWidth: 10 },
    { key: 'dateOfBirth', width: 120, minWidth: 10 },
    { key: 'address', width: 150, minWidth: 10 },
    { key: 'area', width: 120, minWidth: 10 },
    { key: 'position', width: 180, minWidth: 10 },
    { key: 'company', width: 150, minWidth: 10 },
    { key: 'recruiter', width: 150, minWidth: 10 },
    { key: 'appliedDate', width: 120, minWidth: 10 },
    { key: 'status', width: 120, minWidth: 10 },
    { key: 'actions', width: 50, minWidth: 10 }
];

/**
 * Render candidate table with given data
 * 
 * Main entry point for table rendering. Initializes table state,
 * renders all components (header, body, pagination), and sets up interactions.
 * 
 * @param {Array<Object>} candidates - Array of candidate objects to display
 * @param {Object} sortState - Optional sort state { column: string, order: 'asc'|'desc' }
 * 
 * @example
 * renderCandidateTable(candidates, { column: 'fullName', order: 'asc' });
 */
export function renderCandidateTable(candidates, sortState = null) {
    allCandidates = candidates;
    filteredCandidates = candidates;
    currentPage = 1;

    // Update sort state for visual indicators
    if (sortState) {
        currentSortColumn = sortState.column;
        currentSortOrder = sortState.order;
    }

    renderTableHeader();
    renderTable();
    renderPagination();
    updateStats();
    initColumnResizing();
    initSelectAll();
}


/**
 * Initialize select-all checkbox functionality
 * 
 * Binds event listener to header checkbox that toggles all row checkboxes.
 * Also adds/removes 'selected' class for visual highlighting.
 * 
 * Constraint: Only affects currently visible rows on the current page.
 */
function initSelectAll() {
    const selectAll = byId('select-all');
    const tbody = byId('candidate-tbody');

    if (selectAll && tbody) {
        selectAll.addEventListener('change', function () {
            const checkboxes = tbody.querySelectorAll('.col-checkbox input[type="checkbox"]');
            if (selectAll.checked) {
                checkboxes.forEach(checkbox => {
                    checkbox.closest("tr").classList.add("selected");
                    checkbox.checked = selectAll.checked;
                });
            } else {
                checkboxes.forEach(checkbox => {
                    checkbox.closest("tr").classList.remove("selected");
                    checkbox.checked = selectAll.checked;
                });
            }

        });
    }
}

/**
 * Render table header with column titles and sort indicators
 * 
 * Generates table header row with:
 * - Checkbox column for select-all
 * - Sortable columns with visual indicators (▲/▼)
 * - Fixed action column
 * - Column width styling
 * 
 * Rationale: Centralizing header generation ensures consistent styling
 * and allows dynamic sort indicator updates.
 */
function renderTableHeader() {
    const thead = byId('candidate-thead');
    if (!thead) return;

    const headers = [
        { label: ' <div class="display-flex justify-content-center"><input type="checkbox" id="select-all"></div>', key: 'checkbox' },
        { label: 'Họ và tên', key: 'fullName' },
        { label: 'Số điện thoại', key: 'phone' },
        { label: 'Nguồn ứng viên', key: 'source' },
        { label: 'Email', key: 'email' },
        { label: 'Giới tính', key: 'gender' },
        { label: 'Ngày sinh', key: 'dateOfBirth' },
        { label: 'Địa chỉ', key: 'address' },
        { label: 'Khu vực', key: 'area' },
        { label: 'Vị trí ứng tuyển', key: 'position' },
        { label: 'Công ty', key: 'company' },
        { label: 'Nhà tuyển dụng', key: 'recruiter' },
        { label: 'Ngày ứng tuyển', key: 'appliedDate' },
        { label: 'Trạng thái', key: 'status' },
        { label: '', key: 'actions' }
    ];

    let headerHTML = '<tr>';
    headers.forEach((header, index) => {
        const colWidth = columnWidths[index];
        const isCheckbox = header.key === 'checkbox';
        const isAction = header.key === 'actions';
        const isSortable = !isAction && !isCheckbox;

        // Determine if this column is currently sorted
        const isSorted = currentSortColumn === header.key;
        const sortIconHTML = isSorted
            ? (currentSortOrder === 'asc'
                ? ' <div class="sort-indicator">&#8593;</div>'
                : ' <div class="sort-indicator">&#8595;</div>')
            : '';

        headerHTML += `
            <th scope="col" 
                class="${isCheckbox ? 'col-checkbox' : ''} ${isAction ? 'col-action-fixed' : ''} ${isSortable ? 'sortable' : ''}"
                data-col-index="${index}"
                data-key="${header.key}"
                style="width: ${colWidth.width}px; min-width: ${colWidth.minWidth}px;">
                <div class="display-flex align-items-center justify-content-start">
                    <div>${header.label}</div>
                    ${sortIconHTML}
                </div>
            </th>
        `;
    });
    headerHTML += '</tr>';

    thead.innerHTML = headerHTML;
}

/**
 * Render table body with paginated data
 * 
 * Generates table rows for current page of filtered candidates.
 * Shows "No data" message when no candidates are available.
 * 
 * Pagination logic:
 * - Calculates start/end indices based on current page and items per page
 * - Only renders visible rows for performance
 */
function renderTable() {
    const tbody = byId('candidate-tbody');
    if (!tbody) return;

    // Calculate pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = filteredCandidates.slice(startIndex, endIndex);

    // Clear existing rows
    tbody.innerHTML = '';

    // Render rows
    if (pageData.length === 0) {
        tbody.innerHTML = `
      <tr>
        <td colspan="15" style="text-align: center; padding: 2rem;">
          Không có dữ liệu
        </td>
      </tr>
    `;
        return;
    }

    pageData.forEach((candidate, index) => {
        const row = createTableRow(candidate, startIndex + index + 1);
        tbody.appendChild(row);
    });
}

/**
 * Initialize column resizing via mouse drag
 * 
 * Allows users to resize columns by dragging the right edge of column headers.
 * Features:
 * - Mouse down near right edge (within 1em) starts resize
 * - Drag updates column width in real-time
 * - Minimum width: 10px to prevent column collapse
 * - Double-click resets all columns to default widths
 * 
 * Constraint: Checkbox and action columns are not resizable.
 * 
 * Rationale: Provides flexible table layout for different screen sizes
 * and user preferences without breaking table structure.
 */
function initColumnResizing() {
    const table = document.querySelector('.table-resizable');
    if (!table) return;

    let startX = 0;
    let startWidth = 0;
    let currentTh = null;
    let pressed = false;

    // Mouse down on th
    table.addEventListener('mousedown', function (event) {
        const th = event.target.closest('th');
        //If no th or checkbox/action column, return
        if (!th || th.classList.contains('col-checkbox') || th.classList.contains('col-action-fixed')) return;

        // Check if click is near the right edge (within 1em)
        const rect = th.getBoundingClientRect();
        const rightEdge = rect.right;
        const clickX = event.clientX;

        if (rightEdge - clickX <= parseFloat(getComputedStyle(document.documentElement).fontSize)) {
            currentTh = th;
            pressed = true;
            startX = event.pageX;
            startWidth = th.offsetWidth;
            table.classList.add('resizing');
            event.preventDefault();
        }
    });

    // Mouse move
    document.addEventListener('mousemove', function (event) {
        if (pressed && currentTh) {
            const diff = event.pageX - startX;
            const newWidth = Math.max(10, startWidth + diff);
            const colIndex = parseInt(currentTh.getAttribute('data-col-index'));

            // Update column width
            columnWidths[colIndex].width = newWidth;
            currentTh.style.width = `${newWidth}px`;

            // Update all td in this column
            const tbody = byId('candidate-tbody');
            if (tbody) {
                const rows = tbody.querySelectorAll('tr');
                rows.forEach(row => {
                    const cells = row.querySelectorAll('td');
                    if (cells[colIndex]) {
                        cells[colIndex].style.width = `${newWidth}px`;
                        cells[colIndex].style.maxWidth = `${newWidth}px`;
                    }
                });
            }
        }
    });

    // Mouse up
    document.addEventListener('mouseup', function () {
        if (pressed) {
            table.classList.remove('resizing');
            pressed = false;
            currentTh = null;
        }
    });

    // Double click to reset
    table.addEventListener('dblclick', function (event) {
        const th = event.target.closest('th');
        if (th && !th.classList.contains('col-checkbox') && !th.classList.contains('col-action-fixed')) {
            // Reset all column widths
            const ths = table.querySelectorAll('th');
            ths.forEach((th, index) => {
                if (columnWidths[index]) {
                    th.style.width = '';
                    columnWidths[index].width = getDefaultWidth(index);
                }
            });
            renderTable();
        }
    });
}

/**
 * Get default column width by index
 * 
 * Returns predefined default widths for table columns.
 * Used when resetting column widths (double-click).
 * 
 * @param {number} index - Column index
 * @returns {number} Default width in pixels
 */
function getDefaultWidth(index) {
    const defaults = [50, 150, 150, 200, 200, 100, 120, 150, 120, 180, 150, 150, 120, 120, 50];
    return defaults[index] || 150;
}

/**
 * Create table row for a single candidate
 * 
 * Generates HTML row with all candidate information formatted appropriately.
 * 
 * Features:
 * - Avatar display (image or initials with colored background)
 * - Status-based row highlighting ('Đã tuyển' = hired)
 * - Badge for unread emails
 * - Employee status indicator for hired candidates
 * - Ellipsis for long text fields
 * - Safe HTML escaping for all user content
 * 
 * @param {Object} candidate - Candidate data object
 * @param {number} index - Row index for avatar color variation
 * @returns {HTMLElement} Table row element
 * 
 * @example
 * const row = createTableRow(candidateData, 0);
 * tbody.appendChild(row);
 */
function createTableRow(candidate, index) {
    const tr = document.createElement('tr');
    tr.setAttribute('data-id', candidate.id);
    if (candidate.status === 'Đã tuyển') {
        tr.classList.add('row-highlight');
    }

    // Generate initials and color for avatar
    const initials = getInitials(candidate.fullName);
    const colorClass = getAvatarColorClass(index);

    // Row layout
    tr.innerHTML = `
    <td class="col-checkbox" style="width: ${columnWidths[0].width}px; max-width: ${columnWidths[0].width}px;">
        <div class="display-flex justify-content-center">
            <input type="checkbox">
        </div>
    </td>
    <td style="width: ${columnWidths[3].width}px; max-width: ${columnWidths[3].width}px;">
       <div class="user-info display-flex">
            ${candidate.avatar ?
            `<img src="${candidate.avatar}" alt="${escapeHtml(candidate.fullName)}" class="avatar-circle ${colorClass}">`
            : `<div class="avatar-circle ${colorClass}">${initials}</div>`}
            <div class="user-info-content">
              <div class="user-info-name-row">
                <span class="user-info-name-text">${escapeHtml(candidate.fullName)}</span>
                ${candidate.numberOfUnreadEmail ?
            `<div class="icon-wrapper">
                        <div class="icon icon-link-small"></div>
                        <span class="badge">3</span>
                    </div>` : ''}
              </div>
              ${candidate.status === 'Đã tuyển' ? `<div class="employee-status display-flex font-weight-400"><div class="icon icon-tick-green"></div>Nhân Viên</div>` : ''}
            </div>
       </div>
    </td>
    <td style="width: ${columnWidths[1].width}px; max-width: ${columnWidths[1].width}px;">${escapeHtml(candidate.phone) || '--'}</td>
    <td style="width: ${columnWidths[2].width}px; max-width: ${columnWidths[2].width}px;">${escapeHtml(candidate.source) || '--'}</td>
    <td style="width: ${columnWidths[4].width}px; max-width: ${columnWidths[4].width}px;">${escapeHtml(candidate.email) || '--'}</td>
    <td style="width: ${columnWidths[5].width}px; max-width: ${columnWidths[5].width}px;">${escapeHtml(candidate.gender) || '--'}</td>
    <td style="width: ${columnWidths[6].width}px; max-width: ${columnWidths[6].width}px;">${formatDate(candidate.dateOfBirth) || '--'}</td>
    <td class="col-ellipsis" style="width: ${columnWidths[7].width}px; max-width: ${columnWidths[7].width}px;">${escapeHtml(candidate.address) || '--'}</td>
    <td style="width: ${columnWidths[8].width}px; max-width: ${columnWidths[8].width}px;">${escapeHtml(candidate.area) || '--'}</td>
    <td class="col-ellipsis" style="width: ${columnWidths[9].width}px; max-width: ${columnWidths[9].width}px;">${escapeHtml(candidate.position) || '--'}</td>
    <td class="col-ellipsis" style="width: ${columnWidths[10].width}px; max-width: ${columnWidths[10].width}px;">${escapeHtml(candidate.company) || '--'}</td>
    <td class="col-ellipsis" style="width: ${columnWidths[11].width}px; max-width: ${columnWidths[11].width}px;">${escapeHtml(candidate.recruiter) || '--'}</td>
    <td style="width: ${columnWidths[12].width}px; max-width: ${columnWidths[12].width}px;">${formatDate(candidate.appliedDate) || '--'}</td>
    <td style="width: ${columnWidths[13].width}px; max-width: ${columnWidths[13].width}px;"><span>${escapeHtml(candidate.status)}</span></td>
    <td class="col-action-fixed" style="width: ${columnWidths[14].width}px; max-width: ${columnWidths[14].width}px;">
        <div class="icon icon-edit btn-edit" data-id="${candidate.id}" style="cursor: pointer;"></div>
    </td>
  `;

    return tr;
}

/**
 * Render pagination controls (previous/next buttons)
 * 
 * Generates pagination UI with disabled state for boundary conditions.
 * Hides pagination when only one page exists.
 * 
 * Constraint: Currently uses simple prev/next navigation.
 * Can be extended to show page numbers for larger datasets.
 */
function renderPagination() {
    const pagination = byId('pagination');
    if (!pagination) return;

    const totalPages = Math.ceil(filteredCandidates.length / itemsPerPage);

    if (totalPages <= 1) {
        pagination.innerHTML = `
      <button class="btn-pagination" disabled>
        <div class="icon icon-chevron-left"></div>
      </button>
      <button class="btn-pagination" disabled>
        <div class="icon icon-chevron-right"></div>
      </button>
    `;
        return;
    }

    let html = '';

    // Previous button
    html += `
    <button class="btn-pagination" ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">
      <div class="icon icon-chevron-left"></div>
    </button>
  `;

    // Next button
    html += `
    <button class="btn-pagination" ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">
      <div class="icon icon-chevron-right"></div>
    </button>
  `;

    pagination.innerHTML = html;
}

/**
 * Update table statistics display
 * 
 * Updates total count and page range information in the UI.
 * Shows: "Total: X records" and current page range.
 */
function updateStats() {
    const totalCount = byId('total-count');
    const pageInfo = byId('page-info');

    if (totalCount) {
        totalCount.textContent = filteredCandidates.length;
    }

    if (pageInfo) {
        const startIndex = (currentPage - 1) * itemsPerPage + 1;
        const endIndex = Math.min(currentPage * itemsPerPage, filteredCandidates.length);
        pageInfo.innerHTML = `Tổng: <strong id="total-count">${filteredCandidates.length}</strong> bản ghi`;
    }
}

/**
 * Navigate to a specific page
 * 
 * Updates current page and re-renders table, pagination, and stats.
 * Validates page number to ensure it's within valid range.
 * 
 * @param {number} page - Target page number (1-indexed)
 * 
 * @example
 * goToPage(3); // Navigate to page 3
 */
export function goToPage(page) {
    const totalPages = Math.ceil(filteredCandidates.length / itemsPerPage);

    if (page < 1 || page > totalPages) return;

    currentPage = page;
    renderTable();
    renderPagination();
    updateStats();
}

/**
 * Filter and display specific candidates
 * 
 * Updates the filtered candidate list and resets to page 1.
 * Used by search and filter operations.
 * 
 * Rationale: Maintains separation between full dataset (allCandidates)
 * and currently displayed subset (filteredCandidates).
 * 
 * @param {Array<Object>} candidates - Filtered candidate array
 * 
 * @example
 * filterCandidates(searchResults); // Show only search results
 */
export function filterCandidates(candidates) {
    filteredCandidates = candidates;
    currentPage = 1;
    renderTable();
    renderPagination();
    updateStats();
}

/**
 * Update items per page setting
 * 
 * Changes pagination size and resets to page 1.
 * Triggers full table re-render.
 * 
 * @param {number} count - Number of items to display per page
 * 
 * @example
 * setItemsPerPage(50); // Show 50 candidates per page
 */
export function setItemsPerPage(count) {
    itemsPerPage = count;
    currentPage = 1;
    renderTable();
    renderPagination();
    updateStats();
}

/**
 * Find candidate by ID in current dataset
 * 
 * Searches through all loaded candidates (not just filtered/visible ones).
 * 
 * @param {string} id - Candidate unique identifier
 * @returns {Object|null} Candidate object or null if not found
 * 
 * @example
 * const candidate = getCandidateById('123');
 * if (candidate) console.log(candidate.fullName);
 */
export function getCandidateById(id) {
    return allCandidates.find(c => c.id === id) || null;
}

/**
 * Initialize table event listeners
 * 
 * Sets up delegated event handlers for:
 * - Pagination button clicks
 * - Items per page dropdown changes
 * 
 * Rationale: Using event delegation for pagination buttons
 * since they are dynamically generated.
 */
export function initTable() {
    // Pagination clicks
    const pagination = byId('pagination');
    if (pagination) {
        delegate(pagination, 'click', '.btn-pagination', function (e) {
            e.preventDefault();
            const page = parseInt(this.getAttribute('data-page'));
            if (!isNaN(page)) {
                goToPage(page);
            }
        });
    }

    // Items per page selector
    const itemsPerPageSelect = byId('items-per-page');
    if (itemsPerPageSelect) {
        itemsPerPageSelect.addEventListener('change', (e) => {
            setItemsPerPage(parseInt(e.target.value));
        });
    }
}

/**
 * Get all loaded candidates
 * 
 * Returns the complete candidate dataset (not filtered).
 * Useful for export operations and statistics.
 * 
 * @returns {Array<Object>} Array of all candidate objects
 * 
 * @example
 * const allData = getAllCandidates();
 * exportToCSV(allData);
 */
export function getAllCandidates() {
    return allCandidates;
}
