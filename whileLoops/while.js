/*-10 to 19
var num = -9;
while(num<19) {
    console.log(num);
    num++;
}*/
/*even numbers between 10 and 40*/
/*var num = 12;
while(num<40) {
    console.log(num);
    num = num+2;
}*/
/*

odd numbers between 300 and 333*/
/*var num = 301;
while(num<333) {
    console.log(num);
num = num+2;
}*/
/*divisible by 5,3 between 5 and 50*/
var num = 5;
while(num<=50) {
    if(num%3 === 0 && num %5 === 0){//((num%3&&num%5)===0)
    console.log(num);
}
    num++;
}