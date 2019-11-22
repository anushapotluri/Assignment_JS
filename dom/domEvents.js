var button = document.querySelector("button");
var paragraph = document.querySelector("p");
/*var textIsOld = true;
button.addEventListener("click", function()
{
        if(textIsOld){
            paragraph.textContent = "Someone clicked the button";            
            //textIsOld = false;
        }else{
           // textIsOld = true;
            paragraph.textContent = "No one has clecked yet!";
    }
    textIsOld = !textIsOld;
}
);*/

var oldText = paragraph.textContent;
var newText = "someone clicked button";
button.addEventListener("click", function() {
if(paragraph.textContent === oldText){
    paragraph.textContent = newText;
}
else {
    paragraph.textContent  = oldText;
}
});

button.addEventListener("click", function() {
    console.log(paragraph);
})
