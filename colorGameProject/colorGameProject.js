var newcolors = document.getElementById('new-color');
var headingNumberRed = Math.floor(Math.random() * 256);
var headingNumberGreen = Math.floor(Math.random() * 256); 
var headingNumberBlue = Math.floor(Math.random() * 256);

document.addEventListener('DOMContentLoaded', randomColor);
newcolors.addEventListener('click', defaultValues);

/*generate random color*/
function randomColor(){
  var colorbox = document.getElementsByClassName('color-box');
  for(var i=0;i<6;i++){
  var redComponent =Math.floor(Math.random() * 256);
  var greenComponent= Math.floor(Math.random() * 256);
   var blueComponent=Math.floor(Math.random() * 256);
  colorbox[i].style.background = "rgb(" + redComponent + "," + greenComponent + "," + blueComponent +")";
  document.getElementById('show-text').textContent = " ";
  }
  var randomSelection = Math.floor(Math.random() * 6);
  console.log(randomSelection);
  colorbox[randomSelection].style.background = "rgb(" + headingNumberRed +", " + headingNumberGreen +", "+ headingNumberBlue + ")";
}
window.addEventListener('load', randomHeading);

/*Generate random heading*/
function randomHeading() {
  var headingcolor = document.getElementById('heading-color');
  headingcolor.textContent = 
        "rgb(" + headingNumberRed + ", " + headingNumberGreen +", "+ headingNumberBlue + ")";
       // document.getElementById('header').style.background = '#3b76a9';
}

/*click on any colorbox*/
var colorbox = document.getElementsByClassName('color-box');
var headingcolor = document.getElementById('heading-color');
for(i=0;i<6;i++){
colorbox[i].addEventListener('click', function() {
if(this.style.backgroundColor === headingcolor.textContent) {
  for(i=0;i<6;i++){
  colorbox[i].style.background = headingcolor.textContent;
  colorbox[i].style.visibility = "visible";
  }
  document.getElementById('header').style.background = headingcolor.textContent;
  document.getElementById('show-text').textContent = "Correct!";
  document.getElementById('new-color').textContent = "Play Again?";
}else {
  this.style.visibility = "hidden";
  document.getElementById('show-text').textContent = "try again";
}
});
}

function defaultValues(){
document.getElementById('header').style.background = '#3b76a9';
document.getElementById('new-color').textContent = "New Colors";
document.getElementById('show-text').textContent = " ";
randomColor();
}



/*
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }*/
  //console.log(Math.floor(Math.random() * 256) );