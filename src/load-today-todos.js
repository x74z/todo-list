import { addTodoToDOM } from "./add-to-dom";
import { Todo } from "./create-todo";
import { isToday } from "date-fns";

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
