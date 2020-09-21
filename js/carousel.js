window.addEventListener("DOMContentLoaded", () => {
  $("#carousel").slick({
    arrows: false,
    infinite: true,
    dots: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    dotsClass: "carousel__indicators indicators"
  });
});
