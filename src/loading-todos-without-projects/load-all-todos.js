import { addTodoToDOM } from "../dom-modules/add-todo-to-dom";
import { showTodoCreationDialogForNonProjects } from "../create-todo-dialog";
import { Todo } from "../classes/todo-class";
import clearTodos from "../dom-modules/clear-todos";

function addAllTodosToDOM() {
  Todo.getTodos().forEach((todo) => addTodoToDOM(todo));
}

export function loadAllTodos() {
  clearTodos()
  addAllTodosToDOM();
}

export function addTodoWithDialog() {
  showTodoCreationDialogForNonProjects(createTodo);
}
function createTodo(title, description, dueDate, priority) {
  // Switch to the todos(load them) after making the new todo
  loadAllTodos();
  const todo = new Todo(title, description, dueDate, priority, "none");
  addTodoToDOM(todo);
}
