var arr = [5,4,6,8,9,3,4];
var currMaxVal=arr[0];
for(i=1;i<arr.length;i++){   
   if(currMaxVal<arr[i]){
    currMaxVal=arr[i];
    }   
}
console.log(currMaxVal);