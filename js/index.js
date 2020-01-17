// expand multicolor header of name "COE"
// ease out
var names = document.getElementsByClassName("coe");
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

// fade in cards as they come on screen
var cards = document.getElementsByClassName("card");
window.addEventListener("scroll", function() {
  var floor = this.innerHeight;
  for (c of cards) {
    if (c.getBoundingClientRect().top < floor) {
      c.style.animation = "fadeIn 2s ease-in 0s forwards";
    }
  }
});
