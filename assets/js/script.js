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
        targets: "section",
        translateY: [-450, 0] , 
        duration: 1000,
        offset: 0,
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

  let copyyear = document.querySelector('#copyyear').innerHTML = new Date().getFullYear();

  $(document).ready(function(){
    
    let acc = document.getElementsByClassName("accordion");
    
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
          panel.classList.add('active');
    }
  });
}

$(window).resize(function() {
  if ($(window).width() <= 700) {
     $('.panel').hide();
  }
 else {}
});
});