const body = document.querySelector("body");
const nav = document.querySelector("nav");
const sidebarOpen = document.querySelector(".sidebarOpen");

// js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
    nav.classList.toggle("active");
});

body.addEventListener("click", e => {
    let clickedElm = e.target;
    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
        nav.classList.remove("active");
    }
});

