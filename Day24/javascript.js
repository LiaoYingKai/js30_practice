let nav = document.querySelector(".nav");
let nav_of_top = nav.offsetTop;

function navTop() {
  if (window.scrollY >= nav_of_top) {
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
    document.body.classList.add("fixed_nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed_nav");

  }

}


window.addEventListener("scroll", navTop);