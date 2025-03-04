// upcoming-shows.js

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

// Main function to load upcoming shows on the home page
function loadUpcomingShows() {
    // Only run on the home page
    if (!document.getElementById('upcoming-shows-section')) {
        return;
    }
    
    // Shows data - you would normally fetch this from an API or another source
    // For now, we'll hard-code the shows from shows.html
    const shows = [
        { 
            venue: "The Underground Venue",
            location: "New York, NY",
            date: parseShowDate("MAR", "15", "2025"),
            info: "With special guests The Openers",
            status: "available"
        },
        { 
            venue: "Music Hall",
            location: "Boston, MA",
            date: parseShowDate("MAR", "22", "2025"),
            info: "Album release party",
            status: "available"
        },
        { 
            venue: "The Echo",
            location: "Los Angeles, CA",
            date: parseShowDate("APR", "05", "2025"),
            info: "21+ show",
            status: "limited"
        },
        { 
            venue: "The Fillmore",
            location: "San Francisco, CA",
            date: parseShowDate("APR", "12", "2025"),
            info: "All ages welcome",
            status: "limited"
        },
        { 
            venue: "Metro",
            location: "Chicago, IL",
            date: parseShowDate("APR", "20", "2025"),
            info: "With special guests The Supporters",
            status: "soldout"
        },
        { 
            venue: "9:30 Club",
            location: "Washington, DC",
            date: parseShowDate("MAY", "02", "2025"),
            info: "Doors open at 7PM",
            status: "available"
        }
    ];
    
    // For testing purposes: create a show that's within the next two weeks
    // This simulates a show that would appear within our date range
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);
    
    const testShow = {
        venue: "The Local Venue",
        location: "Columbia, MO",
        date: nextWeek,
        info: "Hometown show",
        status: "available"
    };
    
    shows.push(testShow);
    
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