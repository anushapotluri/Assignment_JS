//Generate 3 boxes
function addBoxesToDom(numberOfColorBoxes, colorBoxesContainer) {
    for(var i=0;i<numberOfColorBoxes;i++){
    var colorBoxElement = document.createElement('div');
    colorBoxElement.classList.add('color-box');    
    colorBoxesContainer.appendChild(colorBoxElement);
}
}