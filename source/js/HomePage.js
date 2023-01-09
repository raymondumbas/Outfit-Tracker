/* ---------- New Clothing Prompt ---------- */
//Elements
const formNCP = document.querySelector("#newClothesPrompt");
const saveNCP = document.querySelector("#saveNCP");
const imageNCP = document.querySelector("#imageNCP");
const previewNCP = document.querySelector("#clothingImg")

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

function updatePreview() {
  const file = this.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', function() {
    previewNCP.src = reader.result;
  });

  reader.readAsDataURL(file);
}

//Event Handlers
saveNCP.addEventListener("click",submitNCP );
imageNCP.addEventListener('change', updatePreview);




