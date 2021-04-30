var btn = document.querySelector(".btn-options");
var navbar = document.querySelector("#navbar");

btn.onclick = function() {
    btn.classList.toggle("open");
    navbar.classList.toggle("open");
}