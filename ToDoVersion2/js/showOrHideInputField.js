function showOrHideInputField() {
    var toDoInputField = document.getElementById('todo');
    if(toDoInputField.style.visibility === "visible"){
    toDoInputField.style.visibility = "hidden";
    }else{
        toDoInputField.style.visibility ="visible";
    }
}