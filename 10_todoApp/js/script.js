let todoList = [
    {
        item: `buy milk`,
        dueDate: `2024-12-04`,
    }
]
displayItems();


function addTodo() {
    let todoInputElement = document.querySelector(`#todo-input`);
    let todoInputValue = todoInputElement.value;
    let dueDateElement = document.querySelector(`#todo-date`);
    let dueDateValue = dueDateElement.value;
    console.log(todoInputValue);
    console.log(dueDateValue);
    todoList.push({ item: todoInputValue, dueDate: dueDateValue });
    todoInputElement.value = ' ';
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
            <button onclick="todoList.splice(${i},1); displayItems();">Delete</button>
            </div>
        `
    }
    todoContainer.innerHTML = newHtml;
}