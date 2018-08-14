let nav_bar = document.querySelectorAll(".cool>li");
let background = document.querySelector(".dropdownBackground");
let nav = document.querySelector(".top");

function enter() {
  this.classList.add('mouse_in');
  setTimeout(() => {
    this.classList.add("mouse_in_slow");
  }, 150);
  background.classList.add("open");
  let dropdown = this.querySelector(".dropdown");
  let cood = dropdown.getBoundingClientRect();
  let nav_coods = nav.getBoundingClientRect();
  let coods = {
    width: cood.width,
    height: cood.height,
    top: cood.top - nav_coods.top,
    left: cood.left - nav_coods.left
  };
  background.style.setProperty("width", `${coods.width}px`);
  background.style.setProperty("height", `${coods.height}px`);
  background.style.setProperty("transform", `translate(${coods.left}px,${coods.top}px)`);
}

function leave() {
  this.classList.remove('mouse_in', "mouse_in_slow");
  background.classList.remove("open");

}

nav_bar.forEach(item => item.addEventListener("mouseenter", enter));
nav_bar.forEach(item => item.addEventListener("mouseleave", leave));