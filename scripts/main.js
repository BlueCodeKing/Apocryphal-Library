function openMenu() {
    document.getElementById("navMenu").classList.add("open");
}

function closeMenu(immediate = false) {
    const navMenu = document.getElementById("navMenu");
    if (immediate) {
        navMenu.style.transition = "none";
    }
    navMenu.classList.remove("open");
    if (immediate) {
        navMenu.offsetHeight;
        navMenu.style.removeProperty("transition");
    }
}

window.addEventListener("resize", () => closeMenu(true));