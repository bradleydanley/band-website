// footer-loader.js - Add this to make the footer universal across pages

document.addEventListener('DOMContentLoaded', function() {
    // Check if FontAwesome is already loaded
    if (!document.querySelector('link[href*="font-awesome"]')) {
        // Add FontAwesome if not already present
        const fontAwesomeLink = document.createElement('link');
        fontAwesomeLink.rel = 'stylesheet';
        fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
        document.head.appendChild(fontAwesomeLink);
    }
    
    // The footer HTML content as a string
    const footerHTML = `
    <footer class="universal-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <img src="../images/logo.png" alt="Last Common Ancestor Logo">
                </div>
                
                <div class="footer-links">
                    <a href="home.html">Home</a>
                    <a href="shows.html">Shows</a>
                    <a href="gallery.html">Gallery</a>
                    <a href="merch.html">Merch</a>
                    <a href="contact.html">Contact</a>
                </div>
                
                <div class="social-links">
                    <a href="https://instagram.com/" target="_blank" class="social-icon" aria-label="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://youtube.com/" target="_blank" class="social-icon" aria-label="YouTube">
                        <i class="fab fa-youtube"></i>
                    </a>
                    <a href="https://spotify.com/" target="_blank" class="social-icon" aria-label="Spotify">
                        <i class="fab fa-spotify"></i>
                    </a>
                    <a href="https://facebook.com/" target="_blank" class="social-icon" aria-label="Facebook">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </div>
                
                <p class="copyright">&copy; 2025 Last Common Ancestor. All rights reserved.</p>
                
                <p class="credits">Website by Danny and Bradley</p>
            </div>
        </div>
    </footer>
    `;
    
    // Get the footer container or create one if it doesn't exist
    let footerContainer = document.getElementById('footer-container');
    
    // If there isn't a dedicated container, replace any existing footer
    if (!footerContainer) {
        const existingFooter = document.querySelector('footer');
        if (existingFooter) {
            existingFooter.outerHTML = footerHTML;
        } else {
            // If no footer exists, append to body
            document.body.insertAdjacentHTML('beforeend', footerHTML);
        }
    } else {
        // Insert into dedicated container
        footerContainer.innerHTML = footerHTML;
    }
});