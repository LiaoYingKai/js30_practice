let silder = document.querySelector(".items");
let silder_scroll;
let mouse_origin;
let is_down = false;

silder.addEventListener("mousedown", (e) => {
  is_down = true;
  silder.classList.add("active");
  mouse_origin = e.pageX - silder.offsetLeft;
  silder_scroll = silder.scrollLeft;
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
  let mouse_move_origin = e.pageX - silder.offsetLeft;
  mouse_move = (mouse_move_origin - mouse_origin) * 2;
  silder.scrollLeft = silder_scroll - mouse_move;
});