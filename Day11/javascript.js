var video = document.querySelector(".video");
var play_button = document.querySelector(".play_button");
var toggle = document.querySelector(".toggle");
var skip_button = document.querySelectorAll("[data-skip]");
var ranges = document.querySelectorAll("input[type=range]");
var video_schedule = document.querySelector(".video_schedule");
var video_bar = document.querySelector(".video_bar");

function play() {
  video.paused ? video.play() : video.pause();
}

function updatePlay() {
  let icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function range() {
  video[this.name] = this.value;
}


function videoSchedule() {
  let percent = (video.currentTime / video.duration) * 100;
  video_schedule.style.width = `${percent}%`;
}

function moveBar(e) {
  let moveTime = (e.offsetX / video_bar.offsetWidth) * video.duration;
  video.currentTime = moveTime;
}

play_button.addEventListener('click', play);
video.addEventListener('play', updatePlay);
video.addEventListener('pause', updatePlay);
skip_button.forEach(element => element.addEventListener('click', skip));
ranges.forEach(element => element.addEventListener('change', range));
ranges.forEach(element => element.addEventListener('mousemove', range));
video.addEventListener('timeupdate', videoSchedule);
video_bar.addEventListener('click', moveBar);

// console.log(video_bar);