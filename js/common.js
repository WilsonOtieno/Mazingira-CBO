/*====== // Load header and footer using fetch API
fetch('header.html')
    .then(response => response.text())
    .then(html => document.getElementById('header').innerHTML = html);

fetch('footer.html')
    .then(response => response.text())
    .then(html => document.getElementById('footer').innerHTML = html);
=====*/

// Load header and footer using fetch API with callbacks
function loadHTML(url, elementId, callback) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
            if (callback) callback();
        });
}

loadHTML('header.html', 'header', function() {
    // Initialize navLinks only after header is loaded
    initializeNavLinks();
});

loadHTML('footer.html', 'footer');

// Initialize navLinks and attach event listeners
function initializeNavLinks() {
    var navLinks = document.getElementById("navLinks");

    window.showMenu = function() {
        navLinks.style.right = "0";
    }

    window.hideMenu = function() {
        navLinks.style.right = "-250px";
    }

    // Attach event listeners to the menu buttons if needed
    document.querySelector('.fa fa-bars').onclick = showMenu;
    document.querySelector('.fa fa-times').onclick = hideMenu;
}
