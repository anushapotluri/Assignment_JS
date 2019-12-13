var numberOfColorBoxes = 3;
var colorBoxesContainer = document.getElementById('color-boxes-container');
window.onload = resetGame();
var newGame= document.getElementById('new-color');
newGame.addEventListener('click',resetGame);
document.getElementById('easy').addEventListener('click', function(){
    changeLevel(3);
});
document.getElementById('hard').addEventListener('click', function(){
    changeLevel(6);
});





