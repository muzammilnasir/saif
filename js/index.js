const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  const content = card.querySelector(".more-content");
  const btn = card.querySelector(".button");

  btn.addEventListener("click", () => {
    card.classList.toggle("show-content");
    if (card.classList.contains("show-content")) {
      btn.innerHTML = "Show Less";
    } else {
      btn.innerHTML = "Show More";
    }
  });
});