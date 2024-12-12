const heroImages = document.querySelectorAll('.hero img');
let currentHeroIndex = 0;

function showHeroImage(index) {
    heroImages.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextHeroImage() {
    currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
    showHeroImage(currentHeroIndex);
}

function prevHeroImage() {
    currentHeroIndex = (currentHeroIndex - 1 + heroImages.length) % heroImages.length;
    showHeroImage(currentHeroIndex);
}

document.getElementById('nextHeroButton').addEventListener('click', nextHeroImage);
document.getElementById('prevHeroButton').addEventListener('click', prevHeroImage);

setInterval(nextHeroImage, 5000);

const logos = document.querySelectorAll('.logo-slider img');
const dots = document.querySelectorAll('.dot');
let currentLogoIndex = 0;

function showLogo(index) {
    logos.forEach((logo, i) => {
        logo.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextLogo() {
    currentLogoIndex = (currentLogoIndex + 1) % logos.length;
    showLogo(currentLogoIndex);
}

function prevLogo() {
    currentLogoIndex = (currentLogoIndex - 1 + logos.length) % logos.length;
    showLogo(currentLogoIndex);
}

document.getElementById('nextLogoButton').addEventListener('click', nextLogo);
document.getElementById('prevLogoButton').addEventListener('click', prevLogo);

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        currentLogoIndex = index;
        showLogo(currentLogoIndex);
    });
});

setInterval(nextLogo, 5000);
