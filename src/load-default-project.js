import { Todo } from "./todo-class";
import { addTodoToDOM } from "./add-to-dom";
import { DefaultTodo } from "./default-todo-class";
import { showDialog } from "./create-todo-dialog";

function addDefaultsTodosToDOM() {
  DefaultTodo.getTodos().forEach((todo) => addTodoToDOM(todo));
}
export function loadDefaultTodos() {
  document.querySelector("#todos").innerHTML = "";
  addDefaultsTodosToDOM();
}

export function addDefaultTodoWithDialog() {
  showDialog(createDefaultTodo);
}
function createDefaultTodo(title, description, dueDate, priority) {
  const todo = new DefaultTodo(title, description, dueDate, priority);
  console.log(todo)
  addTodoToDOM(todo);
  // TESTTODOS(todo);
}




// function TESTTODOS(dfeaulttodo) {
//   const todo = new Todo("test", "test", "test", "t");
//   const defaulttodo = new DefaultTodo("test", "test", "test", "t");
//   console.log(Todo.getTodos());
//   console.log(DefaultTodo.getTodos());

//   console.log("REMOVE DEFAULT TODO");
//   dfeaulttodo.removeTodo();
//   console.log(Todo.getTodos());
//   console.log(DefaultTodo.getTodos());
// }
