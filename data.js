// Sample data structure for links
const links = [
    {
        id: 3,
        title: "Google",
        linkName: "Search Engine Homepage",
        category: "Search Engine",
        link: "https://www.google.com",
        dateCreated: "2025-02-18T21:53:09+05:45"
    },
    {
        id: 2,
        title: "GitHub",
        linkName: "Code Repository Platform",
        category: "Development",
        link: "https://github.com",
        dateCreated: "2025-02-18T21:53:09+05:45"
    },
    {
        id: 1,
        title: "Stack Overflow",
        linkName: "Developer Q&A Site",
        category: "Development",
        link: "https://stackoverflow.com",
        dateCreated: "2025-02-18T21:53:09+05:45"
    }
];

// Function to save links to localStorage
function saveLinks() {
    localStorage.setItem('favoriteLinks', JSON.stringify(links));
}

// Function to load links from localStorage
function loadLinks() {
    const savedLinks = localStorage.getItem('favoriteLinks');
    if (savedLinks) {
        links.length = 0; // Clear existing links
        links.push(...JSON.parse(savedLinks));
    }
}

// Initialize by loading saved links
loadLinks();
