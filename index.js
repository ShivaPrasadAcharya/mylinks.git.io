// Index definitions
const indexDefinitions = {
    "xsc": "supreme court",
    "xsco": "show cause order only",
    "xfbo": "full bench order",
    "xsbo": "single bench order",
    "xioi": "interim order issued",
    "xiod": "interim order on discussion",
    "xdls": "deadline specified",
    "xioni": "interim order not issued",
    "xilo": "interloculatory order",
    "xpg": "priority given",
    "xsco+": "show cause order plus",
    "xcb": "constitutional bench",
    "xdb": "division bench",
    "xexo": "exceptional orders",
    "xcic": "civil case",
    "xcoc": "contempt of court case",
    "xcrc": "criminal case",
    "xpil": "public interest litigation",
    "xhc": "hybrid case",
    "xccu": "case category unknown",
    "xwc": "writ case",
    "xjc": "inter government jurisdictional issue",
    "xuv": "ultravires",
    "xei": "election issue",
    "xwq": "writ quashed",
    "xdoi": "directive order issued",
    "xwi": "writ issued",
    "xwip": "writ issued partially",
    "xei": "election issue",
    "xdli": "delegated legislation issue",
    "xtc": "transfered case (case transfered by other bench)",
    
    
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
