var playerOneBtn = document.getElementById('player-one');
var playerTwoBtn = document.getElementById('player-two');
var resetAll = document.getElementById('reset');
var txtField = document.getElementById('txtFld');
var playerScore = document.getElementById('change-txt');
var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');
var playerOneScore = 0, playerTwoScore =0;  

resetAll.addEventListener("click", function() {
txtField.value = "";
score1.textContent = "0"; 
playerOneScore = 0;
playerTwoScore = 0;
score2.textContent = "0";
score1.style.color = "black";
score2.style.color = "black";
playerScore.textContent = "Playing to :" + txtField.value;
});

txtField.addEventListener('change', function () {
    playerScore.textContent = "Playing to :"+ txtField.value;
});

playerOneBtn.addEventListener('click', function() {  
console.log(txtField.value);
if(playerOneScore<txtField.value && playerTwoScore<txtField.value){
    playerOneScore=playerOneScore+1;
    score1.textContent = playerOneScore;
}
if(playerOneScore == txtField.value){
    score1.style.color = "green";
}
});

playerTwoBtn.addEventListener('click', function() {
    if(playerTwoScore<txtField.value && playerOneScore<txtField.value) {
    playerTwoScore=playerTwoScore+1;
    score2.textContent = playerTwoScore;
    }
    if(playerTwoScore == txtField.value){
        score2.style.color = "green";
    }
});


