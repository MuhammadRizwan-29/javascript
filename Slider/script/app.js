/* Selector */
const rightArrow = document.querySelector(".right");
const leftArrow = document.querySelector(".left");
const slider = document.querySelector(".slider");
const sliderImages = document.querySelectorAll(".slider img");
const sliderDots = document.querySelector(".container .bottom");

let slideNo = 1;
const sliderImagesLength = sliderImages.length;

/* Callbacks */
const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNo * 800}px)`;
  slideNo++;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNo - 2) * 800}px)`;
  slideNo--;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNo = 1;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(sliderImagesLength - 1) * 800}px)`;
  slideNo = sliderImagesLength;
};

for (let i = 0; i < sliderImagesLength; i++) {
  const dot = document.createElement("div");
  dot.className = "dotBtn";
  sliderDots.appendChild(dot);
}

const currentDot = document.querySelectorAll(".dotBtn");
currentDot[0].style.backgroundColor = "black";

const resetBg = () => {
  currentDot.forEach((dot) => {
    dot.style.backgroundColor = "transparent";
  });
};

currentDot.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 800}px)`;
    slideNo = i + 1;
    dot.style.backgroundColor = "black";
  });
});

/* Event Listener */
rightArrow.addEventListener("click", () => {
  slideNo < sliderImagesLength ? nextSlide() : getFirstSlide();
  resetBg();
  currentDot[slideNo - 1].style.backgroundColor = "black";
});

leftArrow.addEventListener("click", () => {
  slideNo > 1 ? prevSlide() : getLastSlide();
  resetBg();
  currentDot[slideNo - 1].style.backgroundColor = "black";
});
