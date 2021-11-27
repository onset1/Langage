// JS functions for Sign up form
document.getElementById("sign-up-a").addEventListener("click",function () {
    document.querySelector(".pop-up-container").style.display = "flex";
});
document.getElementById("log-in-c").addEventListener("click",function () {
    document.querySelector(".pop-up-container").style.display = "none";
    document.querySelector(".pop-up-container-log-in").style.display = "flex";
});
document.querySelector(".pop-up-close").addEventListener("click", function () {
    document.querySelector(".pop-up-container").style.display = "none";
});
// JS functions for Log in form
document.getElementById("log-in-a").addEventListener("click",function () {
    document.querySelector(".pop-up-container-log-in").style.display = "flex";
});
document.getElementById("sign-up-c").addEventListener("click",function () {
    document.querySelector(".pop-up-container-log-in").style.display = "none";
    document.querySelector(".pop-up-container").style.display = "flex";
});
document.querySelector(".pop-up-close-log-in").addEventListener("click", function () {
    document.querySelector(".pop-up-container-log-in").style.display = "none";
});

