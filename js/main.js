// 헤더의 높이
const headerHeight = document.querySelector(".headerContainer").offsetHeight;

// 헤더 메뉴의 DOM
const aboutMenu = document.querySelector(".aboutMenu");
const skillMenu = document.querySelector(".skillMenu");
const projectMenu = document.querySelector(".projectMenu");
const contactMenu = document.querySelector(".contactMenu");

// 각 메뉴의 위치
const aboutLoc = document.querySelector(".aboutContainer").offsetTop;
const skillLoc = document.querySelector(".skillContainer").offsetTop;
const projectLoc = document.querySelector(".projectContainer").offsetTop;
const contactLoc = document.querySelector(".contactContainer").offsetTop;

//  각 메뉴의 클릭 이벤트
aboutMenu.addEventListener("click", function () {
  window.scrollTo({ top: aboutLoc - headerHeight, behavior: "smooth" });
});

skillMenu.addEventListener("click", function () {
  window.scrollTo({ top: skillLoc - headerHeight, behavior: "smooth" });
});

projectMenu.addEventListener("click", function () {
  window.scrollTo({ top: projectLoc - headerHeight + 98, behavior: "smooth" });
});

contactMenu.addEventListener("click", function () {
  window.scrollTo({ top: contactLoc - headerHeight + 98, behavior: "smooth" });
});

// 스와이퍼
new Swiper(".swiper-container", {
  direction: "vertical",
});
