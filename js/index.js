$(document).ready(function(){
  var carouselList = $("#carousel ul"); 

function changeSlide(){
    carouselList.animate({'marginLeft': -400}, 1000, moveFirstSlide);
};
    
setInterval(changeSlide, 2000);

function moveFirstSlide(){
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
lastItem.after(firstItem);   
carouselList.css({marginLeft:0});
};
});




           