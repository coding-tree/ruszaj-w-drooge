window.addEventListener("DOMContentLoaded", () => {
  const menuItem = document.querySelectorAll(".menu__item");

  menuItem.forEach(el => {
    const submenu = el.querySelector(".menu__submenu");
    if (submenu) {
      submenu.addEventListener("mouseenter", () => {
        submenu.previousElementSibling.classList.add("menu__link--active");
      });
      submenu.addEventListener("mouseleave", () => {
        submenu.previousElementSibling.classList.remove("menu__link--active");
      });
    }
  });
});
