document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navbarButton = document.getElementById('navbarButton');

    hamburgerMenu.addEventListener('click', function() {
        if (navbarButton.style.display === 'flex') {
            navbarButton.style.display = 'none';
        } else {
            navbarButton.style.display = 'flex';
        }
    });
});

const featureBoxes = document.querySelectorAll(".feature-box");

featureBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => { 
        featureBoxes.forEach(element => element.classList.remove("active"));
        box.classList.add("active");
    });
});

const faqs = document.querySelectorAll(".faqs")

faqs.forEach(faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("active");
    })
})

const buyPackageBasic = document.getElementById('buyPackageBasic');
const buyPackageAdvanced= document.getElementById('buyPackageAdvanced');
const buyPackageMaster = document.getElementById('buyPackageMaster');
buyPackageBasic.addEventListener('click', () => {
    window.location.href = '/html/subscription.html'; 
});

buyPackageAdvanced.addEventListener('click', () => {
    window.location.href = '/html/subscription.html'; 
});

buyPackageMaster.addEventListener('click', () => {
    window.location.href = '/html/subscription.html'; 
});