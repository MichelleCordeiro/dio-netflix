$(document).ready(function () {
  var owl = $('.owl-two')
  owl.owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })

  // Custom Button
  $('.prev-slide').click(function () {
    owl.trigger('.prev.owl.carousel')
  })
  $('.next-slide').click(function () {
    owl.trigger('next.owl.carousel')
  })
})
