window.addEventListener('DOMContentLoaded', init);

//----------HTML Elements----------
const xButton = document.querySelector(".xButton");
//Popup
const popUp = document.querySelector(".popup");
const popUpName = document.querySelector("#popupName")
const popUpDate = document.querySelector("#popupDate");
const popUpNumFits = document.querySelector("#popupNumFits");
const popUpFreq = document.querySelector("#popupFreq");
const popUpLastWorn = document.querySelector("#popupLastWorn");
const popUpTags = document.querySelector("#popupTags");
const popUpNotes = document.querySelector("#popupNotes");
const gallery = document.querySelector("#gallery");


//----------Event Listeners----------
xButton.addEventListener("click", exitToClothes);
gallery.addEventListener("click", (event)=>{openPopUp((event.target))})

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
//Gallery View
function populateGallery(){
  let allItems = get("allItems");
  console.log(allItems);
  for(i = 0; i < allItems.length; i++){
    let newTile = document.createElement("button");
    let newID = allItems[i];
    let currentItem = get(newID);

    //Set up new button element
    newTile.id = newID;
    newTile.className = "clothing";
    newTile.onclick = "openPopUp(this)";
    //TODO: Change image to base64 after other data works
    newTile.style.backgroundImage = "url('../images/12345.jpg')"
  
    //Create content for button
    
    let newSpan = document.createElement("span");
    newSpan.innerHTML = currentItem.name;
    newSpan.className = "clothingName";
    //Add content to button
    newTile.appendChild(newSpan);

    //Add button to page
    gallery.appendChild(newTile);

  }


}

//Popup Menu
function exitToClothes(){
    popUp.style.display = "none";
}

function openPopUp(elem){
    console.log(elem);
    const isClothing = elem.nodeName === 'BUTTON';
    if (!isClothing) {
      return;
    }
  
    //Retrieve corresponding element from localStorage
    let id = elem.id;
    let current = get(id);

    //Set all corresponding popup values
    [popUpName.innerHTML,popUpDate.innerHTML,popUpNumFits.innerHTML,popUpFreq.innerHTML,
    popUpLastWorn.innerHTML,popUpTags.innerHTML,popUpNotes.innerHTML] 
    = [current.name,current.date,current.numFits,current.freq,current.lastWorn,current.tags,current.notes]


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
clothing.name = "Grey Shirt"
clothing.date = "12/19/22";
clothing.numFits = "5";
clothing.freq="5";
clothing.lastWorn = "12/12/22";
clothing.tags = "Shirt,Gray"
clothing.notes = "testing testing testing"

function init(){
  let allItems = ["12345","abcdef"];
  window.localStorage.setItem("allItems", JSON.stringify(allItems));
  window.localStorage.setItem("12345", JSON.stringify(clothing));
  
  populateGallery();
}
