var move_deg_h = document.querySelector(".hour_style");
var move_deg_m = document.querySelector(".minute_style");
var move_deg_s = document.querySelector(".second_style");
let date = new Date();
let second = date.getSeconds();
console.log(second);
let second_move = (second / 60) * 360;
let minute = date.getMinutes();
console.log(minute);
let minute_move = (minute / 60) * 360;
let hour = date.getHours();
console.log(hour);
let hour_move = (hour / 12) * 360;

function move() {
  second_move += 6;
  move_deg_s.style.transform = `rotate(${second_move+90}deg)`;
  if (second_move % 360 == 0) {
    minute_move += 6;
  }
  move_deg_m.style.transform = `rotate(${minute_move+90}deg)`;
  if (minute_move % 360 == 0) {
    hour_move += 30;
  }
  move_deg_h.style.transform = `rotate(${hour_move+90}deg)`;
}

setInterval(move, 1000);