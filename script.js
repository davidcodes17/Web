const ham = document.querySelector(".hamburger");
const close_btn = document.querySelector(".close");
const new_nav = document.querySelector(".new-nav");

ham.addEventListener("click", (e) => {
  new_nav.style.transform = " translateY(0px)";
});
close_btn.addEventListener("click", (e) => {
  new_nav.style.transform = " translateY(-400px)";
});
