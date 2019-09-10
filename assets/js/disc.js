let app = {};

function showDiscFunc(elem) {
  for (let i = 0; i < elem.length; i++) {

    if (elem[i].classList.contains("invisible")) {
     
      elem[i].classList.add("visible");
      elem[i].classList.remove("invisible");
      
    } else {
      elem[i].classList.remove("visible");
      elem[i].classList.add("invisible");
    }
  }
}

let selectSixtSec = document.getElementById("sixt-sevent-h2");
let selectSixtGrid = document.getElementsByClassName("grid-sixt");

let selectEightSec = document.getElementById("eighti-nineti-h2");
let selectEightGrid = document.getElementsByClassName("grid-eight");



selectSixtSec.addEventListener(
  "click",
  function() {
    showDiscFunc(selectSixtGrid);
  },
  false
);

selectEightSec.addEventListener(
  "click",
  function() {
    showDiscFunc(selectEightGrid);
  },
  false
);

