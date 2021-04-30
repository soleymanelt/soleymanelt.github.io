var btn = document.querySelector(".btn-options");
var menu = document.querySelector("#options");

btn.onclick = function() {
    btn.classList.toggle("open");
    navbar.classList.toggle("open");
}