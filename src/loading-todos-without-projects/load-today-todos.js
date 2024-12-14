import { isToday } from "date-fns";
import { addTodoToDOM } from "../dom-modules/add-todo-to-dom";
import { Todo } from "../classes/todo-class";
import { getTodaysDateInDatetimelocal } from "../format-date-for-todos";
import { showTodoCreationDialogForNonProjects } from "../create-todo-dialog";
import clearTodos from "../dom-modules/clear-todos";
import setProjectTitleOfContent from "../dom-modules/set-current-projects-title";

function getTodosExpiringToday() {
  const allTodos = Todo.getTodos();
  // Filter through every todo to check if it expires today with isToday()
  const todaysTodos = allTodos.filter((todo) => {
    if (isToday(todo.dueDate)) return true;
    else return false;
  });
  return todaysTodos;
}

function addAllTodosToDOM() {
  const todayTodos = getTodosExpiringToday();
  todayTodos.forEach((todo) => {
    addTodoToDOM(todo);
  });
}
export function loadTodayTodos() {
  clearTodos();
  setProjectTitleOfContent("Todos expiring today");
  addAllTodosToDOM();
}

export function addTodaysTodoWithDialog() {
  // This function opens the dialog to add it and sets the date input to the current one
  document.querySelector(".js-add-todo-date-input").value =
    getTodaysDateInDatetimelocal();
  // It then gives it the createTodayTodo function so it loads after adding it and adds the todo
  showTodoCreationDialogForNonProjects(createTodayTodo);
}

function createTodayTodo(title, description, dueDate, priority) {
  // Switch to the todos(load them) after making the new todo
  loadTodayTodos();
  // Due date will be today, refer to addTodaysTodoWithDialog
  const todo = new Todo(title, description, dueDate, priority, "none");
  addTodoToDOM(todo);
}
