function onEnterInputAddToList() {
        var toDoLiList = document.createElement('li'); 
        var toDoUlList = document.getElementById('todoLists');       
        toDoLiList.textContent = this.value;
        toDoLiList.classList.add('toDoElement');
        var deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        toDoLiList.appendChild(deleteButton);        
        deleteButton.addEventListener('click', removeToDoItem);
        toDoLiList.addEventListener('click', onClickToDoListStrikeOff);
        toDoLiList.addEventListener('mouseover', mouseOverShowDeleteButton);
        toDoLiList.addEventListener('mouseleave', mouseLeaveHideDeleteButton);
        toDoUlList.appendChild(toDoLiList);
        this.value = "";
    }