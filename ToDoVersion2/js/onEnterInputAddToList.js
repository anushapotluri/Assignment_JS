function onEnterInputAddToList() {
    var toDoInputField = document.getElementById('todo');
    toDoInputField.addEventListener('change', function() {
        var toDoLiList = document.createElement('li'); 
        var toDoUlList = document.getElementById('todoLists');
        toDoLiList.textContent = toDoInputField.value;
        toDoLiList.addEventListener('click', onClickToDoListStrikeOff);
        toDoLiList.addEventListener('mouseover', mouseOverShowDeleteButton);
        toDoLiList.addEventListener('mouseleave', mouseLeaveHideDeleteButton);
        toDoUlList.appendChild(toDoLiList);
        toDoInputField.value = "";
    });
    }