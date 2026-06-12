window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Toggle mobile navbar (if a burger is present)
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    var options = {
      slidesToScroll: 1,
      slidesToShow: 3,
      loop: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
    }

    // Initialize every element with the "carousel" class
    bulmaCarousel.attach('.carousel', options);

    // Initialize any sliders
    bulmaSlider.attach();
})
