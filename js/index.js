// start navbar 
const body = document.querySelector(".responsive");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".menu-list li a");

// Function to close the navbar
function closeNavbar() {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}

menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
};

cancelBtn.onclick = closeNavbar;

// Add event listener to each navbar link to close the navbar when clicked
navLi.forEach(link => {
  link.addEventListener('click', closeNavbar);
});

window.onscroll = () => {
  // Toggle stickyNav class for the navbar
  this.scrollY > 20 ? navbar.classList.add("stickyNav") : navbar.classList.remove("stickyNav");
  
  // // Change logo image source based on navbar state
  // const logoImg = document.querySelector(".logo img");

  // if (navbar.classList.contains("stickyNav")) {
  //   logoImg.src = "./img/logo-2.png"; // Change to the stickyNav logo image path
  // } else {
  //   logoImg.src = "./img/logo-1.png"; // Change back to the original logo image path
  // }

  // Highlight active link based on scroll position
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 4) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.getAttribute("href").slice(1) === current) {
      li.classList.add("active");
    }
  });
};

// end active link
// end navbar 
// start card sec
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