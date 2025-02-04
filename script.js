// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Particle.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#64ffda'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#64ffda',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// Typing Animation
const roles = ['Web Developer', 'System Builder', 'Graphic Designer', 'ICT Trainer', 'Video Editor'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 200;
let erasingDelay = 100;
let newTextDelay = 2000;

function typeText() {
    const currentRole = roles[roleIndex];
    const typingElement = document.querySelector('.typing-text');
    
    if (isDeleting) {
        charIndex--;
        typingDelay = erasingDelay;
    } else {
        charIndex++;
        typingDelay = 200;
    }
    
    typingElement.textContent = currentRole.substring(0, charIndex);
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingDelay = newTextDelay;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }
    
    setTimeout(typeText, typingDelay);
}

// Project Data
const projects = [
    {
        title: "E-Learning Platform",
        description: "A comprehensive learning management system with interactive courses and real-time progress tracking.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Web Development",
        link: "#"
    },
    {
        title: "Corporate Brand Identity",
        description: "Modern brand identity design including logo, business cards, and complete marketing collateral.",
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Graphic Design",
        link: "#"
    },
    {
        title: "Network Infrastructure",
        description: "Enterprise-level network infrastructure with advanced security protocols and monitoring.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "System Building",
        link: "#"
    },
    {
        title: "Video Production",
        description: "Professional video editing and post-production for corporate training materials.",
        image: "https://images.unsplash.com/photo-1492115264205-1c4c12c98533?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Video Editing",
        link: "#"
    },
    {
        title: "Tech Training Program",
        description: "Comprehensive ICT training curriculum development for corporate clients.",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "ICT Training",
        link: "#"
    },
    {
        title: "E-Commerce Platform",
        description: "Full-featured online store with inventory management and payment integration.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "Web Development",
        link: "#"
    }
];

// Load Projects
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projects.forEach((project, index) => {
        const projectCard = `
            <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="project-card">
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}">
                        <div class="project-overlay">
                            <a href="${project.link}" class="custom-btn">View Project</a>
                        </div>
                    </div>
                    <div class="card-body p-4">
                        <span class="badge bg-primary mb-2">${project.category}</span>
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                    </div>
                </div>
            </div>
        `;
        projectsGrid.innerHTML += projectCard;
    });
}

// Theme Switcher
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const sunIcon = themeToggle.querySelector('.fa-sun');
    const moonIcon = themeToggle.querySelector('.fa-moon');
    sunIcon.style.display = newTheme === 'dark' ? 'block' : 'none';
    moonIcon.style.display = newTheme === 'dark' ? 'none' : 'block';
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scrolling
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Form Submission
// Check if the URL has the 'submitted' parameter
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('submitted')) {
    alert('Thank you for your message! I will get back to you soon.');
}
// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Load projects
    loadProjects();
    
    // Start typing animation
    typeText();
    
    // Set initial theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    
    // Set initial theme icon
    const sunIcon = themeToggle.querySelector('.fa-sun');
    const moonIcon = themeToggle.querySelector('.fa-moon');
    sunIcon.style.display = savedTheme === 'dark' ? 'block' : 'none';
    moonIcon.style.display = savedTheme === 'dark' ? 'none' : 'block';
});