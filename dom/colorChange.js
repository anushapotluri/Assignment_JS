var btn = document.querySelector('button');
/*
var bdy = document.querySelector('body');
var btnClick=true;
btn.addEventListener("click", function() {
if(btnClick){
    bdy.style.background ='pink';
    btnClick =false;
}else {
    bdy.style.background = 'green';
    btnClick =true;
}
});*/

btn.addEventListener("click", function(){
document.body.classList.toggle("colorChange");
});





