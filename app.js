const todo = document.querySelector("#todo")
const ul = document.querySelector("ul")
const arr =  []

function addTodo() {
    arr.push(todo.value)
    todo.value=""
    console.log(arr); 
    render()
}

function render() {
    ul.innerHTML=""  
    for (let i = 0; i < arr.length; i++) {
        ul.innerHTML+=`<li>${arr[i]} </br> <button onclick="editTodo(${i})">EDIT</button>
         <button onclick="deleteTodo(${i})">DELETE</button></li>`
    }

}

function deleteTodo(index) {
    arr.splice(index,1)
    render()
    console.log(arr);
}

function editTodo(change) {
    arr.splice(change,1,prompt("ENTER WHAT YOU WANT ISTEAD OF THIS THING"))
    render()
    console.log(arr);
}