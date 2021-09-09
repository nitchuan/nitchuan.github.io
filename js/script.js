let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzAVeiyBU1-n6kysmilGt-e8dn3VW46oN3q2tZq2V6CHI6KwR3vtGG0dq8m85XliF53/exec";
const form = document.forms["contact-form-submit"];
const successAlert = document.querySelector(".success-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      successAlert.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
