import { Todo } from "../classes/todo-class";
import { addTodoToDOM } from "../dom-modules/add-todo-to-dom";
import { DefaultTodo } from "../classes/default-todo-class";
import { showTodoCreationDialogForNonProjects } from "../create-todo-dialog";

function addDefaultsTodosToDOM() {
  DefaultTodo.getTodos().forEach((todo) => addTodoToDOM(todo));
}
export function loadDefaultTodos() {
  document.querySelector("#todos").innerHTML = "";
  addDefaultsTodosToDOM();
}

export function addDefaultTodoWithDialog() {
  showTodoCreationDialogForNonProjects(createDefaultTodo);
}
function createDefaultTodo(title, description, dueDate, priority) {
  // Switch to the todos(load them) after making the new todo
  loadDefaultTodos();
  const todo = new DefaultTodo(title, description, dueDate, priority, "default");
  console.log(todo);
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
