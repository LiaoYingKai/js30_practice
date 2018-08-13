let trigger = document.querySelectorAll('a');
let highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlineLink() {
  let link = this.getBoundingClientRect();
  console.log(link);
  highlight.style.height = `${link.height}px`;
  highlight.style.width = `${link.width}px`;
  highlight.style.transform = `translate(${link.left+window.scrollX}px,${link.top+window.scrollY}px)`;

}

trigger.forEach(item => item.addEventListener("mouseenter", highlineLink));