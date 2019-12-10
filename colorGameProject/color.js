var numberOfBoxes =3; 
document.addEventListener('DOMContentLoaded', function(){
    addBoxes(numberOfBoxes);
    addColorToDiv();
});

function addBoxes(level) {
    var sectionContent = document.getElementsByClassName('section-content');
    for(i=0;i<level;i++){
        var redComponent =Math.floor(Math.random() * 256);
var greenComponent= Math.floor(Math.random() * 256);
var blueComponent=Math.floor(Math.random() * 256);
        var newDiv = document.createElement('div');
    sectionContent[0].appendChild(newDiv);
    newDiv.classList.add('color-box');
    newDiv.style.background = "rgb(" + redComponent + "," + greenComponent + "," + blueComponent +")";
    }
    }

/*Generate random heading*/
function randomHeading() {
    var headingNumberRed = Math.floor(Math.random() * 256);
var headingNumberGreen = Math.floor(Math.random() * 256); 
var headingNumberBlue = Math.floor(Math.random() * 256);
    var colorbox = document.getElementsByClassName('color-box');
    var headingcolor = document.getElementById('heading-color');
    headingcolor.textContent = 
          "rgb(" + headingNumberRed + ", " + headingNumberGreen +", "+ headingNumberBlue + ")";
          var randomSelection = Math.floor(Math.random() * numberOfBoxes);
  console.log(randomSelection);
  colorbox[randomSelection].style.background = "rgb(" + headingNumberRed +", " + headingNumberGreen +", "+ headingNumberBlue + ")";
  }

  window.addEventListener('load', randomHeading);

  function addColorToDiv() {
  var colorbox = document.getElementsByClassName('color-box');
  var headingcolor = document.getElementById('heading-color');
  for(i=0;i<numberOfBoxes;i++){      
  colorbox[i].addEventListener('click', function() {
  if(this.style.backgroundColor === headingcolor.textContent) {
    for(i=0;i<numberOfBoxes;i++){
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
}
var newcolors = document.getElementById('new-color');
newcolors.addEventListener('click', function() {
    defaultValues(numberOfBoxes);
    addColorToDiv();
    randomHeading();
});
function defaultValues(numberOfBoxes){
    document.getElementById('header').style.background = '#3b76a9';
    document.getElementById('new-color').textContent = "New Colors";
    document.getElementById('show-text').textContent = " ";
    removeChildrenFromSectionContent();
    addBoxes(numberOfBoxes);
    }

    function removeChildrenFromSectionContent() {
        var sectionContent = document.getElementsByClassName('section-content');
        while(sectionContent[0].children.length!=0){
        sectionContent[0].children[0].remove();
        }   
    }

    var easy = document.getElementById('easy');
    easy.addEventListener('click', function(){ 
        numberOfBoxes =3; 
        defaultValues(numberOfBoxes);  
        randomHeading();
        addColorToDiv();       
    });

    var hard = document.getElementById('hard');
    hard.addEventListener('click', function(){
        numberOfBoxes =6;
        defaultValues(numberOfBoxes);
        randomHeading();
        addColorToDiv();     
    });
    