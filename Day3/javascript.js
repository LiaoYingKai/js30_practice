var space = document.querySelector("#space");
var blur = document.querySelector("#blur");
var color = document.querySelector("#color");
var img = document.getElementsByTagName("img")[0];
space.addEventListener("change", function() {
  img.style.padding = space.value + "px";
});
space.addEventListener("mousemove", function() {
  img.style.padding = space.value + "px";
});

blur.addEventListener("change", function() {
  img.style.filter = "blur(" + blur.value + "px)";
});

blur.addEventListener("mousemove", function() {
  img.style.filter = "blur(" + blur.value + "px)";
});

color.addEventListener("change", function() {
  img.style.backgroundColor = color.value;
  document.getElementById("high_light").style.color = color.value;
});

color.addEventListener("mousemove", function() {
  img.style.backgroundColor = color.value;
  document.getElementById("high_light").style.color = color.value;
});