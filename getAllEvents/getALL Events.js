//get list of all tables
var listOfTable = document.getElementsByTagName('table');
console.log(listOfTable);
//get children of each table
var childrenOfTable = document.getElementsByTagName('table')[0].children[1];
console.log(childrenOfTable);
//identify th
var getth = document.getElementsByTagName('table')[0].children[1].children[0].children[0];
console.log(getth);
//if th text = event name
var thText = document.getElementsByTagName('table')[0].children[1].children[0].children[0].textContent;
var listOfTable = document.getElementsByTagName('table');
var elementsCount = 0;
for(var i=0;i<listOfTable.length;i++) {
    var singleTableCount = listOfTable[i].children[1].childElementCount;
elementsCount = elementsCount + singleTableCount;
//console.log(elementsCount);
}
console.log(elementsCount);



