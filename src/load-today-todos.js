import { isToday, startOfToday } from "date-fns";
import { addTodoToDOM } from "./add-todo-to-dom";
import { Todo } from "./todo-class";
import {
  getTodaysDateInDatetimelocal,
  getWeekdayMonthDayYearHourAndMinutesOfADate,
} from "./format-date-for-todos";
import { showDialogForNonProjects } from "./create-todo-dialog";

function getTodosExpiringToday() {
  const allTodos = Todo.getTodos();
  // Filter through every todo to check if it expires today with isToday()
  const todaysTodos = allTodos.filter((todo) => {
    if (isToday(todo.dueDate)) return true;
    else return false;
  });
  return todaysTodos;
}

export function loadTodayTodos() {
  // Clear current tasks in DOM
  document.querySelector("#todos").innerHTML = "";
  const todayTodos = getTodosExpiringToday();
  todayTodos.forEach((todo) => {
    addTodoToDOM(todo);
  });
}

export function addTodaysTodoWithDialog() {
  document.querySelector("#date-input").value = getTodaysDateInDatetimelocal();
  showDialogForNonProjects(createTodayTodo);
}
function createTodayTodo(title, description, dueDate, priority) {
  // Switch to the todos(load them) after making the new todo
  loadTodayTodos();
  const todo = new Todo(title, description, dueDate, priority, "none");
  addTodoToDOM(todo);
}
