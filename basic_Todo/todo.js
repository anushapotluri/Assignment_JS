var askUser;
var newArr = [];
while(askUser !== "quit"){
 askUser = prompt("what do you wan to do?");
if(askUser === "new"){
  listToDo();
}
else if(askUser === "list") {
    addedList();
}
else if(askUser === "delete") {
    deleFromList();
}
}
function listToDo() {
    var newPrmt = prompt("what would you like to do?");
    newArr.push(newPrmt);
}
function addedList() {
    console.log("************************");
    newArr.forEach(function(val,index){
    console.log(index+1,". ",val);
    });
    console.log("**************************");
}
function deleFromList() {
    askIndx = prompt("which index you want to delete?");
    newArr.splice(askIndx,1);
    console.log(newArr);
}
