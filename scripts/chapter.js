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

function showToggle() {

    const Info = document.getElementById("moreInfo");

    if (Info.innerHTML === "More Info") {
        document.getElementById("moreInfo").innerHTML = ("Less Info");
        document.getElementById("hiddenInfo").style.display = ("block");
        document.getElementById("moreInfo").style.backgroundColor = ("dodgerBlue");
    } else {
        document.getElementById("moreInfo").innerHTML = ("More Info");
        document.getElementById("moreInfo").style.backgroundColor = ("unset");
        document.getElementById("hiddenInfo").style.display = ("none");
    }
}