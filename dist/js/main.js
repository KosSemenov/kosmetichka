$(document).ready(function(){
  var owl = $(".slaider").owlCarousel({
    nav: true,
    items: 1,
    singleItem: true,
    // loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
  });
  
  owl.on('changed.owl.carousel', function(e) {
    $('.subtitle__items > div').removeClass('subtitle__active');
    $('.subtitle__items > div:eq(' + e.item.index + ')').addClass('subtitle__active');
  })

  $('.subtitle__items > div').click(function(e) {
    e.preventDefault();
    owl.trigger('to.owl.carousel', [$(this).index()]);
  });

});