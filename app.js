const questionsAnswers = document.querySelector(".qa");
let active = null;

questionsAnswers.addEventListener("click", (event) => {
  let clicked = event.target.closest(".questions-container");

  clicked.classList.toggle("active");
  if (clicked) {
    if (active) {
      active.classList.remove("active");
    }

    if (active === clicked) {
      clicked.classList.remove("active");
      active = null;
    } else {
      clicked.classList.add("active");
      active = clicked;
    }
  }
});
