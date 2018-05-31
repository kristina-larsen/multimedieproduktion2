//Javascript/jqeury


function openNav(){
  document.getElementById("mynav").style.width = "100%";
}
function closeNav(){ /*javascript til at lukke menuen når der trykkes på x */
  document.getElementById("mynav").style.width = "0%";
}
//  slider

$( document ).ready(function() {

  var width = 260;
  var animationSpeed = 500;
  var currentSlide = 1;

  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

  // var control_next = $('control_next');

  $('.control_next').click(function () {
    $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function () {
      currentSlide++;
        if (currentSlide === $slides.length-9) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    });

  $('.control_prev').click(function () {
    $slideContainer.animate({'margin-left': '+='+width}, animationSpeed, function () {
      currentSlide--;
        if (currentSlide === -4) {
          currentSlide = 6;
          $slideContainer.css('margin-left', -1300);
        }
      });
    });

});

function adresse() {
var x = document.getElementById("adr");
if (x.style.display !== "block") {
    x.style.display = "block";
} else {
    x.style.display = "none";
}
}

function adressefor() {
var x = document.getElementById("adrf");
if (x.style.display !== "block") {
    x.style.display = "block";
} else {
    x.style.display = "none";
}
}

function bopal() {
var x = document.getElementById("bop");
if (x.style.display !== "block") {
    x.style.display = "block";
} else {
    x.style.display = "none";
}
}

function flyt() {
var x = document.getElementById("fly");
if (x.style.display !== "block") {
    x.style.display = "block";
} else {
    x.style.display = "none";
}
}

function udrejse() {
var x = document.getElementById("rejs");
if (x.style.display !== "block") {
    x.style.display = "block";
} else {
    x.style.display = "none";
}
}
