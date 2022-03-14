// 헤더 DOM
const header = document.querySelector(".headerContainer");

// 헤더의 높이
const headerHeight = header.offsetHeight;

// 맨 위에서 스크롤 내리기 시작하면 헤더 배경색 변경
window.addEventListener("scroll", () => {
  if (document.querySelector("html").scrollTop > 0) {
    header.style.backgroundColor = "white";
    header.style.boxShadow = "0 1px 10px 1px gray";
  } else {
    header.style.backgroundColor = "";
    header.style.boxShadow = "";
  }
});

// 헤더 메뉴의 DOM
const aboutMenu = document.querySelector(".aboutMenu");
const skillMenu = document.querySelector(".skillMenu");
const projectMenu = document.querySelector(".projectMenu");
const contactMenu = document.querySelector(".contactMenu");

// 각 container의 DOM
const aboutC = document.querySelector(".aboutContainer");
const skillC = document.querySelector(".skillContainer");
const projectC = document.querySelector(".projectContainer");
const contactC = document.querySelector(".contactContainer");

// 각 메뉴의 위치
const aboutLoc = document.querySelector(".aboutContainer").offsetTop;
const skillLoc = document.querySelector(".skillContainer").offsetTop;
const projectLoc = document.querySelector(".projectContainer").offsetTop;
const contactLoc = document.querySelector(".contactContainer").offsetTop;

//  각 메뉴의 클릭 이벤트
aboutMenu.addEventListener("click", function () {
  window.scrollTo({ top: aboutLoc - headerHeight - 20, behavior: "smooth" });
});

skillMenu.addEventListener("click", function () {
  window.scrollTo({ top: skillLoc - headerHeight - 20, behavior: "smooth" });
});

projectMenu.addEventListener("click", function () {
  window.scrollTo({ top: projectLoc - headerHeight - 20, behavior: "smooth" });
});

contactMenu.addEventListener("click", function () {
  window.scrollTo({ top: contactLoc - headerHeight - 20, behavior: "smooth" });
});

// 스와이퍼
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
