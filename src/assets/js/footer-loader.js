// footer-loader.js - Simplified version without mailing list

document.addEventListener('DOMContentLoaded', function() {
    // Check if FontAwesome is already loaded
    if (!document.querySelector('link[href*="font-awesome"]')) {
        // Add FontAwesome if not already present
        const fontAwesomeLink = document.createElement('link');
        fontAwesomeLink.rel = 'stylesheet';
        fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
        document.head.appendChild(fontAwesomeLink);
    }
    
    // The footer HTML content - without newsletter signup
    const footerHTML = `
    <footer class="universal-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <a href="home.html">
                        <img src="../images/logo.png" alt="Last Common Ancestor Logo">
                    </a>
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
                
                <p class="copyright">&copy; 2025 Last Common Ancestor. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;
    
    // Get the footer container
    const footerContainer = document.getElementById('footer-container');
    
    if (footerContainer) {
        // Insert into dedicated container
        footerContainer.innerHTML = footerHTML;
    } else {
        console.warn('Footer container (#footer-container) not found on page');
    }
    
    // Remove any duplicate footers that might exist
    const footers = document.querySelectorAll('footer:not(.universal-footer)');
    footers.forEach(footer => {
        if (footer && footer.parentNode && !footer.classList.contains('universal-footer')) {
            footer.parentNode.removeChild(footer);
        }
    });
});