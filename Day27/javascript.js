let silder = document.querySelector(".items");
let scroll_x;
let start_x;
let is_down = false;

silder.addEventListener("mousedown", (e) => {
  is_down = true;
  silder.classList.add("active");
  start_x = e.pageX - silder.offsetLeft;
  scroll_x = silder.scrollLeft;
});

silder.addEventListener("mouseleave", () => {
  is_down = false;
  silder.classList.remove("active");
});
silder.addEventListener("mouseup", () => {
  is_down = false;
  silder.classList.remove("active");
});

silder.addEventListener("mousemove", (e) => {
  if (!is_down) return;
  e.preventDefault();
  let x = e.pageX - silder.offsetLeft;
  walk = (x - start_x) * 2;
  silder.scrollLeft = scroll_x - walk;
});