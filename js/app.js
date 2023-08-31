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
// let typed = new Typed(".auto-type", {
//   strings: [
//     "Front-End Web Developer",
//     "React Developer",
//     "Open for job Opportunities",
//   ],
//   typeSpeed: 130,
//   backSpeed: 50,
//   loop: true,
// });

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
// scroll to top button
let scrlToTopBtn = document.querySelector("div.scroll-to-top");

window.addEventListener("scroll", () => {
  if (pageYOffset >= 350) {
    scrlToTopBtn.classList.add("active");
  } else {
    scrlToTopBtn.classList.remove("active");
  }
});

scrlToTopBtn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("load", () => {
  scrlToTopBtn.classList.remove("active");
});

//---------------------------------------------------------
//Adding Animation to sections

//About Section
let aboutSection = document.getElementById("about");

window.addEventListener("scroll", () => {
  if (pageYOffset >= 250) {
    aboutSection.style.opacity = 1;
    aboutSection.style.visibility = "visible";
    aboutSection.classList.add("animate__animated", "animate__fadeInRight");
  }
});

//Skills Section
let skillsSection = document.getElementById("skills");
let spans = document.querySelectorAll(".width-span");

window.onscroll = function () {
  if (window.scrollY >= skillsSection.offsetTop - 700) {
    skillsSection.style.opacity = 1;
    skillsSection.style.visibility = "visible";
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

//Resume Section
let resumeSection = document.getElementById("resume");

window.addEventListener("scroll", () => {
  if (pageYOffset >= 1250) {
    resumeSection.style.opacity = 1;
    resumeSection.style.visibility = "visible";
    resumeSection.classList.add("animate__animated", "animate__fadeInLeft");
  }
});

//Portfolio Section
let portfolioSection = document.getElementById("portfolio");

window.addEventListener("scroll", () => {
  if (window.scrollY >= resumeSection.offsetTop + 950) {
    portfolioSection.style.opacity = 1;
    portfolioSection.style.visibility = "visible";
    portfolioSection.classList.add("animate__animated", "animate__fadeInUpBig");
  }
});

//certifications Section
let certificationsSection = document.getElementById("certifications");

window.addEventListener("scroll", () => {
  if (window.scrollY >= certificationsSection.offsetTop - 700) {
    certificationsSection.style.opacity = 1;
    certificationsSection.style.visibility = "visible";
    certificationsSection.classList.add("animate__animated", "animate__pulse");
  }
});
