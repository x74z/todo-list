import { addTodoToDOM } from "./add-to-dom";
import { Todo } from "./todo-class";

function addAllTodosToDOM() {
  Todo.getTodos().forEach((todo) => addTodoToDOM(todo));
}

export function loadAllTodos() {
  document.querySelector("#todos").innerHTML = "";
  addAllTodosToDOM();
}

export function createTodo() {
  // title, description, dueDate, priority
  const title = prompt("Title: ");
  const description = prompt("Description: ");
  const dueDate = prompt("dueDate: 24/42/42");
  const priority = prompt("Priority: high, medium, low, none");
  const todo = new Todo(title, description, dueDate, priority);
  addTodoToDOM(todo);
}
