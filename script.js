document.addEventListener('DOMContentLoaded', () => {
    // Navbar
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';

    const navbarLogo = document.createElement('a');
    navbarLogo.href = '#';
    navbarLogo.className = 'navbar-logo';
    navbarLogo.innerHTML = 'RE.TE.';

    const navbarNav = document.createElement('div');
    navbarNav.className = 'navbar-nav';
    navbarNav.innerHTML = `
        <a href="#home">Home</a>
        <a href="#dashboard">Current Waste</a>
        <a href="#informations">About us</a>
    `;

    const navbarExtra = document.createElement('div');
    navbarExtra.className = 'navbar-extra';
    navbarExtra.innerHTML = `
        <a href="#" id="bell"><i data-feather="bell"></i></a>
        <a href="#" id="hamburger-menu"><i data-feather="menu"></i></a>
    `;

    navbar.appendChild(navbarLogo);
    navbar.appendChild(navbarNav);
    navbar.appendChild(navbarExtra);
    document.body.appendChild(navbar);

    // Hero Section
    const heroSection = document.createElement('section');
    heroSection.className = 'hero';
    heroSection.id = 'home';
    heroSection.innerHTML = `
        <main class="content">
            <h1>Turning Trash into Treasure.</h1>
        </main>
    `;
    document.body.appendChild(heroSection);

    // Dashboard Section
    const dashboardSection = document.createElement('section');
    dashboardSection.id = 'dashboard';
    dashboardSection.className = 'dashboard';
    dashboardSection.innerHTML = `
        <h2>Current Waste</h2>
        <div class="row">
            <div class="dashboard-card">
                <h3 class="dashboard-card-title">Waste last week</h3>
                <p class="dashboard-card-value">12098 kg</p>
            </div>
            <div class="dashboard-card">
                <h3 class="dashboard-card-title">Waste next week</h3>
                <p class="dashboard-card-value">15678 kg</p>
            </div>
            <div class="dashboard-card">
                <h3 class="dashboard-card-title">Total</h3>
                <p class="dashboard-card-value">27776 kg</p>
            </div>
        </div>
    `;
    document.body.appendChild(dashboardSection);

    // Informations Section (About us)
    const informationsSection = document.createElement('section');
    informationsSection.id = 'informations';
    informationsSection.innerHTML = `
        <h2>About Us</h2>
        <p>RE.TE. è leader nel settore dello smaltimento responsabile di rifiuti elettronici e tecnologici. Fondata nel 2005, l’azienda si impegna a ridurre l’impatto ambientale attraverso processi avanzati di riciclo e recupero. Gestiamo una vasta gamma di materiali, inclusi computer, telefoni cellulari, elettrodomestici e componenti elettronici. Il nostro obiettivo è trasformare i rifiuti in risorse preziose, promuovendo un futuro sostenibile e una economia circolare.</p>
    `;
    document.body.appendChild(informationsSection);

    // Footer
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="socials">
            <a href="#"><i data-feather="instagram"></i></a>
            <a href="#"><i data-feather="twitter"></i></a>
            <a href="#"><i data-feather="facebook"></i></a>
        </div>
        <div class="links">
            <a href="#home">Home</a>
            <a href="#dashboard">Current Waste</a>
            <a href="#informations">About us</a>
        </div>
        <div class="credit">
            <p>Created by <a href="">Tiube</a>. | &copy; 2024</p>
        </div>
    `;
    document.body.appendChild(footer);

    // Smooth scrolling behavior for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize feather icons
    feather.replace();
});