// Home button
document.querySelector('.home-btn').addEventListener('click', ()=> {
    if (window.location.href.includes("long")) {
        window.location = "https://long-guan.github.io/classic-games/index.html";
    } else {
        window.location = "/index.html";
    }
});

// Logo and Title
document.querySelector('.logo-title').addEventListener('click', ()=> {
    if (window.location.href.includes("long")) {
        window.location = "https://long-guan.github.io/classic-games/index.html";
    } else {
        window.location = "/index.html";
    }
});

// About
document.querySelector('.about').addEventListener('click', () => {
    if (window.location.href.includes("long")) {
        window.location = "https://long-guan.github.io/classic-games/about/index_about.html";
    } else {
        window.location = "/about-page/index_about.html";
    }
})
