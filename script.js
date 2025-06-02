document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            document.querySelector('.nav-menu').classList.toggle('open');
            this.classList.toggle('active');
        });
    }

    // Tab navigation
    const tabLinks = document.querySelectorAll('.tab-link');
    if (tabLinks.length > 0) {
        tabLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all tabs and content
                document.querySelectorAll('.tab-link').forEach(el => el.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('show'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Show corresponding content
                const tabId = this.getAttribute('data-tab');
                if (tabId) {
                    document.getElementById(tabId).classList.add('show');
                }
            });
        });
    }

    // Booking form handling
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const responseElement = document.getElementById('booking-response');
            if (responseElement) {
                responseElement.textContent = "Submitting your request...";
                responseElement.style.color = "#007bff";
                
                // Simulate form submission
                setTimeout(() => {
                    responseElement.textContent = "Thank you! Your booking request has been received.";
                    responseElement.style.color = "#28a745";
                    this.reset();
                }, 1500);
            }
        });
    }

    // Social media dropdown
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', function() {
            document.querySelector('.dropdown-content').classList.toggle('active');
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
});


