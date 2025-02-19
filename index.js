// Index definitions
const indexDefinitions = {
    "SC": "Supreme Court",
    "SCO": "Show Cause Order"
    // Users can add more entries manually here
};

// Create and append the collapsible index panel
function createIndexPanel() {
    // Create the index panel container
    const indexPanel = document.createElement('div');
    indexPanel.id = 'indexPanel';
    indexPanel.className = 'index-panel';
    
    // Create content div
    const content = document.createElement('div');
    content.className = 'index-content';
    
    // Create list of index items
    const indexList = document.createElement('ul');
    indexList.className = 'index-list';
    for (const [abbreviation, fullForm] of Object.entries(indexDefinitions)) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${abbreviation}</strong> - ${fullForm}`;
        indexList.appendChild(listItem);
    }
    
    content.appendChild(indexList);
    indexPanel.appendChild(content);
    
    // Add to document body
    document.body.appendChild(indexPanel);
}

// Initialize when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    createIndexPanel();
    
    // Add click event for index button
    const indexBtn = document.getElementById('indexBtn');
    const indexPanel = document.getElementById('indexPanel');
    
    indexBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        indexPanel.classList.toggle('show');
    });
});
