let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks))
}

function renderTasks(){
const list = document.getElementById("taskList")
list.innerHTML = ""

tasks.forEach((task, index) => {
const li = document.createElement("li")

li.innerHTML = `
${task}
<button onclick="deleteTask(${index})">❌</button>
`

list.appendChild(li)
})
}

function addTask(){
const input = document.getElementById("taskInput")
const value = input.value.trim()

if(value === "") return

tasks.push(value)
input.value = ""

saveTasks()
renderTasks()
}

function deleteTask(index){
tasks.splice(index, 1)
saveTasks()
renderTasks()
}

renderTasks()