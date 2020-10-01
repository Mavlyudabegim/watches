$(document).ready(function(){
 $('.top').height($(window).height());

 $(".nav-bar a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000)
  
 })

})
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= $('.top').height()) {
        $(".nav-bar").addClass('black-bg');
    } else {
        $(".nav-bar").removeClass("black-bg");
    }
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >= $('.top').height()|| document.documentElement.scrollTop >=
  	$('.top').height()) {
    document.getElementById("nav-bar").style.height = "55px";
	
	
    
  } else {
    document.getElementById("nav-bar").style.padding ="0px";
    

   
  }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
 
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++){
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";


  
}

new WOW().init();

