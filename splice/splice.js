//to delete an index element
var arr = ["1","2","3","4","5","6","7","8","9"];
arr.splice(2,1);
console.log(arr);
//add at the end of the array
var arr = ["1","2","3","4","5","6","7","8","9"];
arr.splice(12,1,"10","11","12","13");
console.log(arr);
//add an extra element in the array
var arr = ["1","2","3","4","5","6","7","8","9"];
arr.splice(2,0,"10");
console.log(arr);
//to replace an existing element
var arr = ["1","2","3","4","5","6","7","8","9"];
arr.splice(2,1,"10");
console.log(arr);
//-ve index
var arr = ["1","2","3","4","5","6","7","8","9"];
arr.splice(-2,1,"10");
console.log(arr);
//with -ve index add element
var arr = ["1","2","3","4","5","6","7","8","9"];
arr.splice(-3,0,"10");
console.log(arr); 
//-ve index exceeding the length of array
var arr = ["1","2","3","4","5","6","7","8","9"];
arr.splice(-20,1,"10");
console.log(arr);
//-ve index add element 
var arr = ["1","2","3","4","5","6","7","8","9"];
arr.splice(-20,0,"10");
console.log(arr);
//if delete count is more than length of array
var arr = ["1","2","3","4","5","6","7","8","9"];
arr.splice(-20,20,"10");
console.log(arr);
//splice without any params
var arr = ["1","2","3","4","5","6","7","8","9"];
arr.splice();
console.log(arr);