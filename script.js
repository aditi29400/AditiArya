document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer options
    let observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    // Function to handle animation for sliding items
    function animateOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }

    // Create Intersection Observer for sections
    let slideInObservers = [];

    document.querySelectorAll('.slide-in-left, .slide-in-right').forEach(element => {
        let observer = new IntersectionObserver(animateOnScroll, observerOptions);
        observer.observe(element);
        slideInObservers.push(observer);
    });

    // Animation for certification items on scroll
    let certificationItems = document.querySelectorAll('.certification-item');

    certificationItems.forEach(item => {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.opacity = '1';
                }
            });
        }, { threshold: 0.5 });

        observer.observe(item);
    });

    // Animation for About section (text and photo)
    let aboutContainer = document.querySelector('.about-container');
    let aboutText = document.querySelector('.about-container p');
    let aboutPhoto = document.querySelector('.about-container img');

    let aboutObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutText.classList.add('slide-in-left');
                aboutPhoto.classList.add('slide-in-right');
            } else {
                aboutText.classList.remove('slide-in-left');
                aboutPhoto.classList.remove('slide-in-right');
            }
        });
    }, { threshold: 0.5 });

    aboutObserver.observe(aboutContainer);

    // Animation for Skills section (sliding items on every scroll)
    let skillsList = document.querySelector('.skills-list');
    let skillsItems = document.querySelectorAll('.skill-item');

    let skillsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillsItems.forEach((skill, index) => {
                    setTimeout(() => {
                        skill.classList.add('slide-in-left');
                    }, index * 100); // Adjust delay if needed
                });
            } else {
                skillsItems.forEach(skill => {
                    skill.classList.remove('slide-in-left');
                });
            }
        });
    }, { threshold: 0.3 });

    skillsObserver.observe(skillsList);
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:aditiarya294@gmail.com?subject=Contact from ${name}&body=${message} (Email: ${email})`;
    window.location.href = mailtoLink;
});
