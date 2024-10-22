let menuBtn = document.querySelector("#menu-btn");
let closeBtn = document.querySelector("#close-btn");
let navbar = document.querySelector(".header .flex .navbar");

let slides = document.querySelectorAll(".reviews .box-container .box");
let index = 0;
function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}
function next() {
  slides[index].classList.remove("active");
  index = (index + 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}
