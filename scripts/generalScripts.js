// Navigation Toggle

function navigationOpen() {
    document.getElementById("navigation").style.right = ("0px");
}

function navigationClose() {
    document.getElementById("navigation").style.right = ("-100%");
}

// Info Toggle

function infoToggle() {
    
    if (document.getElementById("seeMore").innerHTML === "Click to see more info") {
        document.getElementById("seeMore").innerHTML = ("Click to see less info");
    } else {
        document.getElementById("seeMore").innerHTML = ("Click to see more info");
    }

}
