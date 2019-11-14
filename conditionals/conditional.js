var age=prompt("enter age");
var sqrt = Math.sqrt(age);
var round = Math.round(sqrt);
var finalOutput = round-sqrt;
if(age<0 ) {
console.log("error");
}
else if(age === 21) {
    console.log("happy21 brthday");
}
else if(age%2 == 1) {
    console.log("odd");
}
if(!finalOutput) {
console.log("perfect square");
}
