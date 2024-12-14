import { showTodoCreationDialogForNonProjects } from "../create-todo-dialog";
import { Todo } from "../classes/todo-class";
import clearTodos from "../dom-modules/clear-todos";
import setProjectTitleOfContent from "../dom-modules/set-current-projects-title";
import addTodosArrayToDOM from "../dom-modules/add-todos-to-dom";

export function loadAllTodos() {
  clearTodos();
  setProjectTitleOfContent("All todos");
  addTodosArrayToDOM(Todo.getTodos());
}

export function addTodoWithDialog() {
  // This opens up the dialog to add a todo with no project assigned
  showTodoCreationDialogForNonProjects(createTodo);
}

function createTodo(title, description, dueDate, priority) {
  // Used with addTodoWithDialog
  const todo = new Todo(title, description, dueDate, priority, "none");
  loadAllTodos();
}
