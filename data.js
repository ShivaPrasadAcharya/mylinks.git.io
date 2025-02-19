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
    title: "कुटनीतिक ध्यानाकर्षण",
    linkName: "KIIT University, Pakriti Lamsal, Suicide, original letter",
    category: "Diplomacy",
    link: "https://www.onlinekhabar.com/2025/02/1626143/kiit-has-said-it-will-arrange-for-nepali-students-to-study-and-stay",
    dateCreated: "2025-02-19T07:38:48.831Z"
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
