let todoList = [`buy milk`]
displayItems();


function addTodo() {
    let todoInputElement = document.querySelector(`#todo-input`);
    let todoInputValue = todoInputElement.value;
    console.log(todoInputValue);
    todoList.push(todoInputValue);
    displayItems();
}

function displayItems() {
    let todoContainer = document.querySelector(".todo-container");
    newHtml = ` `;
    for (let i = 0; i < todoList.length; i++) {
        let todoItem = todoList[i].item;
        newHtml += `
            <div>
            <span>${todoItem}</span>
            <button>Delete</button>
            </div>
        `
    }
    todoContainer.innerHTML = newHtml;
}