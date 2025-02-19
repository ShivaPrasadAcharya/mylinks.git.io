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
    id: 3,
    title: "Nepali Students Chased away",
    linkName: "Pakriti Lamsal, KIIT University India, suicide, original press release",
    category: "Press Release",
    link: "https://www.onlinekhabar.com/2025/02/1626158/what-did-the-college-say-about-the-suspicious-death-of-a-nepali-student-in-india",
    dateCreated: "2025-02-19T08:01:31.974Z"
},
{
    id: 1,
    title: "Diplomatic Note",
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
