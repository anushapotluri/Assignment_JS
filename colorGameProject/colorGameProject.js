var newcolors = document.getElementById('new-color');
newcolors.addEventListener('click', function() {
   for(var i=0;i<6;i++){
    var colorbox = document.getElementsByClassName('color-box')[i];
    var redComponent =Math.floor(Math.random() * 256);
    var greenComponent= Math.floor(Math.random() * 256);
     var blueComponent=Math.floor(Math.random() * 256);
    colorbox.style.background = "rgb(" + redComponent + "," + greenComponent + "," + blueComponent +")";
    }
});
/*
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }*/
  //console.log(Math.floor(Math.random() * 256) );