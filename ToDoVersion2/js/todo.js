window.onload = function() {
    var toDoInputField = document.getElementById('todo');
    toDoInputField.style.visibility = "visible";
    var plusIconClick = document.getElementById('plus-sign');
    toDoInputField.addEventListener('change', onEnterInputAddToList);
    plusIconClick.addEventListener('click',showOrHideInputField);
}