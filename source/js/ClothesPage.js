window.addEventListener('DOMContentLoaded', init);

//----------HTML Elements----------
const xButton = document.querySelector(".xButton");
//Popup
const popUp = document.querySelector(".popup");
const popUpDate = document.querySelector("#popupDate");
const popUpNumFits = document.querySelector("#popupNumFits");
const popUpFreq = document.querySelector("#popupFreq");
const popUpLastWorn = document.querySelector("#popupLastWorn");
const popUpTags = document.querySelector("#popupTags");
const popUpNotes = document.querySelector("#popupNotes");


//----------Event Listeners----------
xButton.addEventListener("click", exitToClothes);

//----------Functions----------

//General Use
function incItemNumber(){
  //itemNumber variable not set yet
  if(window.localStorage.getItem("itemNumber" === null)){
      window.localStorage.setItem("itemNumber", 0);
  }

  //Increment itemNumber variable
  let currentNum = window.localStorage.getItem("itemNumber");
  currentNum++;
  window.localStorage.setItem("itemNumber",currentNum);
}

function get(idNum){
  return JSON.parse(window.localStorage.getItem(idNum));
}

//Popup Menu
function exitToClothes(){
    popUp.style.display = "none";
}

function openPopUp(elem){
    //Retrieve corresponding element from localStorage
    let id = elem.id;
    let current = get(id);

    //Set all corresponding popup values
    [popUpDate.innerHTML,popUpNumFits.innerHTML,popUpFreq.innerHTML,
    popUpLastWorn.innerHTML,popUpTags.innerHTML,popUpNotes.innerHTML] 
    = [current.date,current.numFits,current.freq,current.lastWorn,current.tags,current.notes]


    //Data loaded, show popup
    popUp.style.display = "flex";

}



window.onclick = function(event) {
    if (event.target == popUp) {
      popUp.style.display = "none";
    }
  }


// --------------Testing Area-------------------
let clothing = new Object();
clothing.date = "12/19/22";
clothing.numFits = "5";
clothing.freq="5";
clothing.lastWorn = "12/12/22";
clothing.tags = "Shirt,Gray"
clothing.notes = "testing testing testing"

function init(){
  window.localStorage.setItem("12345", JSON.stringify(clothing));
}
