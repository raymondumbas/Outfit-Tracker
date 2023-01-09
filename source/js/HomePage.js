/* ---------- New Clothing Prompt ---------- */
//Elements
const formNCP = document.querySelector("#newClothesPrompt");
const saveNCP = document.querySelector("#saveNCP");

//Functions
function submitNCP(){
    console.log("TEST")
    for (var i = 0; i < formNCP.elements.length; i++) {
        var field = formNCP.elements[i];
        if(field.type === "checkbox"){
            console.log(field.value + ": " + field.checked)
        }
        else{
            console.log(field.name + ': ' + field.value);
        }
    }
}

//Event Handlers
saveNCP.addEventListener("click",submitNCP );