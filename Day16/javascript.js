var hero = document.querySelector(".hero");
var text = hero.querySelector("h1");
var walk = 500;

function shadow(e) {
  let width = hero.offsetWidth;
  let height = hero.offsetHeight;
  let x = e.offsetX;
  let y = e.offsetY;
  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }
  let x_walk = Math.round((x / width * walk) - (walk / 2));
  let y_walk = Math.round((y / height * walk) - (walk / 2));
  text.style.textShadow = `
  ${x_walk}px ${y_walk}px 0 rgba(255,0,0,0.7),
  ${x_walk*-1}px ${y_walk}px 0 rgba(255,255,0.7),
  ${y_walk*-1}px ${x_walk}px 0 rgba(255,0,255,0.7),
  ${y_walk}px ${x_walk*-1}px 0 rgba(0,255,255,0.7)
  `;

}

hero.addEventListener('mousemove', shadow);