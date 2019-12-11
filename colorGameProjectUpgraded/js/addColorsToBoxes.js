//random colors
function addColorsToBoxes() {
    var colorBoxElements = colorBoxesContainer.children;
    for(var i=0; i<colorBoxesContainer.children.length;i++){
    colorBoxElements[i].style.background = getRandomColor(); 
}
}