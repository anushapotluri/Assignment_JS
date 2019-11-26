//get list of all tables
var listOfTable = document.getElementsByTagName('table');
console.log(listOfTable.length);
//get children of each table
var childrenOfTable = document.getElementsByTagName('table')[0].children[1];
console.log(childrenOfTable);
//identify th
var getth = document.getElementsByTagName('table')[0].children[1].children[0].children[0];
//console.log(getth);
//if th text = event name
var thText = document.getElementsByTagName('table')[0].children[1].children[0].children[0].textContent;
var listOfTable = document.getElementsByTagName('table');
if(listOfTable[i].children[0])
var elementsCount = 0;
for(var i=0;i<listOfTable.length;i++) {
    if(listOfTable[i].childElementCount > 1){
        elementsCount = elementsCount + listOfTable[i].children[1].childElementCount;
    }
    else if(listOfTable[i] === 1){
        elementsCount = elementsCount + listOfTable[i].children[0].childElementCount -1
    }
//Console.log(elementsCount);
}
console.log(elementsCount);
//document.getElementsByTagName('table')[2].children[0].childElementCount;




