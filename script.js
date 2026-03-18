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
<span style="text-decoration:${task.completed ? 'line-through' : 'none'}">
${task.text}
</span>

<div>
<button onclick="toggleTask(${index})">✔</button>
<button onclick="editTask(${index})">✏</button>
<button onclick="deleteTask(${index})">❌</button>
</div>
`

list.appendChild(li)
})
}

function addTask(){
const input = document.getElementById("taskInput")
const value = input.value.trim()

if(value === "") return

tasks.push({
text: value,
completed: false
})

input.value = ""

saveTasks()
renderTasks()
}

function deleteTask(index){
tasks.splice(index, 1)
saveTasks()
renderTasks()
}

function toggleTask(index){
tasks[index].completed = !tasks[index].completed
saveTasks()
renderTasks()
}

function editTask(index){
const newTask = prompt("Edit task:", tasks[index].text)

if(newTask !== null && newTask.trim() !== ""){
tasks[index].text = newTask.trim()
saveTasks()
renderTasks()
}
}

/* ENTER KEY SUPPORT */

document.getElementById("taskInput")
.addEventListener("keydown", function(e){
if(e.key === "Enter"){
addTask()
}
})

renderTasks()