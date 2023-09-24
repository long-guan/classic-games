// Home button
document.querySelector('.home-btn').addEventListener('click', ()=> {
    // used for GitHub pages
    if (window.location.href.includes("long")) {
        window.location = "https://long-guan.github.io/classic-games/index.html";
    // used locally
    } else {
        window.location = "/index.html";
    }
});

// Logo and Title
document.querySelector('.logo-title').addEventListener('click', ()=> {
    // used for GitHub pages
    if (window.location.href.includes("long")) {
        window.location = "https://long-guan.github.io/classic-games/index.html";
    // used locally
    } else {
        window.location = "/index.html";
    }
});

// About
document.querySelector('.about').addEventListener('click', () => {
    // used for GitHub pages
    if (window.location.href.includes("long")) {
        window.location = "https://long-guan.github.io/classic-games/about/index_about.html";
    // used locally
    } else {
        window.location = "/about-page/index_about.html";
    }
})
