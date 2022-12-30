window.addEventListener('DOMContentLoaded', init);

const xButton = document.querySelector(".xButton");
const popUp = document.querySelector(".popup");

xButton.addEventListener("click", exitToClothes);

function exitToClothes(){
    popUp.style.display = "none";
}

function openPopUp(elem){
    popUp.style.display = "flex";
}

function init(){
}

window.onclick = function(event) {
    if (event.target == popUp) {
      popUp.style.display = "none";
    }
  }