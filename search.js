// Search and filter functionality
function filterLinks(searchTerm, category) {
    return links.filter(link => {
        const matchesSearch = link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            link.link.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = category === "" || link.category === category;
        return matchesSearch && matchesCategory;
    });
}

// Update category filter options
function updateCategoryFilter() {
    const categoryFilter = document.getElementById('categoryFilter');
    const categories = [...new Set(links.map(link => link.category))];
    
    // Clear existing options except "All Categories"
    categoryFilter.innerHTML = '<option value="">All Categories</option>';
    
    // Add category options
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// Advanced search functionality
let currentSearchMatches = [];
let currentMatchIndex = -1;

function searchLinks(query) {
    const searchQuery = query.toLowerCase();
    currentSearchMatches = [];
    
    if (!searchQuery) {
        displayLinks(links);
        updateSearchCount();
        return;
    }

    const matchedLinks = links.filter(link => {
        const searchableText = [
            '#' + link.id,
            link.title,
            link.linkName,
            link.category,
            link.link,
            new Date(link.dateCreated).toLocaleString()
        ].join(' ').toLowerCase();

        return searchableText.includes(searchQuery);
    });

    displayLinks(matchedLinks);
    highlightSearchMatches(searchQuery);
    updateSearchCount();
}

function highlightSearchMatches(query) {
    const elements = document.querySelectorAll('.link-card');
    currentSearchMatches = [];

    elements.forEach(card => {
        // Select all text elements within the card
        const textElements = card.querySelectorAll('h3, .link-name, .category, .date, a, .link-id, .link-url');
        let hasMatch = false;

        textElements.forEach(element => {
            const originalText = element.textContent;
            const lowerText = originalText.toLowerCase();
            const queryRegex = new RegExp(query.toLowerCase(), 'gi'); // 'gi' for global and case-insensitive
            
            if (lowerText.includes(query.toLowerCase())) {
                hasMatch = true;
                // Preserve the original case of the matched text
                const highlightedText = originalText.replace(queryRegex, match => 
                    `<span class="search-highlight">${match}</span>`
                );
                element.innerHTML = highlightedText;
                
                // Add each match position to the matches array
                const matches = [...lowerText.matchAll(queryRegex)];
                matches.forEach(() => {
                    currentSearchMatches.push({
                        card: card,
                        element: element
                    });
                });
            }
        });

        if (hasMatch) {
            card.dataset.hasMatch = 'true';
        } else {
            card.dataset.hasMatch = 'false';
        }
    });

    // Reset match index
    currentMatchIndex = currentSearchMatches.length > 0 ? 0 : -1;
    updateActiveMatch();
}

function updateSearchCount() {
    const countElement = document.getElementById('searchCount');
    const total = currentSearchMatches.length;
    const current = total > 0 ? currentMatchIndex + 1 : 0;
    countElement.textContent = `Match: ${current}/${total}`;

    // Update navigation buttons
    const prevBtn = document.getElementById('prevMatch');
    const nextBtn = document.getElementById('nextMatch');
    prevBtn.disabled = total === 0 || currentMatchIndex <= 0;
    nextBtn.disabled = total === 0 || currentMatchIndex >= total - 1;
}

function updateActiveMatch() {
    // Remove active class from all highlights
    const matches = document.querySelectorAll('.search-highlight');
    matches.forEach(match => match.classList.remove('active'));

    if (currentMatchIndex >= 0 && currentSearchMatches.length > 0) {
        const currentMatch = currentSearchMatches[currentMatchIndex];
        const highlight = currentMatch.element.querySelector('.search-highlight');
        
        if (highlight) {
            highlight.classList.add('active');
            // Smooth scroll to the active match
            currentMatch.card.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }

    // Update navigation buttons
    const prevBtn = document.getElementById('prevMatch');
    const nextBtn = document.getElementById('nextMatch');
    
    prevBtn.disabled = currentMatchIndex <= 0;
    nextBtn.disabled = currentMatchIndex === -1 || currentMatchIndex >= currentSearchMatches.length - 1;
    
    // Update search count
    updateSearchCount();
}

function nextMatch() {
    if (currentMatchIndex < currentSearchMatches.length - 1) {
        currentMatchIndex++;
        updateActiveMatch();
    }
}

function prevMatch() {
    if (currentMatchIndex > 0) {
        currentMatchIndex--;
        updateActiveMatch();
    }
}

function setupSearchBox() {
    const searchInput = document.getElementById('searchInput');
    const prevBtn = document.getElementById('prevMatch');
    const nextBtn = document.getElementById('nextMatch');
    const voiceSearchBtn = document.getElementById('voiceSearchBtn');

    searchInput.addEventListener('input', (e) => {
        searchLinks(e.target.value);
    });

    prevBtn.addEventListener('click', prevMatch);
    nextBtn.addEventListener('click', nextMatch);

    // Voice search setup
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            searchInput.value = text;
            searchLinks(text);
        };

        voiceSearchBtn.addEventListener('click', () => {
            recognition.start();
        });
    } else {
        voiceSearchBtn.style.display = 'none';
    }
}

// Event listeners
document.getElementById('categoryFilter').addEventListener('change', function(e) {
    const category = e.target.value;
    const searchTerm = document.getElementById('searchInput').value;
    displayLinks(filterLinks(searchTerm, category));
});

// Initialize search box
setupSearchBox();
