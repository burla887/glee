$(function () {

   $('.top-slider__inner').slick({
      arrows: false,
      dots: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,

   });




   var containerEl1 = document.querySelector('[data-ref="week__inner"]');
   var containerEl2 = document.querySelector('[data-ref="new-design__inner"]');

   var config = {
      controls: {
         scope: 'local'
      }
   };

   var mixer1 = mixitup(containerEl1, config);
   var mixer1 = mixitup(containerEl2, config);


});