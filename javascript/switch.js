const checkbox = document.querySelector('input[name=checkbox]');

function toggleTheme(isTrue) {
    isTrue ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
    isTrue ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
    isTrue ? document.getElementById('table').classList.remove('table-striped') : document.getElementById('table').classList.add('table-striped');
}

checkbox.addEventListener('change', function () {
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
