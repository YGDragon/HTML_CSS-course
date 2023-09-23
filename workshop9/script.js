const menuActive = document.querySelector(".board__menu");
console.log(menuActive);
const burger = document.querySelector(".active__menu-burger");

function toggleMenu() {
  menuActive.classList.toggle("board__menu-visible");
}

burger.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);
