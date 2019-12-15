$(document).ready(function(){
  var slider = $('.slider').bxSlider();

  $('#right').on('click', e=>{
    e.preventDefault();
    slider.goToNextSlide();
  });

  $('#left').on('click', e=>{
    e.preventDefault();
    slider.goToPrevSlide();
  });
});