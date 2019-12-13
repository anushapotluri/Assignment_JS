function initiateGame() {
    addRandomColorToHeading();
    addBoxesToDom(numberOfColorBoxes, colorBoxesContainer);
    addColorsToBoxes();
    addHeadingColorToARandomBox();
    addClickEventToColorBoxes();
}
function resetGame(){
    var header = document.getElementById('header');
    var colorBoxesContainer = document.getElementById('color-boxes-container');
    var colorBoxElements = colorBoxesContainer.children; 
    var messageBar = document.getElementById('message-bar');
    var newGame = document.getElementById('new-color');
    header.style.backgroundColor = '#3b76a9';
    while(colorBoxElements.length > 0){
        colorBoxesContainer.children[0].remove();
    }
    messageBar.textContent = "";  
    newGame.textContent = "New Colors";
    initiateGame();
}