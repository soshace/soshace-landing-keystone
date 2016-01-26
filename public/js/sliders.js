'use strict';

$(document).ready(function() {

  var portfolioSlider = $('.portfolio__slider');
  portfolioSlider.slick({
    slidesToShow: 1,
    prevArrow: $('.portfolio__arrow-wrap--left'),
    nextArrow: $('.portfolio__arrow-wrap--right'),
    fade: true,
    infinite: false,
    speed: 300,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          fade: false
        }
      }
    ]
  });

  var teamSlider = $('.team__members-wrap');
  teamSlider.slick({
    slidesToShow: 1,
    prevArrow: $('.team__arrow-wrap--left'),
    nextArrow: $('.team__arrow-wrap--right'),
    speed: 100,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  });

});
