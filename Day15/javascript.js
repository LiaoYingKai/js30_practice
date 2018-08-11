var list = document.querySelector(".list");
var input_item = document.querySelector(".input_item");
var items = JSON.parse(localStorage.getItem("items")) || [];

function submitText(e) {
  e.preventDefault();
  let text = (this.querySelector("[name=text]")).value;
  let item = {
    text,
    done: false
  }
  items.push(item);
  newList(items, list);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function newList(item = [], items_list) {
  items_list.innerHTML = item.map((element, index) => {
    return `
      <li>
        <input type="checkbox" data-index=${index} id="item${index}" ${element.done? "checked":""}>
        <label for="item${index}">${element.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;
  let el = e.target;
  let index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  newList(items, list);
}

input_item.addEventListener("submit", submitText);
list.addEventListener("click", toggleDone);
newList(items, list);