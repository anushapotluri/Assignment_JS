function myForEach(arr, func){
    for(i=0;i<arr.length;i++){
    func(arr[i]);
    }
}
var arr = [1,2,3,4];
function printVariables(val){
    console.log(val);
}
//arr.forEach(printVariables);

//myForEach(arr,printVariables);
myForEach(arr,function(val){
    console.log(val);
});
