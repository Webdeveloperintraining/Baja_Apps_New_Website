function toggleMenu() {
    document.querySelector(".main-nav").classList.toggle("open");
    document.querySelector(".three").classList.toggle("open");
}
const X =document.querySelector(".three");
X.onclick=toggleMenu;
