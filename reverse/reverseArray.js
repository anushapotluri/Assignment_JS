//given an array
var arr = [1,2,3,4,5];
/*for(i=(arr.length)-1;i>=0;i--){    
    console.log(arr[i]);
}*/
/*var arrNew =[];
arr.forEach((el,index,currentArr)=> {
    arrNew[(currentArr.length)-1 -index]=el;

});
console.log(arrNew);*/
var arrNew =[];
for(i=(arr.length)-1;i>=0;i--){
arrNew.push(arr.pop());
}
console.log(arrNew);



