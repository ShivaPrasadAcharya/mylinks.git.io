// Sample data structure for links
const links = [
   {
    id: 4,
    title: "Postponment of Sensitive Case ",
    linkName: "Constitutional Bench, Agni Sapkota, Purnimaya, TRC, transitional justice, पटक पटक निसु राखेर पन्छाइएको, full order",
    category: "Supreme Court",
    link: "https://www.onlinekhabar.com/2024/09/1545442/in-the-case-against-agni-sapkota-the-supreme-court-asked-the-police-for-the-investigation-file",
    dateCreated: "2025-02-19T08:32:00.971Z"
},
   {
    id: 3,
    title: "Portfolio of Justices (न्यायाधीशको मर्यादाक्रम)",
    linkName: "Constitutional Bench, Full Decision",
    category: "Supreme Court",
    link: "https://www.onlinekhabar.com/2025/01/1599123/supreme-court-order-chief-justice-and-judges-should-be-placed-in-the-order-of-precedence-after-the-prime-minister-and-ministers",
    dateCreated: "2025-02-19T08:26:01.211Z"
},
{
    id: 2,
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
