import { addTodoToDOM } from "./add-to-dom";
import { isToday, startOfToday } from "date-fns";
import { Todo } from "./todo-class";

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

export function createTodayTodo() {
  const todo = new Todo(
    prompt("title: "),
    prompt("description: "),
    startOfToday(),
    prompt("priority: "),
  );
  addTodoToDOM(todo);
}
