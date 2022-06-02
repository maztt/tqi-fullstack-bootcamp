function insertTask() {
  var task = document.getElementById('task-input');
  var tasks = document.getElementById('tasks');
  var todo2 = task.value

  tasks.insertAdjacentHTML('beforeend', `
  <input type="checkbox" id="${todo2}">
  <label class="checkbox" for="${todo2}">
  ${todo2}<br>
  </label>`)

  document.getElementById('task-input').value = '';
}

// thanks to marcosr3000 for the help