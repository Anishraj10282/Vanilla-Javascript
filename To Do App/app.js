"use strict";

let toDoList = document.querySelector('.to-do-list');
let addToList = document.querySelector('.add-to-list');
let textInput = document.querySelector('.text-input');


document.addEventListener('DOMContentLoaded', setToDoList);
addToList.addEventListener("click", addNewItem);

// deleteButton.addEventListener("click", deleteItem);


function addNewItem(e)
{
    e.preventDefault();

    let div = document.createElement("div");

    let li = document.createElement("li");
    li.innerText = textInput.value;

    /** Storing the newly added item in the local Storage */
    let storageList ;

    if(localStorage.getItem("toDoList")==null)
    {
        storageList = [];
    }
    else
    {
        storageList = JSON.parse(localStorage.getItem('toDoList'));
    }
    
    storageList.push(textInput.value);
    localStorage.setItem("toDoList", JSON.stringify(storageList));


    li.classList.add('list-items');

    // Adding the done button
    let done = document.createElement("button");
    done.innerHTML = `<i class="fas fa-check solid"></i>`;
    done.classList.add("done-btn");
    done.addEventListener('click', completed);

    div.appendChild(li);
    div.appendChild(done);

    // Adding the delete button  
    let del = document.createElement("button");
    del.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    del.classList.add('delete-btn');
    del.addEventListener('click', deleteItem);

    div.classList.add('list-item-container');
    div.appendChild(del);
    toDoList.appendChild(div);

    textInput.value="";
} 


function deleteItem(e)
{
    e.preventDefault();
    const itemDeleteButton = e.target;
    if(itemDeleteButton.classList[0]=="delete-btn")
    {
        const toDoItem = itemDeleteButton.parentElement;
        console.log(toDoItem);

        // Deleting  from the local Storage
        let StorageList = JSON.parse(localStorage.getItem("toDoList"));
        const itemText = toDoItem.children[0].innerText;
        StorageList.splice(itemText.indexOf(itemText), 1);
        localStorage.setItem("toDoList", JSON.stringify(StorageList));
        
        toDoItem.remove();
    }
}

function completed(e)
{
    e.preventDefault();
    const itemCompleteButtom = e.target;
    if(itemCompleteButtom.classList[0]=='done-btn')
    {
        const toDoItem = itemCompleteButtom.parentElement;
        console.log(toDoItem);
        toDoItem.classList.add('completed');
    }
}


function setToDoList()
{
    let StorageList;
    if(localStorage.getItem('toDoList')==null)
    {
        StorageList = []
    }
    else
    {
        StorageList = JSON.parse(localStorage.getItem("toDoList"));
    }

    StorageList.forEach(function(item)
    {
        let div = document.createElement("div");

        let li = document.createElement("li");
        li.innerText = item;

        li.classList.add('list-items');

        // Adding the done button
        let done = document.createElement("button");
        done.innerHTML = `<i class="fas fa-check solid"></i>`;
        done.classList.add("done-btn");
        done.addEventListener('click', completed);

        div.appendChild(li);
        div.appendChild(done);

        // Adding the delete button  
        let del = document.createElement("button");
        del.innerHTML = `<i class="fas fa-trash-alt"></i>`;
        del.classList.add('delete-btn');
        del.addEventListener('click', deleteItem);

        div.classList.add('list-item-container');
        div.appendChild(del);
        toDoList.appendChild(div);

        textInput.value="";
    });
}
