// Function to parse date from show card format (e.g., MAR 15 2025)
function parseShowDate(month, day, year) {
    const monthMap = {
        'JAN': 0, 'FEB': 1, 'MAR': 2, 'APR': 3, 'MAY': 4, 'JUN': 5,
        'JUL': 6, 'AUG': 7, 'SEP': 8, 'OCT': 9, 'NOV': 10, 'DEC': 11
    };
    
    return new Date(parseInt(year), monthMap[month.toUpperCase()], parseInt(day));
}

// Function to check if a date is within the next two weeks
function isWithinTwoWeeks(date) {
    const now = new Date();
    
    // Calculate two weeks from today
    const twoWeeksFromNow = new Date();
    twoWeeksFromNow.setDate(now.getDate() + 14);
    
    // Check if the show date is between today and two weeks from now
    return date >= now && date <= twoWeeksFromNow;
}

// Function to create a show card element for the home page
function createShowCard(show) {
    const showCard = document.createElement('div');
    showCard.className = 'home-show-card';
    
    // Format date as a readable string
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const dateString = show.date.toLocaleDateString('en-US', options);
    
    showCard.innerHTML = `
        <div class="show-date-home">${dateString}</div>
        <div class="show-info-home">
            <h3>${show.venue}</h3>
            <p>${show.location}</p>
        </div>
        <a href="shows.html" class="show-link-btn">Details</a>
    `;
    
    return showCard;
}

// Function to fetch shows data from shows.html
async function fetchShowsData() {
    try {
        const response = await fetch('shows.html');
        const text = await response.text();
        
        // Parse the HTML to extract shows data
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        
        // Extract show data from the HTML structure
        const showCards = doc.querySelectorAll('.show-card');
        const shows = Array.from(showCards).map(card => {
            const month = card.querySelector('.show-date .month').textContent.trim();
            const day = card.querySelector('.show-date .day').textContent.trim();
            const year = card.querySelector('.show-date .year').textContent.trim();
            const venue = card.querySelector('.show-info h2').textContent.trim();
            const location = card.querySelector('.show-info .location').textContent.trim();
            
            return { 
                date: parseShowDate(month, day, year), 
                venue, 
                location 
            };
        });
        
        return shows;
    } catch (error) {
        console.error('Error fetching shows data:', error);
        return [];
    }
}

// Main function to load upcoming shows on the home page
async function loadUpcomingShows() {
    // Only run on the home page
    if (!document.getElementById('upcoming-shows-section')) {
        return;
    }
    
    // Fetch shows data
    const shows = await fetchShowsData();
    
    // Filter shows to only include those within the next two weeks
    const upcomingShows = shows.filter(show => isWithinTwoWeeks(show.date));

    // Get the container for upcoming shows
    const upcomingShowsContainer = document.getElementById('upcoming-shows-list');
    if (!upcomingShowsContainer) {
        console.error('Could not find upcoming shows container');
        return;
    }
    
    // Clear any existing content
    upcomingShowsContainer.innerHTML = '';
    
    if (upcomingShows.length === 0) {
        // If no upcoming shows, display a message
        const noShowsMessage = document.createElement('p');
        noShowsMessage.textContent = 'No upcoming shows in the next two weeks. Check our full schedule!';
        upcomingShowsContainer.appendChild(noShowsMessage);
    } else {
        // Add each upcoming show to the container
        upcomingShows.forEach(show => {
            const showCard = createShowCard(show);
            upcomingShowsContainer.appendChild(showCard);
        });
    }
}

// Load upcoming shows when the DOM is ready
document.addEventListener('DOMContentLoaded', loadUpcomingShows);