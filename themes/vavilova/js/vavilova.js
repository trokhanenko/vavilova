(function ($, Drupal, window, document) {

  Drupal.behaviors.THEMESlickConfig = {
    attach: function (context, settings) {

      $(".people .view-content").slick({
      	slidesToShow: 4,
 		    slidesToScroll: 1,
  		  autoplay: true,
  		  autoplaySpeed: 4000,
  		  adaptiveHeight: true,
  		  prevArrow: '<img src="/themes/vavilova/images/left-arrow.png" class="slick-prev">',
        nextArrow: '<img src="/themes/vavilova/images/right-arrow.png" class="slick-next">',
         responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      $(".reviews .view-content").slick({
        autoplay: true,
        autoplaySpeed: 6000,
        adaptiveHeight: true,
        prevArrow: '<img src="/themes/vavilova/images/left-arrow.png" class="slick-prev">',
        nextArrow: '<img src="/themes/vavilova/images/right-arrow.png" class="slick-next">',
      });

    }
  };

} (jQuery, Drupal, this, this.document));