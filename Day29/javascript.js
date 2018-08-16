let count_time;
let time_display = document.querySelector('.display__time-left');
let end_time_display = document.querySelector(".display__end-time");
let button_time = document.querySelectorAll("[data-time]");

function timer(seconds) {
  clearInterval(count_time);

  let now_time = Date.now();
  let then_time = now_time + seconds * 1000;
  display_time(seconds);
  endTime(then_time);

  count_time = setInterval(() => {
    let every_second = Math.round((then_time - Date.now()) / 1000);
    if (every_second < 0) {
      clearInterval(count_time);
      return;
    }
    display_time(every_second);
  }, 1000);
}

function display_time(second) {
  let remaining_miunte = Math.floor(second / 60);
  let remaining_second = second % 60;
  let remaining_time = `${remaining_miunte}:${remaining_second<10?"0":""}${remaining_second}`;
  time_display.textContent = remaining_time;
  document.title = remaining_time;
}

function endTime(second) {
  let end_time = new Date(second);
  let end_hour = end_time.getHours();
  let end_miunte = end_time.getMinutes();
  let end_time_show = `${end_hour>12?end_hour-12:end_hour}:${end_miunte<10?"0":""}${end_miunte}`;
  end_time_display.textContent = `Be Back At ${end_time_show}`;
  console.log(end_hour, end_miunte);
}

function setTime() {
  timer(parseInt(this.dataset.time));
}

button_time.forEach(item => item.addEventListener("click", setTime));
document.customForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
})