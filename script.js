$(".slideshow-container > div:gt(0)").hide();

setInterval(function() {
  $('.slideshow-container > div:first')
    .fadeOut(1)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.slideshow-container');
}, 3000);