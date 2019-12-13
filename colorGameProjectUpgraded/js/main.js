var numberOfColorBoxes = 3;
var colorBoxesContainer = document.getElementById('color-boxes-container');
window.onload = resetGame();
var newGame= document.getElementById('new-color');
newGame.addEventListener('click',resetGame);
document.getElementById('easy').addEventListener('click', function()
{   
     if(numberOfColorBoxes !== 3){
    changeLevel(3);
    }
    else{
        alert("already in easy level");
    }
});

document.getElementById('hard').addEventListener('click', function()
{
    if(numberOfColorBoxes !== 6){
    changeLevel(6);
    }
    else{
        alert("already in hard level");
    }
});





