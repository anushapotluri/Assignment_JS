/*window.onload = addBoxes(3);

function addBoxes(level) {
    var sectionContent = document.getElementsByClassName('section-content');
    for(i=0;i<level;i++){
        var newDiv = document.createElement('div');
    sectionContent[0].appendChild(newDiv);
    newDiv.classList.add('color-box');
    }
    }*/

/*var easy = document.getElementById('easy');*/
var hard = document.getElementById('hard');
/*easy.addEventListener('click', function(){    
    removeChildrenFromSectionContent();   
    addBoxes(3);
});*/
hard.addEventListener('click', function(){
    removeChildrenFromSectionContent();
    addBoxes(6);
});

/*function removeChildrenFromSectionContent() {
    var sectionContent = document.getElementsByClassName('section-content');
    while(sectionContent[0].children.length!=0){
    sectionContent[0].children[0].remove();
    }   
}*/
