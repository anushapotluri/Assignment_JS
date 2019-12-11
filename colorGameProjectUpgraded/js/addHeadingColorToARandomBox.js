function addHeadingColorToARandomBox() {
    var colorBoxElements = colorBoxesContainer.children;
    var headingColor = document.getElementById('heading-color');
    var randomBoxNumber = Math.floor(Math.random() *(numberOfColorBoxes-1));
colorBoxElements[randomBoxNumber].style.background = headingColor.textContent;
}

//Math.floor(Math.random() * (max - min)) + min;
//Math.floor(Math.random() * (numberOfColorBoxes-1-0))+0