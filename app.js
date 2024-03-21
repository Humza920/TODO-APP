const todo = document.querySelector("#todo")
const ul = document.querySelector("ul")
const arr =  []

function addTodo() {
    arr.push(todo.value)
    todo.value=""
    console.log(arr); 
    ul.innerHTML=""  
    render()
}

function render() {
    for (let i = 0; i < arr.length; i++) {
        ul.innerHTML+=`<li>${arr[i]} </br> <button onclick="">EDIT</button> <button onclick="deleteTodo(i)">DELETE</button></li>`
    }

}

function deleteTodo(index) {
    arr.splice(index,1)
    render()
}