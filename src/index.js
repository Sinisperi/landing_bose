const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
console.log(burger);
let menuShown = false;

const toggleMenu = () => {
  if (menuShown) {
    menu.classList.remove("shown");
  } else {
    menu.classList.add("shown");
  }
  menuShown = !menuShown;
};

burger.addEventListener("click", toggleMenu);
close.addEventListener("click", toggleMenu);
