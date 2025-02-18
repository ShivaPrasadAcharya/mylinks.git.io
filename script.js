// Function to display links
function displayLinks(linksToShow = links) {
    const linksContainer = document.getElementById('linksList');
    linksContainer.innerHTML = '';

    linksToShow.forEach(link => {
        const linkCard = document.createElement('div');
        linkCard.className = 'link-card';
        linkCard.innerHTML = `
            <div class="link-id">#${link.id}</div>
            <button class="edit-btn" title="Edit Link" onclick="editLink(${link.id})">
                <i class="fas fa-edit"></i>
            </button>
            <h3>${link.title}</h3>
            <div class="link-name">${link.linkName}</div>
            <div class="category">${link.category}</div>
            <div class="date">Created: ${new Date(link.dateCreated).toLocaleString()}</div>
            <a href="${link.link}" target="_blank">${link.link}</a>
        `;
        linksContainer.appendChild(linkCard);
    });
}

// Function to edit link
function editLink(id) {
    const link = links.find(l => l.id === id);
    if (link) {
        // Fill form with link data
        document.getElementById('titleInput').value = link.title;
        document.getElementById('linkNameInput').value = link.linkName;
        document.getElementById('categoryInput').value = link.category;
        document.getElementById('urlInput').value = link.link;
        
        // Show form if hidden
        const form = document.querySelector('.add-link-form');
        const toggleBtn = document.querySelector('.toggle-form-btn');
        form.classList.add('show');
        toggleBtn.classList.add('active');
        
        // Scroll to form
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Update code preview
        updateCodePreview();
    }
}

// Function to handle form toggle
function setupFormToggle() {
    const toggleBtn = document.querySelector('.toggle-form-btn');
    const form = document.querySelector('.add-link-form');
    
    toggleBtn.addEventListener('click', () => {
        form.classList.toggle('show');
        toggleBtn.classList.toggle('active');
    });
}

// Function to generate code preview
function updateCodePreview() {
    const title = document.getElementById('titleInput').value || 'Title';
    const linkName = document.getElementById('linkNameInput').value || 'Link Name';
    const category = document.getElementById('categoryInput').value || 'Category';
    const url = document.getElementById('urlInput').value || 'https://example.com';
    const dateCreated = new Date().toISOString();

    const code = `{
    id: ${links.length + 1},
    title: "${title}",
    linkName: "${linkName}",
    category: "${category}",
    link: "${url}",
    dateCreated: "${dateCreated}"
}`;

    document.getElementById('codePreview').textContent = code;
}

// Function to copy code to clipboard
function copyCodeToClipboard() {
    const codeText = document.getElementById('codePreview').textContent;
    navigator.clipboard.writeText(codeText).then(() => {
        const copyBtn = document.getElementById('copyCodeBtn');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Function to add new link
function addNewLink() {
    const title = document.getElementById('titleInput').value;
    const linkName = document.getElementById('linkNameInput').value;
    const category = document.getElementById('categoryInput').value;
    const url = document.getElementById('urlInput').value;

    if (!title || !linkName || !category || !url) {
        alert('Please fill in all fields');
        return;
    }

    const newLink = {
        id: links.length + 1,
        title: title,
        linkName: linkName,
        category: category,
        link: url,
        dateCreated: new Date().toISOString()
    };

    links.push(newLink);
    saveLinks();
    displayLinks();
    updateCategoryFilter();

    // Clear input fields
    document.getElementById('titleInput').value = '';
    document.getElementById('linkNameInput').value = '';
    document.getElementById('categoryInput').value = '';
    document.getElementById('urlInput').value = '';
    updateCodePreview();
}

// Function to update category filter
function updateCategoryFilter() {
    const categoryFilter = document.getElementById('categoryFilter');
    const categories = [...new Set(links.map(link => link.category))].sort();
    
    // Clear existing options except "All"
    categoryFilter.innerHTML = '<option value="">All</option>';
    
    // Add sorted category options
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// Add event listeners for input fields to update code preview
['titleInput', 'linkNameInput', 'categoryInput', 'urlInput'].forEach(id => {
    document.getElementById(id).addEventListener('input', updateCodePreview);
});

// Add event listener for copy button
document.getElementById('copyCodeBtn').addEventListener('click', copyCodeToClipboard);

// Add event listener for the add link button
document.getElementById('addLinkBtn').addEventListener('click', addNewLink);

// Function to handle search box expansion
function setupSearchBox() {
    const searchBox = document.querySelector('.search-box');
    const searchTrigger = document.querySelector('.search-trigger');
    const searchInput = document.getElementById('searchInput');

    searchTrigger.addEventListener('click', () => {
        searchBox.classList.toggle('expanded');
        if (searchBox.classList.contains('expanded')) {
            searchInput.focus();
        }
    });

    // Close search box when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchBox.contains(e.target) && searchBox.classList.contains('expanded') && !searchInput.value) {
            searchBox.classList.remove('expanded');
        }
    });

    // Keep search box expanded if there's text
    searchInput.addEventListener('input', () => {
        if (searchInput.value) {
            searchBox.classList.add('expanded');
        }
    });
}

// Print functionality
function setupPrinting() {
    const printDropdown = document.querySelector('.print-dropdown');
    const printDropdownBtn = document.getElementById('printDropdownBtn');

    // Toggle dropdown
    printDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        printDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        printDropdown.classList.remove('active');
    });

    // Print handlers
    document.getElementById('printSingleBtn').addEventListener('click', () => {
        printDropdown.classList.remove('active');
        document.body.classList.remove('print-double');
        document.body.classList.add('print-single');
        window.print();
        document.body.classList.remove('print-single');
    });

    document.getElementById('printDoubleBtn').addEventListener('click', () => {
        printDropdown.classList.remove('active');
        document.body.classList.remove('print-single');
        document.body.classList.add('print-double');
        window.print();
        document.body.classList.remove('print-double');
    });
}

// Toggle visibility functionality with icon update
function setupVisibilityToggle() {
    const toggleBtn = document.getElementById('toggleVisibilityBtn');
    const linksList = document.getElementById('linksList');
    const icon = toggleBtn.querySelector('i');
    
    toggleBtn.addEventListener('click', () => {
        linksList.classList.toggle('hidden');
        if (linksList.classList.contains('hidden')) {
            icon.className = 'fas fa-eye-slash';
            toggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Show Links';
        } else {
            icon.className = 'fas fa-eye';
            toggleBtn.innerHTML = '<i class="fas fa-eye"></i> Hide Links';
        }
    });
}

// Function to handle header controls
function setupHeaderControls() {
    const header = document.querySelector('.fixed-header');
    const mainContent = document.querySelector('.main-content');
    const pinBtn = document.getElementById('pinHeaderBtn');
    
    // Pin/unpin header
    pinBtn.addEventListener('click', () => {
        header.classList.toggle('unpinned');
        mainContent.classList.toggle('header-unpinned');
        pinBtn.classList.toggle('active');
    });
}

// Initialize the page
displayLinks();
updateCategoryFilter();
setupPrinting();
setupVisibilityToggle();
setupSearchBox();
setupHeaderControls();
setupFormToggle();
updateCodePreview();
