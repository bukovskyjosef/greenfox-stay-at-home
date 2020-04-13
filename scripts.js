/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav-bar").style.top = "0";
    } else {
        document.getElementById("nav-bar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
};

document.getElementById("nav-bar").onmouseover = function () {
    mouseOver();
};
document.getElementById("nav-bar").onmouseout = function () {
    mouseOut();
};

function mouseOver() {
    document.getElementById("nav-bar").style.top = "0";
}

function mouseOut() {
    if (window.pageYOffset == 0) {
    } else {
        document.getElementById("nav-bar").style.top = "-50px";
    }
}

let greeter=name => {
    console.log(`Hello, ${name}`);
    if (name === "Adam") {
        console.log("Je to on");
    }
}
greeter("Adam");
greeter("Lucka");
greeter("Artuš");