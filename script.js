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

function render() {}
