function addToDo() {
var newli1 = document.createElement('li');
var newli2 = document.createElement('li');
var newli3 = document.createElement('li');
var newli4 = document.createElement('li');
var newli5 = document.createElement('li');
var newli6 = document.createElement('li');
newli1.textContent = "item1";
newli2.textContent = "item2";
newli3.textContent = "item3";
newli4.textContent = "item4";
newli5.textContent = "item5";
newli6.textContent = "item6";
var arraylist = [];
arraylist.push(newli1);
arraylist.push(newli2);
arraylist.push(newli3);
arraylist.push(newli4);
arraylist.push(newli5);
arraylist.push(newli6);
//console.log(arraylist.length);
for(var i=0; i<arraylist.length; i++) {
//document.body.append(arraylist[i]);
}
}



    