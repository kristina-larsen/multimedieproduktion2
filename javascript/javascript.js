//Javascript/jqeury

// Burger menu, for den til at komme frem ved tryk på span(burgeren)
// og væk igen ved tryk på krydset
function openNav(){
  document.getElementById("mynav").style.width = "50%";
}
function closeNav(){ /*javascript til at lukke menuen når der trykkes på x */
  document.getElementById("mynav").style.width = "0%";
}
//  Slider

$( document ).ready(function() {

  var width = 260;  // Størrelsen på billederne, i pixels
<<<<<<< HEAD
  var animationSpeed = 500;  // Hastigheden de rykker sig ved
=======
  var animationSpeed = 500;  // Hastigheden de rykker sig ved, i milisekunder
>>>>>>> 76c457a517502178c382c5c2c885ac38e23ba71b
  var currentSlide = 1;

  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');


  // Styre hvad der sker nå der trykkes på pilen til højre
  $('.control_next').click(function () {
    $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function () {
      currentSlide++;
        if (currentSlide === $slides.length-9) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    });
    // Styre hvad der sker ved tryk på pilen til venstre
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
// Alle under her styre nederste lag knappen, med vis, ikke vis,
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
