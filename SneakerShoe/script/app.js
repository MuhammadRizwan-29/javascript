/* DOM Selector */
const wrapper = document.querySelector(".slider_wrapper");
const menuItems = document.querySelectorAll(".menu_item h3");

/* Event Listeners */
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}%)`;
  });
});
