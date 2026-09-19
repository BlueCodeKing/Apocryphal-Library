function openMenu() {
    document.getElementById("navigation").style.right = ("0px");
}

function closeMenu() {
    document.getElementById("navigation").style.right = ("-350px");
}

// MORE INFO (for chapter pages)

function moreInfo() {
    const info = document.getElementById("info");
    const moreInfoText = document.getElementById("moreInfo");

    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
        moreInfoText.textContent = "Hide More Info";
        moreInfoText.style.backgroundColor = "dodgerblue";
    } else {
        info.style.display = "none";
        moreInfoText.textContent = "Click for More Info";
        moreInfoText.style.backgroundColor = "";
    }
}