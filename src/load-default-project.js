import { createTodo } from "./create-todo";
import { addToDOM } from "./add-to-dom";
// I should change this name...
const defaultTodos = (() => {
  let todos = [];
  function addTodo(todo) {
    todos.push(todo);
  }

  function removeTodo(todo) {
    todos.splice(indexOf(todo));
  }

  return { todos, addTodo, removeTodo };
})();

export function loadDefaultTodos() {
  document.querySelector("#todos").innerHTML = '';
  defaultTodos.todos.forEach((todo) => {
    addToDOM(todo);
  });
}

export function createDefaultTodo(title, description, dueDate, priority) {
  const todo = createTodo(title, description, dueDate, priority);
  defaultTodos.addTodo(todo);
}
