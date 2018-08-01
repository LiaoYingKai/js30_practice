var imgs = document.querySelectorAll(".img_box");

// console.log();
function toggleOpen() {
  this.classList.toggle("open");
}

function toggleTransition(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

imgs.forEach(img => img.addEventListener("click", toggleOpen));
imgs.forEach(img => img.addEventListener("transitionend", toggleTransition));