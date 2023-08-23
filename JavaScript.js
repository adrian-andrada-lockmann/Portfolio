function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.querySelector('li a[href="#about"]');
    const skillsLink = document.querySelector('li a[href="#skills"]');
    const projectsLink = document.querySelector('li a[href="#projects"]');
    const contactLink = document.querySelector('a[href="#contact"]');

    if (aboutLink) {
        aboutLink.addEventListener('click', (event) => {
            event.preventDefault();
            smoothScrollTo('about');
        });
    }

    if (skillsLink) {
        skillsLink.addEventListener('click', (event) => {
            event.preventDefault();
            smoothScrollTo('skills');
        });
    }

    if (projectsLink) {
        projectsLink.addEventListener('click', (event) => {
            event.preventDefault();
            smoothScrollTo('projects');
        });
    }
    if (contactLink) {
        contactLink.addEventListener('click', (event) => {
            event.preventDefault();
            smoothScrollTo('footer');
        });
    }
});


