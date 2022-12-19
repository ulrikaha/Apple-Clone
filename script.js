//  Responsive CSS slider 
let sliderUL = document.querySelector('.s-type-3 > .s-content');
let sliderLength = sliderUL.childElementCount;
let leftControl = document.querySelector('.s-type-3 .left-control');
let rightControl = document.querySelector('.s-type-3 .right-control');
let getCurrentIndex = () => Number(sliderUL.getAttribute('data-index'));
let setCurrentIndex = index => {
  console.log(index);
  sliderUL.setAttribute('data-index', index);
  sliderUL.style = `transform: translateX(-${(index - 1) (100 / sliderLength)}%)`
}
let onControlClick = (direction) => {
  let index = getCurrentIndex();
  index = direction === 'left'
    ? (index === 1 ? sliderLength : index - 1)
    : (index === sliderLength ? 1 : index + 1)
  setCurrentIndex(index);
}

leftControl.addEventListener('click', () => onControlClick('left'));

rightControl.addEventListener('click', () => onControlClick('right'));

const hamburger = document.querySelector(".hamburger");
const navBarLinks = document.querySelector(".navbar-links-header");
const shopMenu = document.querySelector(".menulinks-header");
const shopIcon = document.querySelector(".shop-logo-header");
const shopIconDesktop = document.querySelector(".shop-logo-header-desktop");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBarLinks.classList.toggle("active");
})

shopIcon.addEventListener("click", () => {
    shopMenu.classList.toggle("active");
})

shopIconDesktop.addEventListener("click", () => {
    shopMenu.classList.toggle("active");
})

