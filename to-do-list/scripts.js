var task = document.getElementById('task-input')
var add = document.getElementById('add-btn')
var tasks = document.getElementById('tasks')
var taskList = []

add.addEventListener('click', addTask)

function addTask() {
    taskList.push(task.value)
       
            for (let i = 0; i < taskList.length; i++) {
            var ul = document.createElement('ul')
            var li = document.createElement('li')
            var checkbox = document.createElement('input')
            checkbox.setAttribute('type', 'checkbox')

            tasks.appendChild(ul)
            ul.appendChild(li)
            li.appendChild(checkbox)
            
            li.appendChild(document.createTextNode(taskList[i]))
            taskList.pop(i)
            } 
    console.log(taskList)
}