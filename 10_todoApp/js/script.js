let todoList = [`buy milk`]


function addTodo() {
    let todoInputElement = document.querySelector(`#todo-input`);
    let todoInputValue = todoInputElement.value;
    console.log(todoInputValue);
    todoList.push(todoInputValue);
}
