const switcher = document.querySelector("#headerLinksSwitcher");
const headerLinks = document.querySelector("#headerLinks");
const headerLink = document.querySelectorAll(".header__link");
const open = document.querySelector("#openSwitcher");
const close = document.querySelector("#closeSwitcher");
const body = document.querySelector("body");

switcher.onclick = () => {
    headerLinks.classList.toggle("links__opened");
    Array.from(headerLink).forEach((link) => {
        link.classList.toggle("visible");
    });
    open.classList.toggle("none");
    close.classList.toggle("none");
    body.classList.toggle("hidden");
};
