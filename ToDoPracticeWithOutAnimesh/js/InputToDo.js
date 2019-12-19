function getInputValue() {
var inputElement = document.getElementById('todo');
/*inputElement.addEventListener('focusout', function(){
//var arrayList = [];
//arrayList.push(inputElement.value);
//document.body.append(arrayList);
//inputElement.value = "";
var ul = document.getElementById('section');
var li = document.createElement('li');
li.textContent = inputElement.value;
ul.appendChild(li);
inputElement.value = "";
});*/
inputElement.addEventListener('change', function(event){
    //var arrayList = [];
    //arrayList.push(inputElement.value);
    //document.body.append(arrayList);
    //inputElement.value = "";
    var ul = document.getElementById('section');
    var li = document.createElement('li');
    li.textContent = inputElement.value;
    var deleteBtn = document.createElement('button');
    deleteBtn.classList.add('showDeleteIcon');
    deleteBtn.style.visibility = "hidden";
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
    li.append(deleteBtn);
    ul.appendChild(li);
    inputElement.value = "";
    li.addEventListener('click', function() {
        this.classList.add('listStrikeOff');
    });
    li.addEventListener('mouseover', function() {
        //.style.visibility = "visible";
       var deleteBtn = this.getElementsByTagName('button');
       deleteBtn[0].style.visibility = "visible";
        });
    li.addEventListener('mouseleave', function() {
        var deleteBtn = this.getElementsByTagName('button');
       deleteBtn[0].style.visibility = "hidden";       
    });
    });    
}



