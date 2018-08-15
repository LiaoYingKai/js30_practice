let speed = document.querySelector(".speed");
let speed_bar = speed.querySelector(".speed-bar");
let video = document.querySelector(".flex");

function videoSpeed(e) {
  let bar_Y = e.pageY - this.offsetTop;
  let bar_percent = bar_Y / this.offsetHeight;
  let min = 0.4;
  let max = 4;
  let bar_height = Math.round(bar_percent * 100) + "%";
  let bar_height_change = bar_percent * (max - min) + min;
  speed_bar.style.height = bar_height;
  speed_bar.textContent = bar_height_change.toFixed(2) + "x";
  video.playbackRate = bar_height_change;

}

speed.addEventListener("mousemove", videoSpeed)