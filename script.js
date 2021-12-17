let todoList = [];

$('#form').submit(function (e) {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  const newTodo = $('#input').value;
  if (!newTodo) return;

  todoList.push({
    text: newTodo,
    completed: false,
  });

  localStorage.setItem('todos', JSON.stringify(todoList));

  render();
}

function render() {
  $('#todoList').innerHTML = null;

  const todos = localStorage.getItem('todos');
  todoList = JSON.parse(todos) || [];

  for (let i = 0; i < todoList.length; i++) {
    const item = document.createElement('li');
    const checkbox = document.createElement('input');

    checkbox.type = 'checkbox';
    checkbox.on('click', function (e) {
      todoList[i].completed = e.target.checked;
      localStorage.setItem('todos', JSON.stringify(todoList));

      if (todoList[i].completed) {
        item.classList.add('completed');
        item.classList.remove('uncompleted');
        checkbox.checked = todoList[i].completed;
      } else {
        item.classList.add('uncompleted');
        item.classList.remove('completed');
        checkbox.checked = todoList[i].completed;
      }
    });
  }
}
