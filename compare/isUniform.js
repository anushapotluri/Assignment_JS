function isUniform(arr) {
//compare
for(index=0;index<(arr.length)-1;index++){
if(arr[index]!==arr[index+1]) {
return false;
}
}
return true;
}
//true or false
console.log(isUniform([1,1,1,1]), "isuniform");



