const tasksForm = document.getElementById("tasks-form")
const taskTitle = document.querySelector("input")
const taskRow = document.querySelector(".body-table")
const tasks = JSON.parse(localStorage.getItem("tasks-list")) ?? []


tasks.forEach( function (item) {
  taskRow.innerHTML+=`
            <tr>
              <td>${item.title}</td>
            <td>
              <button class="btn btn-info btn-edit" data-id = "${item.id}"> Edit</button>

            </td>
            <td>
              <button class="btn btn-danger btn-delete" data-id = "${item.id}" > Delete</button>

            </td>
            </tr>`
});


tasksForm.addEventListener("submit", function(e){
    e.preventDefault()
    taskRow.innerHTML = taskRow.innerHTML + `
        <tr>
              <td>${taskTitle.value}</td>
            <td>
              <button class="btn btn-info"> Edit</button>

            </td>
            <td>
              <button class="btn btn-danger"> Delete</button>

            </td>
        </tr>
            ` 
            tasks.push({
                id:parseInt(Math.random() * 10000),
                title:taskTitle.value
            })
            localStorage.setItem("tasks-list", JSON.stringify(tasks))
     taskTitle.value = ""
})


const deleteButton = document.querySelectorAll(".btn-delete")
deleteButton.forEach(function (item) {
  item.addEventListener("click", function () {
    item.parentElement.parentElement.remove()
  })
    
  
});