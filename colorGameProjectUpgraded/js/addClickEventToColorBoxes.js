function checkForCorrectOrWrongColor() {
        var headingColor = document.getElementById('heading-color');
        var colorBoxElements = colorBoxesContainer.children;
        var header = document.getElementById('header');
        var messageBar = document.getElementById('message-bar');
        var newGame = document.getElementById('new-color');
        if(this.style.backgroundColor === headingColor.textContent) {
            for(i=0;i<colorBoxElements.length;i++){
            colorBoxElements[i].style.backgroundColor = headingColor.textContent; 
            colorBoxElements[i].style.visibility = "visible";  
        }
        header.style.backgroundColor = headingColor.textContent;
        messageBar.textContent = "Correct!";  
        newGame.textContent = "Play Again???"
    }
      else {       
        this.style.visibility = "hidden";
        messageBar.textContent = "Try Again!!"  
        }
    }
   
function addClickEventToColorBoxes() {
    var colorBoxElements = colorBoxesContainer.children;
        for(var i=0;i<colorBoxElements.length;i++){
        colorBoxElements[i].addEventListener('click',checkForCorrectOrWrongColor);
}
}