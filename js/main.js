$(".btn__color").on("click", function () {
  $(".swiper__slide-price").slick("slickGoTo", $(this).index());
});

$(function () {
  $(".swiper__slide-price").slick({
    arrows: false,

    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});

$(function () {
  $(".swiper-slide, .swiper_slide-bottom").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});
