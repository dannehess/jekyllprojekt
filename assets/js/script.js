document.addEventListener("DOMContentLoaded", () => {
anime
  .timeline({})
  .add({
    targets: ".logo",
    opacity: [0, 1], 
    easing: 'easeInOutSine',
    duration: 1400,
    offset: 0
  })
  .add({
    targets: "nav",
    translateY: [-450, 0] , 
    duration: 1000,
    offset: 200,
    easing: 'easeInOutSine'
  })
  .add({
    targets: ".bowie",
    offset: 0,
    duration: 2000,
    translateX: [1000, 0],
    easing: 'easeInOutSine'
  })
});

$(document).ready(function(){

$(document).on('scroll', function(){
  if ($(window).scrollTop() > 55){
      $('.panel').hide();
  }
  if ($(window).scrollTop() < 180){
      $('.panel').css('width', 'auto');
}
});

$(document).mouseup(function (e){
	let panelmenu = $(".panel");
	  if (!panelmenu.is(e.target) && panelmenu.has(e.target).length === 0){
    panelmenu.hide();
    }
}); 

$(window).resize(function() {
  if ($(window).width() <= 700) {
     $('.panel').hide();
  }
 else {}
});

$('.accordion, .panel').on('click', () => {  
  $('.panel').toggle();
})
});

let arrow = document.querySelector("#back-to-top");
let topsection = document.querySelector(".container");
let smalltopheader = document.querySelector("#smalltopheader");
let copyyear = document.querySelector('#copyyear').innerHTML = new Date().getFullYear();

smalltopheader.style.display = "none";

window.addEventListener("scroll", () => {
  let rect = topsection.getBoundingClientRect();
  window.innerHeight - rect.top > window.innerHeight + 200
    ? (arrow.style.display = "flex")
    : (arrow.style.display = "none");
  window.innerHeight - rect.top > window.innerHeight + 340
    ? (smalltopheader.style.display = "flex")
    : (smalltopheader.style.display = "none");
});