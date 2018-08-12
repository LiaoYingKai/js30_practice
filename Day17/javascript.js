let bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let list = document.querySelector(".list");

function strip(name) {
  return name.replace(/^(a |the |an )/ig, '').trim();
}

let bands_sort = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

console.log(bands_sort);
list.innerHTML = bands_sort.map(item => `<li>${item}</li>`).join('');