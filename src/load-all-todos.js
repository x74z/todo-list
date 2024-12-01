import { addTodoToDOM } from "./add-todo-to-dom";
import { showDialog, showDialogForNonProjects } from "./create-todo-dialog";
import { Todo } from "./todo-class";

function addAllTodosToDOM() {
  Todo.getTodos().forEach((todo) => addTodoToDOM(todo));
}

export function loadAllTodos() {
  document.querySelector("#todos").innerHTML = "";
  addAllTodosToDOM();
}

export function addTodoWithDialog() {
  showDialogForNonProjects(createTodo);
}
function createTodo(title, description, dueDate, priority) {
  // Switch to the todos(load them) after making the new todo
  loadAllTodos();
  const todo = new Todo(title, description, dueDate, priority, "none");
  addTodoToDOM(todo);
}
