//Javascript/jqeury
function openNav(){
  document.getElementById("mynav").style.width = "100%";
}
function closeNav(){ /*javascript til at lukke menuen når der trykkes på x */
  document.getElementById("mynav").style.width = "0%";
}
//  slider

$(function() {

  var width = 335;
  var animationSpeed = 500;
  var currentSlide = 1;

  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

  // var control_next = $('control_next');

  $('.control_next').click(function () {
    $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function () {
      currentSlide++;
        if (currentSlide === $slides.length-5) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    });

  $('.control_prev').click(function () {
    $slideContainer.animate({'margin-left': '+='+width}, animationSpeed, function () {
      currentSlide--;
        if (currentSlide === -2) {
          currentSlide = 4;
          $slideContainer.css('margin-left', -1005);
        }
      });
    });
  });
