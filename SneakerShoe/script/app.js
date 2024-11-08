/* Products Data */
const products = [
  {
    id: 1,
    title: "AIR FORCE",
    price: 199,
    colors: [
      {
        code: "black",
        img: "./asset/img/air.png",
      },
      {
        code: "darkblue",
        img: "./asset/img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "AIR JORDAN",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./asset/img/jordan.png",
      },
      {
        code: "green",
        img: "./asset/img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./asset/img/blazer.png",
      },
      {
        code: "green",
        img: "./asset/img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./asset/img/crater.png",
      },
      {
        code: "lightgray",
        img: "./asset/img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./asset/img/hippie.png",
      },
      {
        code: "black",
        img: "./asset/img/hippie2.png",
      },
    ],
  },
];

/* DOM Selector */
const wrapper = document.querySelector(".slider_wrapper");
const menuItems = document.querySelectorAll(".menu_item h3");
const currentProductImg = document.querySelector(".product img");
const currentProductTitle = document.querySelector(".product_details h1");
const currentProductPrice = document.querySelector(".product_details h2");
const currentProductColors = document.querySelectorAll(
  ".product_details .color"
);
const currentProductSizes = document.querySelectorAll(".product_details .size");
const paymentModal = document.querySelector(".payment");
const buyNowBtn = document.querySelector(".product_btn");
const closeModal = document.querySelector(".payment .close");

let chooseProduct = products[0];

/* Event Listeners */
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    /* Change Slide*/
    wrapper.style.transform = `translateX(${-100 * index}%)`;

    /* Choose Product*/
    chooseProduct = products[index];

    /* Update the Content of choosen product*/
    currentProductTitle.textContent = chooseProduct.title;
    currentProductPrice.textContent = "$" + chooseProduct.price;
    currentProductImg.src = chooseProduct.colors[0].img;

    /* Update COLORS based on option choosed*/
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chooseProduct.colors[index].code;
    });
  });
});

/* Change image based on choosen color */
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chooseProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

/* Open & Close Modal */
buyNowBtn.addEventListener("click", () => {
  paymentModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  paymentModal.style.display = "none";
});
