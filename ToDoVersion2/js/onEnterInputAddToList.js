function onEnterInputAddToList() {
        var toDoLiList = document.createElement('li'); 
        var toDoUlList = document.getElementById('todoLists'); 
        var deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener('click', removeToDoItem);
        toDoLiList.appendChild(deleteButton);         
        toDoLiList.append(this.value);
        toDoLiList.classList.add('toDoElement');             
        toDoLiList.addEventListener('click', onClickToDoListStrikeOff);
        toDoLiList.addEventListener('mouseover', mouseOverShowDeleteButton);
        toDoLiList.addEventListener('mouseleave', mouseLeaveHideDeleteButton);
        toDoUlList.appendChild(toDoLiList);
        this.value = "";
    }