var names = document.getElementsByClassName("coe");
var cap = document.getElementById("cap");

var progress = 50;
var duration = 2000;
var interval = 30;

function expand() {
  for (var i = 0; i < names.length; i++) {
    names[i].style.transform =
      "translateX(" +
      (progress / duration) * (i * 3) +
      "%) translateY(" +
      (progress / duration) * (i * 4) +
      "%)";
  }
  progress += interval;
  interval *= 0.98;
  if (progress >= duration) {
    clearInterval(animation);
  }
}
var animation = setInterval(expand, interval);
