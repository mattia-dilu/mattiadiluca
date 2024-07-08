const nightModeBtn = document.getElementById('night-mode-btn');

nightModeBtn.addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('night-mode');
    const header = document.querySelector('.top-nav');
    header.classList.toggle('night-mode');
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.classList.toggle('night-mode-link');
    });
});
