var slide_img = document.querySelectorAll(".slide-in");
// console.log(slide_img);
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide(e) {
  slide_img.forEach(img => {
    let img_at = window.scrollY + window.innerHeight - img.height / 2;
    let slider_bottom = img.offsetTop + img.height;
    console.log(slider_bottom);
    let have_show = img_at > img.offsetTop;
    let scroll_show = window.scrollY < slider_bottom;
    if (have_show && scroll_show) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  })
}

window.addEventListener('scroll', debounce(checkSlide));