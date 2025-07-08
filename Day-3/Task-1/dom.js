window.onload = function () {
    // center the list
    const nav = document.getElementById("nav");
    nav.style.listStyleType = "square";
    nav.style.listStylePosition = "inside";
    nav.style.position = "absolute";
    nav.style.top = "50%";
    nav.style.left = "50%";
    nav.style.transform = "translate(-50%, -50%)";

    // move header image to top right
    const header = document.getElementById("header");
    const img = header.querySelector("img");
    img.style.position = "absolute";
    img.style.top = "0";
    img.style.right = "0";
    img.style.left = "";
    img.style.bottom = "";

    // copy image and move to bottom left
    const newImg = img.cloneNode(true);
    newImg.style.position = "absolute";
    newImg.style.top = "";
    newImg.style.right = "";
    newImg.style.bottom = "0";
    newImg.style.left = "0";
    document.body.appendChild(newImg);
};