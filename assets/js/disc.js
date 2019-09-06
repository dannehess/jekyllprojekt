let app = {};



function showDiscFunc(){
    let selectSixtLi = document.getElementsByClassName("sixt-sevent-li");
    console.log(selectSixtLi);
    for (let i = 0; i < selectSixtLi.length; i++) {

        if (selectSixtLi[i].classList.contains("invisible")){
        selectSixtLi[i].classList.add("visible");
        selectSixtLi[i].classList.remove("invisible");
        }else{
            selectSixtLi[i].classList.remove("visible");
            selectSixtLi[i].classList.add("invisible");
            
        }
        
    }

}

let selectSixtUl = document.getElementById("sixt-sevent-ul");
// app.selectElementEighti = document.getElementsByid("disch2-eighti-nineti");
// app.selectElementMillen = document.getElementsByid("disch2-millen-list");

selectSixtUl.addEventListener("click", showDiscFunc, false)
// app.selectElementEight.addEventListenerFunction("click", showDiscFunc)
// app.selectElementMillen.addEventListenerFunction("click", showDiscFunc)
