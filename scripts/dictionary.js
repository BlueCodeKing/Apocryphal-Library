// MENU

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

// SHOW MORE

function showToggle(moreInfo) {

    const info = moreInfo.querySelector(".moreInfoTitle");
    const hiddenInfo = moreInfo.querySelector(".hiddenInfo");
    const isHidden = getComputedStyle(hiddenInfo).display === "none";

    hiddenInfo.style.display = isHidden ? "block" : "none";
    info.classList.toggle("active", isHidden);
}