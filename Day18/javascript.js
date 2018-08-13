let node_time = Array.from(document.querySelectorAll("[data-time]"));
let time = node_time
  .map(item => item.dataset.time)
  .map(time_code => {
    let [min, second] = time_code.split(":").map(parseFloat);
    return min * 60 + second;
  })
  .reduce((total, element) => total += element)
console.log(time);
let second_total = time;

let hour = Math.floor(second_total / 3600);
second_total = second_total % 3600;

let miunte = Math.floor(second_total / 60);
second_total = second_total % 60;

let second = second_total;

console.log(`${hour} ${miunte} ${second}`);