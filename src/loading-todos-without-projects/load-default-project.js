import { DefaultTodo } from "../classes/default-todo-class";
import { showTodoCreationDialogForNonProjects } from "../create-todo-dialog";
import clearTodos from "../dom-modules/clear-todos";
import setProjectTitleOfContent from "../dom-modules/set-current-projects-title";
import addTodosArrayToDOM from "../dom-modules/add-todos-to-dom";

export function loadDefaultTodos() {
  clearTodos();
  setProjectTitleOfContent("Default todos");
  addTodosArrayToDOM(DefaultTodo.getTodos());
}


export function addDefaultTodoWithDialog() {
  showTodoCreationDialogForNonProjects(createDefaultTodo);
}
function createDefaultTodo(title, description, dueDate, priority) {
  // Switch to the todos(load them) after making the new todo
  const todo = new DefaultTodo(title, description, dueDate, priority, "default");
  loadDefaultTodos();
  // console.log(todo);
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
