// Change Role
const role = ["Web Developer", "Student", "App Developer"];
const roleImage = ["web_dev.svg", "programming.svg", "mobile_dev.svg"];
let heroRole = document.getElementsByClassName("hero-role");
let heroImage = document.getElementsByClassName("heroImg");

let index = 0;
let charIndex = 0;
function changeText() {
  if (charIndex < role[index].length) {
    heroRole[0].textContent += role[index].charAt(charIndex);
    charIndex++;
  } else {
    heroImage[0].src = "assets/" + roleImage[index];
    setTimeout(() => {
      charIndex = 0;
      heroRole[0].textContent = "";
      index = (index + 1) % role.length;
    }, 2000);
  }
}
setInterval(changeText, 200);

// Scroll
let hireBtn = document.getElementsByClassName("hire-button");
let tech = document.getElementById("tech");
let portfolio = document.getElementById("portfolio");
let contact = document.getElementById("contact");

tech.addEventListener("click", () => {
  window.scroll(0, 647);
});
portfolio.addEventListener("click", () => {
  window.scroll(0, 1000);
});
contact.addEventListener("click", () => {
  window.scroll(0, 2483);
});
hireBtn[0].addEventListener("click", () => {
  window.scroll(0, 2483);
});
