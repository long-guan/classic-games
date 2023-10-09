const logo = document.querySelector('.logo-title');
const homeBtn = document.querySelector('.home-btn');
const about = document.querySelector('.about');

// Home button
homeBtn.addEventListener('click', ()=> {
    // used for GitHub pages
    if (window.location.href.includes("index.html") === false) {
        if (window.location.href.includes("long")) {
            window.location = "https://long-guan.github.io/classic-games/index.html";
        // used locally
        } else {
            window.location = "/index.html";
        }
    }
});

// Logo and Title
logo.addEventListener('click', ()=> {
    // used for GitHub pages
    if (window.location.href.includes("index.html") === false) {
        if (window.location.href.includes("long")) {
            window.location = "https://long-guan.github.io/classic-games/index.html";
        // used locally
        } else {
            window.location = "/index.html";
        }
    }
});

// About
about.addEventListener('click', () => {
    // used for GitHub pages
    if (window.location.href.includes("index_about.html") === false) {
        if (window.location.href.includes("long")) {
            window.location = "https://long-guan.github.io/classic-games/about-page/index_about.html";
        // used locally
        } else {
            window.location = "/about-page/index_about.html";
        }
    }
})
