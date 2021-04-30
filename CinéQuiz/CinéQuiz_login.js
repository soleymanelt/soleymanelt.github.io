var btnLogin = document.querySelector("#btn-login");
var inputFile = document.querySelector("#file-select");
var profilePicture = document.querySelector(".profile-pic");
var inputPseudo = document.querySelector("#pseudo");
var inputEmail = document.querySelector("#email");
var inputPassword = document.querySelector("#password");

btnLogin.onclick = function () {
    localStorage.setItem('user', inputPseudo.value);
    localStorage.setItem('user', inputEmail.value);
    localStorage.setItem('user', inputPassword);
}

