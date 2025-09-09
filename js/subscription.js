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

document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('.select');
    const menu = document.querySelector('.menu');
    const options = document.querySelectorAll('.menu li');
    const selected = document.querySelector('.selected');
    const packages = document.querySelectorAll('.package');

    select.addEventListener('click', () => {
        menu.classList.toggle('menu-open');
        const caret = document.querySelector('.caret');
        caret.classList.toggle('active');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.textContent = option.textContent;
            menu.classList.remove('menu-open');
            const caret = document.querySelector('.caret');
            caret.classList.remove('active');
            options.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');

            const selectedLevel = option.textContent.toLowerCase().replace(' ', '-');
            packages.forEach(pkg => {
                pkg.style.display = 'none';
                if (pkg.id.includes(selectedLevel)) {
                    pkg.style.display = 'block';
                }
            });
        });
    });

    options[0].click();
});

const subscribeButton = document.querySelectorAll('.buy-package');

subscribeButton.forEach(button => {
    button.addEventListener('click', () => {
        button.textContent = 'Subscribed';
        button.disabled = true; 
        button.style.backgroundColor = 'orange';
        alert('Thanks for subscribing!');
    })    
})