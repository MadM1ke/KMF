// Burger - меню
const burger = document.querySelector(".burger");
const menuBurger = document.querySelector(".header__nav-mob");
const menuLinks = menuBurger.querySelectorAll(".header__item-mob-dropdown");

burger.addEventListener("click", function () {
   burger.classList.toggle("burger--active");
   menuBurger.classList.toggle("header__nav-mob--active");
});

menuLinks.forEach((link) =>
   link.addEventListener("click", () => {
      burger.classList.remove("burger--active");
      menuBurger.classList.remove("header__nav-mob--active");
   })
);

// Выпадающий список - меню
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
   const select = dropdown.querySelector(".select");
   const menu = dropdown.querySelector(".menu");
   const options = dropdown.querySelectorAll(".menu li");

   select.addEventListener("click", () => {
      select.classList.toggle("select--active");
      menu.classList.toggle("menu--active");
   });

   options.forEach((option) => {
      option.addEventListener("click", () => {
         select.classList.remove("select--active");
         menu.classList.remove("menu--active");
      });
   });
});

// Список в моб меню
const mobMenu = Array.from(document.querySelectorAll(".header__item-mob-links"));
const triggers = mobMenu.map((item) => item.querySelector(".header__item-mob-link"));

triggers.forEach((item, i) => {
   item.addEventListener("click", (e) => {
      mobMenu[i].classList.toggle("header__item-mob-links--active");
   });
});

// Slider
const slider = document.querySelector(".slider");
const sliderItems = Array.from(slider.children);

const nextBtn = document.querySelector(".pagination__btn-next");
const prevBtn = document.querySelector(".pagination__btn-prev");

sliderItems.forEach(function (slide, index) {
   if (index !== 0) slide.classList.add("slide-hidden");

   slide.dataset.index = index;

   sliderItems[0].setAttribute("data-active", "");

   slide.addEventListener("click", function () {
      showNextSlide("next");
   });
});

nextBtn.onclick = function () {
   showNextSlide("next");
};

prevBtn.onclick = function () {
   showNextSlide("prev");
};

function showNextSlide(direction) {
   const currentSlide = slider.querySelector("[data-active]");
   const currentSlideIndex = +currentSlide.dataset.index;
   currentSlide.classList.add("slide-hidden");
   currentSlide.removeAttribute("data-active");

   let nextSlideIndex;
   if (direction === "next") {
      nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
   } else if (direction === "prev") {
      nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
   }

   const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
   nextSlide.classList.remove("slide-hidden");
   nextSlide.setAttribute("data-active", "");
}

const pagViews = document.querySelector(".pagination__views");
const pagView = document.querySelectorAll(".pagination__view");

// Swiper
const swiper = new Swiper(".swiper", {
   slidesPerView: 3,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
   },
});
