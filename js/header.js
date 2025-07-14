// 햄버거 메뉴, 클로즈 버튼 클릭 이벤트
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close_btn");
const header = document.querySelector("header");

menuBtn.addEventListener("click", () => {
    header.classList.add("menu_open");
    header.classList.remove("menu_close");
});

closeBtn.addEventListener("click", () => {
    header.classList.add("menu_close");
    header.classList.remove("menu_open");
});

// 로고 ( 블로그 & 블로그 상세 & 메인 체인지 )
const pageType = document.body.dataset.page;
const headerLogo = document.querySelector(".header_logo");
const nav = document.querySelector("header nav");
const menu = document.querySelector(".menu");

if (pageType == "main") {
    headerLogo.src = "img/white_logo.png";
    nav.classList.remove("black");
    menu.src = "img/white_menu.svg";
} else if (pageType === "blog" || pageType === "blog-detail") {
    headerLogo.src = "img/black_logo.svg";
    nav.classList.add("black");
    menu.src = "img/black_menu.svg";
}
