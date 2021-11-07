document.getElementById("sign-up-a").addEventListener("click",function () {
    document.querySelector(".pop-up-container").style.display = "flex";
});

document.querySelector(".pop-up-close").addEventListener("click", function () {
    document.querySelector(".pop-up-container").style.display = "none";
})