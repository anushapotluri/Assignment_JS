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
    ul.appendChild(li);
    inputElement.value = "";
    li.addEventListener('click', function() {
        li.classList.add('listStrikeOff');
    });
    li.addEventListener('mouseover', function() {
        li.classList.add('showDeleteIcon');
        li.addEventListener('click', function() {
            li.remove();
        });
    });
    });
    
}



