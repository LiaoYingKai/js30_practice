const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let score = 0;
let count_time;
let game_time = 30;

function startGame() {
  gameRule();
  score = 0
}

function gameRule() {
  let mole_number = Math.floor(Math.random() * 6);
  count_time = setInterval(() => {
    holes[mole_number].querySelector(".mole").style.top = "100%";
    game_time--;
    mole_number = Math.floor(Math.random() * 6)
    holes[mole_number].querySelector(".mole").style.top = 0;

    if (game_time <= 0) {
      clearInterval(count_time);
      holes[mole_number].querySelector(".mole").style.top = "100%";
      return;
    }
  }, 1000);
}
// holes[0].querySelector(".mole").style.top

function countScore() {
  score += 1;
  scoreBoard.textContent = score;
}

moles.forEach(item => item.addEventListener('dblclick', countScore));