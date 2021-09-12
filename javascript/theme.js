const iconEl = document.getElementById('icon');

function toggleTheme(isTrue) {
    isTrue ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
    isTrue ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
    isTrue
        ? iconEl.classList.replace('bi-brightness-high-fill', 'bi-moon-stars-fill')
        : iconEl.classList.replace('bi-moon-stars-fill', 'bi-brightness-high-fill');
    isTrue ? document.getElementById('table').classList.remove('table-striped') : document.getElementById('table').classList.add('table-striped');
}

iconEl.addEventListener('click', function () {
    currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        if (currentTheme == 'light') {
            toggleTheme(true);
        } else {
            toggleTheme(false);
        }
    }
});

let currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    if (currentTheme == 'light') {
        toggleTheme(false);
    } else {
        toggleTheme(true);
    }
} else {
    toggleTheme(true);
}
