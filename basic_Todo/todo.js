var askUser;
var newArr = [];
while(askUser !== "quit"){
 askUser = prompt("what do you wan to do?");
if(askUser === "new"){
    var newPrmt = prompt("what would you like to do?");
    newArr.push(newPrmt);
}
else if(askUser === "list") {
    console.log(newArr);
}
}