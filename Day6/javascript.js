const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

var cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function getMatch(word_to_match, cities) {
  return cities.filter(place => {
    let regex = new RegExp(word_to_match, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  })
}

function number(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatch() {
  var city_array = getMatch(this.value, cities);
  var html = city_array.map(place => {
    return `
    <li>
      <span>${place.city},${place.state}</span>
      <span>${number(place.population)}</span>
    <li>`;
  }).join("");
  suggest_list.innerHTML = html;
}

var input = document.querySelector(".search");
var suggest_list = document.querySelector(".suggest_list");

input.addEventListener("change", displayMatch);
input.addEventListener("keyup", displayMatch);