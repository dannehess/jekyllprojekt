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