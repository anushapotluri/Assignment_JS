var movieArr = [
    {
        name: "abc",
        rating:5,
        hasWatched: true
    },
    {
        name: "absdc",
        rating:4.5,
        hasWatched: false
    },
    {
        name: "abdec",
        rating:3,
        hasWatched: true
    },
    {
        name: "abcace",
        rating:4.5,
        hasWatched: false
    },
];
//console.log(movieArr.length);
for(var i=0;i<movieArr.length;i++){
if(movieArr[i].hasWatched){
    console.log("you have watched" + movieArr[i].name + "-" + movieArr[i].rating);
}
else{
    console.log("you have not seen" + movieArr[i].name + "-" + movieArr[i].rating);
}
}