//Random Colors
function getRandomColor() {
    var redComponent = Math.floor(Math.random() * (255));
    var greenComponent = Math.floor(Math.random() * (255));
    var blueComponent = Math.floor(Math.random() *(255));
    return('rgb(' + redComponent + ', ' + greenComponent + ', ' + blueComponent + ')');
    }