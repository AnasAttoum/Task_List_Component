const taskForm = document.getElementById('taskForm')
const name = document.getElementById('taskName')
const description = document.getElementById('description')
const date = document.getElementById('duoDate')

tasks = JSON.parse(localStorage.getItem('Tasks')) || []
displayTasks()

function complete(index) {
  tasks = JSON.parse(localStorage.getItem('Tasks'))
  tasks[index].complete ? tasks[index].complete = false : tasks[index].complete = true
  localStorage.setItem('Tasks', JSON.stringify(tasks))
  displayTasks()
}

function del(index) {
  tasks = JSON.parse(localStorage.getItem('Tasks'))
  tasks.splice(index, 1)
  localStorage.setItem('Tasks', JSON.stringify(tasks))
  displayTasks()
}

let editIndex;
function edit(index) {
  tasks = JSON.parse(localStorage.getItem('Tasks'))

  const newName = document.getElementById('newName')
  const newDescription = document.getElementById('newDescription')
  const newDate = document.getElementById('newDate')

  editIndex = index
  newName.value = tasks[index].name
  newDescription.value = tasks[index].description
  newDate.value = tasks[index].date


}


function displayTasks() {
  const table = document.getElementById('table')

  tasks = JSON.parse(localStorage.getItem('Tasks')) || []
  table.innerHTML = ''
  tasks.forEach((element, index) => {
    table.innerHTML += `
      <tr>
          <th  ${element.complete ? 'style=text-decoration:line-through;color:var(--bs-success)' : ''} ${element.complete ? 'style=text-decoration:line-through' : ''} scope="row">${index + 1}</th>
          <td  ${element.complete ? 'style=text-decoration:line-through;color:var(--bs-success)' : ''}>${element.name}</td>
          <td  ${element.complete ? 'style=text-decoration:line-through;color:var(--bs-success)' : ''}>${element.description}</td>
          <td  ${element.complete ? 'style=text-decoration:line-through;color:var(--bs-success)' : ''}>${element.date}</td>
          <td  ${element.complete ? 'style=text-decoration:line-through;color:var(--bs-success)' : ''}>${element.complete ? 'Complete' : 'Not Complete'}</td>
          <td>
            <button type="button" onclick=complete(${index}) class="btn btn-success">${element.complete ? 'Undo' : 'Done'}</button>
            <button type="button" onclick=edit(${index}) class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Edit</button>
            <button type="button" onclick=del(${index}) class="btn btn-danger">Delete</button>
            </td>
            </tr>
            `
  });

}

taskForm.addEventListener('submit', function (e) {
  const name = document.getElementById('taskName')
  const description = document.getElementById('description')
  const date = document.getElementById('duoDate')
  e.preventDefault();
  newTask = {
    name: name.value,
    description: description.value,
    date: date.value,
    complete: false
  }

  tasks.push(newTask)
  localStorage.setItem('Tasks', JSON.stringify(tasks))

  displayTasks()

  name.value = ''
  description.value = ''
  date.value = ''

}
)

const editForm = document.getElementById('editForm')
editForm.addEventListener('submit', function (e) {
  // e.preventDefault();
  const newName = document.getElementById('newName')
  const newDescription = document.getElementById('newDescription')
  const newDate = document.getElementById('newDate')

  tasks = JSON.parse(localStorage.getItem('Tasks'))
  tasks[editIndex].name = newName.value
  tasks[editIndex].description = newDescription.value
  tasks[editIndex].date = newDate.value


  localStorage.setItem('Tasks', JSON.stringify(tasks))

  displayTasks()

}
)








