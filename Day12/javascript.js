var pressed = [];
var secret_code = "curt";

window.addEventListener('keyup', e => {
  pressed.push(e.key);
  pressed.splice(-secret_code.length - 1, pressed.length - secret_code.length);
  if (pressed.join('').includes(secret_code)) {
    console.log("fuck");
  }
  console.log(pressed);
});