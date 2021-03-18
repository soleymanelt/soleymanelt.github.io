var counter = 1;

setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3) {
        counter = 1;
    }
}, 5000);

var slides = document.querySelector("#container-3 .slides");
var previous = document.querySelector(".previous");
var next = document.querySelector(".next");

next.onclick = function() {
    slides.style.marginLeft = "-1480px";
    next.style.opacity = "0";
    next.style.cursor = "default";
    previous.style.opacity = "1";
    previous.style.cursor = "pointer";
}

previous.onclick = function() {
    slides.style.marginLeft = "0px";
    previous.style.opacity = "0";
    previous.style.cursor = "default";
    next.style.opacity = "1";
    next.style.cursor = "pointer";
}