// navbar-loader.js - Improved logo positioning

// Create and inject the navbar as soon as possible - before DOMContentLoaded
(function() {
    // The navbar HTML content as a string with properly positioned logo
    const navbarHTML = `
    <header class="top-bar">
        <div class="container">
            <div class="logo">
                <a href="home.html">
                    <img src="../images/invertedlogo.png" alt="Last Common Ancestor Logo">
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="home.html" id="nav-home">Home</a></li>
                    <li><a href="shows.html" id="nav-shows">Shows</a></li>
                    <li><a href="gallery.html" id="nav-gallery">Gallery</a></li>
                    <li><a href="merch.html" id="nav-merch">Merch</a></li>
                    <li><a href="contact.html" id="nav-contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `;
    
    // Insert the navbar HTML immediately
    function injectNavbar() {
        const navbarContainer = document.getElementById('navbar-container');
        if (navbarContainer) {
            navbarContainer.innerHTML = navbarHTML;
        }
    }
    
    // Try to inject immediately if the element exists
    injectNavbar();
    
    // Also set up a fallback for DOMContentLoaded in case the element wasn't ready
    document.addEventListener('DOMContentLoaded', function() {
        // Insert the navbar HTML (if not already done)
        injectNavbar();
        
        // Highlight the current page
        highlightCurrentPage();
    });
    
    // Function to highlight the current page in the navbar
    function highlightCurrentPage() {
        // Get the current page filename
        const currentPage = window.location.pathname.split('/').pop();
        
        // Map of page filenames to their corresponding nav IDs
        const pageToNavId = {
            'home.html': 'nav-home',
            'shows.html': 'nav-shows',
            'gallery.html': 'nav-gallery',
            'merch.html': 'nav-merch',
            'contact.html': 'nav-contact',
            // Add default case for index or empty path
            '': 'nav-home',
            'index.html': 'nav-home'
        };
        
        // Get the nav ID for the current page
        const navId = pageToNavId[currentPage] || 'nav-home'; // Default to home if not found
        
        // Find the corresponding nav link
        const navLink = document.getElementById(navId);
        if (navLink) {
            // Add an 'active' class to highlight it
            navLink.classList.add('active');
        }
    }
})();