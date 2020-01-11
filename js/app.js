"use strict";

//bestSlider
let textSlide = $(".ba-slide-text");

textSlide.slick({
  dots: true
});

//funSlider
let funSlide = $(".ba-cards");

funSlide.slick({
  fade: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  dots: true
});
