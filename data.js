// Sample data structure for links
const links = [
{
    id: 15,
    title: "legitimacy of oath",
    linkName: "oath, president, cj, gopal parajuli, factum valet, sb, sapana, shiva",
    category: "politico-legal case",
    link: "https://supremecourt.gov.np/web/assets/downloads//judgements/%E0%A4%86%E0%A4%A6%E0%A5%87%E0%A4%B6_%E0%A5%A8%E0%A5%A6%E0%A5%AD%E0%A5%AB_%E0%A5%A6%E0%A5%AC_%E0%A5%A6%E0%A5%AA.pdf",
    dateCreated: "2025-02-21T13:11:57.797Z"
},
{
    id: 13,
    title: "FPO & BPG case",
    linkName: "dissenting opinion, cb, share, income tax, shiva, anandamohan bhattarai, investment bank\nlegitimate expectation, restrospectivity,   circulars, merger and agquisition, bonus from capital fund",
    category: "tax",
    link: "https://supremecourt.gov.np/court/public/media/2025_02/9783ae4836fc057419a857a9d687cda9.pdf",
    dateCreated: "2025-02-21T13:03:55.237Z"
},
{
    id: 12,
    title: "bail-jail",
    linkName: "order attached, rabi lamichane, kathmandu district court, 081-c1-3905",
    category: "bail-jail",
    link: "https://www.onlinekhabar.com/2025/01/1605573/this-is-the-order-issued-by-the-kathmandu-district-court-to-release-ravi-on-bail-full-text-2",
    dateCreated: "2025-02-19T12:11:44.762Z"
},
{
    id: 11,
    title: "bail-jail",
    linkName: "order attached, rabi lamichanne, kaski district court, nitij rai, sahakari, cooperative, 081-c1-0435",
    category: "bail-jail",
    link: "https://www.onlinekhabar.com/2025/01/1602259/this-is-the-order-to-release-the-defendants-including-ravi-full-text",
    dateCreated: "2025-02-19T12:07:00.881Z"
},
{
    id: 10,
    title: "Government Formation Issue",
    linkName: "3-full bench, 080-WF-0056, kedar karki vs. higmat kumar karki, full decision attached, koshi province",
    category: "Province",
    link: "https://www.ratopati.com/story/458638/the-full-text-of-the-koshi-government-formation-controversy-has-been-released",
    dateCreated: "2025-02-19T11:51:42.949Z"
},
{
    id: 9,
    title: "bail-jail",
    linkName: "order attached, bail, rabi lamichanne, rupandehi district court, sahakari",
    category: "bail-jail",
    link: "https://www.onlinekhabar.com/2025/01/1612059/this-is-the-rupandehi-courts-order-demanding-rs-10-million-bail-from-ravi-full-text",
    dateCreated: "2025-02-19T11:37:27.429Z"
},
   {
    id: 8,
    title: "Constitutional Bench",
    linkName: "full court, sco, cb",
    category: "order ",
    link: "https://www.onlinekhabar.com/2025/01/1596880/explain-the-basis-and-reasons-for-the-full-courts-decision",
    dateCreated: "2025-02-19T10:36:06.985Z"
},
   {
    id: 7,
    title: "Review petition of government (फैसलाको पुनरावलोकन)",
    linkName: "20 meter standard from river, xamb, full petition original,",
    category: "petition",
    link: "https://www.onlinekhabar.com/2024/09/1540378/the-government-filed-a-review-petition-against-the-20-meter-decision",
    dateCreated: "2025-02-19T10:28:57.012Z"
},
   {
    id: 6,
    title: "Timely Justice",
    linkName: "5 Full Bench Decision, Not to exceed 6 months for bail-jail, dharauti, imprisonment, Banking Offence",
    category: "Supreme Court",
    link: "https://www.onlinekhabar.com/2024/09/1538306/those-who-cannot-pay-the-bail-shall-not-be-imprisoned-for-more-than-6-months",
    dateCreated: "2025-02-19T08:43:12.364Z"
},
   {
    id: 5,
    title: "Hearing Broadcasting (सार्वजनिक सरोकारको विषयको बहस प्रसारण)",
    linkName: "single bench order, show cause order, order against court administration, ",
    category: "Supreme Court",
    link: "https://www.onlinekhabar.com/2024/09/1540404/why-not-broadcast-live-on-public-issues",
    dateCreated: "2025-02-19T08:36:10.637Z"
},
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
