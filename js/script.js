var btn = document.getElementById("dropdown_btn");
var menu = document.getElementById("nav_menu");
var home_btn = document.getElementById("home");
home_btn.style.opacity = "1";

btn.addEventListener("click", function() {
  menu.classList.toggle("open");
  menu.classList.toggle("close");
  var elts = document.getElementsByClassName("nav_elt");
  for (var i = 0; i < elts.length; i++) {
    elts[i].classList.toggle("hide");
    elts[i].classList.toggle("show");
  }
  btn.classList.toggle("grow");
  if (home_btn.style.opacity == "1") {
    home_btn.style.opacity = "0";
  } else if (home_btn.style.opacity == "0") {
    home_btn.style.opacity = "1";
  }
});
