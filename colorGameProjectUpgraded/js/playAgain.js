var newGame= document.getElementById('new-color');
newGame.addEventListener('click',resetGame);
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
    header.style.backgroundColor = '#3b76a9';
    //colorBoxesContainer.style.display = "none";
    colorBoxesContainer.removeChild();
    initiateGame();
}