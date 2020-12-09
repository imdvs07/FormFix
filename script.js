/*$(".slideshow-container > div:gt(0)").hide();

setInterval(function() {
  $('.slideshow-container > div:first')
    .fadeOut(1)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.slideshow-container');
}, 4500);
*/

var slideshows = document.querySelectorAll('.slideshow-container')
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow){
    var slides = document.querySelectorAll('.cr');

    var index = 0, time = 5000;
    slides[index].classList.add('active');

    setInterval(() => {
        slides[index].classList.remove('active');

        index++;

        if(index === slides.length) index = 0;

        slides[index].classList.add('active');
    }, time);
}

const tl = gsap.timeline({defaults:{ease:'power1.out'}});

tl.to('.text',{y:"0%", duration:1.5, stagger:1.5});
tl.to('.slider', {y:"-100%", duration:1, delay:0.5});
tl.to('.intro',{y:"-100%", duration:1}, "-=1");
tl.fromTo()