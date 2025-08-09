// Mobile Menu Toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navbar').classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        document.querySelector('.hamburger').classList.remove('active');
        document.querySelector('.navbar').classList.remove('active');
    });
});

// Form Submission
document.querySelector('.reservation-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your reservation! We will contact you shortly.');
    this.reset();
});