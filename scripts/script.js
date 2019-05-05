let form = document.querySelector("form");
let afterText = document.querySelector(".thanks-message");
let help = document.querySelector(".help");

form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(e);
      afterText.style.display = "block";
      form.style.display = "none";
      help.style.display = "none";
});