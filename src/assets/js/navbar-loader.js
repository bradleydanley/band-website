// navbar-loader.js - Updated to include CSS link injection

document.addEventListener('DOMContentLoaded', function() {
    // First, ensure the CSS is loaded
    if (!document.getElementById('navbar-styles')) {
        const cssLink = document.createElement('link');
        cssLink.id = 'navbar-styles';
        cssLink.rel = 'stylesheet';
        cssLink.href = '../assets/css/navbar-styles.css';
        document.head.appendChild(cssLink);
    }
    
    // The navbar HTML content as a string
    const navbarHTML = `
    <header class="top-bar">
        <div class="container">
            <div class="logo">
                <img src="../images/logo.png" alt="Band Logo">
            </div>
            <nav>
                <ul>
                    <li><a href="home.html" id="nav-home">Home</a></li>
                    <li><a href="shows.html" id="nav-shows">Shows</a></li>
                    <li><a href="contact.html" id="nav-contact">Contact</a></li>
                    <li><a href="merch.html" id="nav-merch">Merch</a></li>
                    <li><a href="gallery.html" id="nav-shows">Gallery</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `;
    
    // Insert the navbar HTML into the navbar container
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
        
        // Highlight the current page
        highlightCurrentPage();
    }
    
    // Function to highlight the current page in the navbar
    function highlightCurrentPage() {
        // Get the current page filename
        const currentPage = window.location.pathname.split('/').pop();
        
        // Map of page filenames to their corresponding nav IDs
        const pageToNavId = {
            'home.html': 'nav-home',
            'shows.html': 'nav-shows',
            'contact.html': 'nav-contact',
            'merch.html': 'nav-merch',
            'gallery.html': 'nav-gallery',
        };
        
        // Get the nav ID for the current page
        const navId = pageToNavId[currentPage];
        
        if (navId) {
            // Find the corresponding nav link
            const navLink = document.getElementById(navId);
            if (navLink) {
                // Add an 'active' class to highlight it
                navLink.classList.add('active');
            }
        }
    }
});