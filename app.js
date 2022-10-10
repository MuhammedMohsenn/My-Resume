// mobile-nav-button
let mobileButton = document.querySelector("div.mobile-nav-button");
let navMenu = document.querySelector("nav.nav-menu");
let navLiA = document.querySelectorAll("nav ul li a");

mobileButton.addEventListener("click", () => {
  navMenu.classList.toggle("active-mobile-navbar");
});

navLiA.forEach((li) => {
  li.addEventListener("click", () => {
    if (navMenu.classList.contains("active-mobile-navbar")) {
      navMenu.classList.remove("active-mobile-navbar");
    }
  });
});
// mobile-nav-button

// animating hero section text
let typed = new Typed(".auto-type", {
  strings: [
    "Front-End Web Developer",
    "React Developer",
    "Open for job Opportunities",
  ],
  typeSpeed: 130,
  backSpeed: 50,
  loop: true,
});

// adding active class on nav items on click
let ulItems = document.querySelectorAll(".nav-ul li");

ulItems.forEach((item) => {
  item.addEventListener("click", function () {
    ulItems.forEach((li) => li.classList.remove("active"));
    this.classList.add("active");
  });
});
//---------------------------------------------------------
// adding active class on nav items on scroll

let sections = document.querySelectorAll("section");

let navLi = document.querySelectorAll("nav ul li");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    let sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  });
});
//---------------------------------------------------------
