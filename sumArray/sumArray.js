/*var arr=[1,2,3];
var t =0;
for(i=0;i<=(arr.length)-1;i++){
    t=t+arr[i];
}
console.log(t);*/
var arr= [1,2,3];
var output = arr.reduce(function(totalSum, currVal){
   return totalSum + currVal;
},0);
console.log(output);
                      