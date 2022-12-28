window.addEventListener('DOMContentLoaded', init);

const xButton = document.querySelector(".xButton");
const popUp = document.querySelector(".popup");

xButton.addEventListener("click", exitToClothes);

function exitToClothes(){
    popUp.style.display = "none";
}

function openPopUp(elem){
    popUp.style.display = "flex";
    console.log(elem.id);
}

function init(){
}