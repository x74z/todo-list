import { addTodoToDOM } from "../dom-modules/add-todo-to-dom";
import { showTodoCreationDialogForNonProjects } from "../create-todo-dialog";
import { Todo } from "../classes/todo-class";
import clearTodos from "../dom-modules/clear-todos";
import setProjectTitleOfContent from "../dom-modules/set-current-projects-title";

function addAllTodosToDOM() {
  Todo.getTodos().forEach((todo) => addTodoToDOM(todo));
}

export function loadAllTodos() {
  clearTodos()
  setProjectTitleOfContent("All todos")
  addAllTodosToDOM();
}

export function addTodoWithDialog() {
  // This opens up the dialog to add a todo with no project assigned
  showTodoCreationDialogForNonProjects(createTodo);
}

function createTodo(title, description, dueDate, priority) {
  // Used with addTodoWithDialog
  loadAllTodos();
  const todo = new Todo(title, description, dueDate, priority, "none");
  addTodoToDOM(todo);
}
