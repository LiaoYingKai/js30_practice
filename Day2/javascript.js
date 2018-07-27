// console.log(hour + " " + minute + " " + second);
var move_deg_h = document.querySelector(".hour_style");
var move_deg_m = document.querySelector(".minute_style");
var move_deg_s = document.querySelector(".second_style");


function move() {
  let date = new Date();
  let second = date.getSeconds();
  let second_move = (second / 60) * 360;
  move_deg_s.style.transform = `rotate(${second_move+90}deg)`;
  let minute = date.getMinutes();
  let minute_move = (minute / 60) * 360;
  move_deg_m.style.transform = `rotate(${minute_move+90}deg)`;
  let hour = date.getHours();
  let hour_move = (hour / 12) * 360;
  move_deg_h.style.transform = `rotate(${hour_move+90}deg)`;
  // console.log(date);
}

setInterval(move, 1000);