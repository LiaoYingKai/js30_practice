window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.keyboard_style[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("keyboard_touch");
});

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove("keyboard_touch");
}
const keys = document.querySelectorAll(".keyboard_style");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});