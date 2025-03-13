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
    
    // The footer HTML content as a string - band-focused with social links
    const footerHTML = `
    <footer class="universal-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <img src="../images/logo.png" alt="Last Common Ancestor Logo">
                </div>
                
                <div class="social-links">
                    <a href="https://www.instagram.com/last.common.ancestor/" target="_blank" class="social-icon" aria-label="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/@Last.common.ancestor" target="_blank" class="social-icon" aria-label="YouTube">
                        <i class="fab fa-youtube"></i>
                    </a>
                    <a href="https://soundcloud.com/last-common-ancestor-166604331" target="_blank" class="social-icon" aria-label="SoundCloud">
                        <i class="fab fa-soundcloud"></i>
                    </a>
                </div>
                
                <div class="footer-contact">
                    <p class="contact-email">lastcommonancestor2024@gmail.com</p>
                    <p class="contact-location">Columbia, Missouri</p>
                </div>

                <div class="newsletter-signup">
                    <p>Join our mailing list</p>
                    <form class="footer-form">
                        <input type="email" placeholder="Your email" required>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                
                <p class="copyright">&copy; 2025 Last Common Ancestor. All rights reserved.</p>
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