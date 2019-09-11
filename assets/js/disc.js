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

let selectSixtTar = document.getElementById("sixt-sevent-target");
let selectSixtGrid = document.getElementsByClassName("grid-sixt");
let selectSixtArrow = document.getElementsByClassName("sixt-arrow-icon");

let selectEightTar = document.getElementById("eighti-target");
let selectEightGrid = document.getElementsByClassName("grid-eight");
let selectEightArrow = document.getElementsByClassName("eighti-arrow-icon");

let selectMillenTar = document.getElementById("millen-target");
let selectMillenGrid = document.getElementsByClassName("grid-millen");
let selectMillenArrow = document.getElementsByClassName("millen-arrow-icon");

selectSixtTar.addEventListener(
  "click",
  function() {
    showDiscFunc(selectSixtGrid), turnArrowFunc(selectSixtArrow);
  },
  false
);

selectEightTar.addEventListener(
  "click",
  function() {
    showDiscFunc(selectEightGrid), turnArrowFunc(selectEightArrow);
  },
  false
);

selectMillenTar.addEventListener(
  "click",
  function() {
    showDiscFunc(selectMillenGrid), turnArrowFunc(selectMillenArrow);
  },
  false
);

function turnArrowFunc(elem) {
  for (let i = 0; i < elem.length; i++) {
    if (elem[i].classList.contains("open")) {
      elem[i].classList.remove("open");
    } else {
      elem[i].classList.add("open");
    }
  }
}
