const links = document.querySelectorAll(".links");
const close_buttons = document.querySelectorAll(".close-btn");
const sections = document.querySelectorAll(".popup_box");

let activeLink = 0;

links.forEach((link, i) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    sections[i].style.display = "flex";
  });
});

close_buttons.forEach((cButton, i) => {
  cButton.addEventListener("click", (e) => {
    e.preventDefault();
    sections[i].style.display = "none";
  });
});
