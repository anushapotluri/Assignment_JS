function showOrHideInputField() {
    var toDoInputField = document.getElementById('todo');
    if(toDoInputField.style.display === "block"){
    toDoInputField.style.display = "none";
    }else{
        toDoInputField.style.display ="block";
    }
}