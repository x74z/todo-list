import { Todo } from "./create-todo";
import { addTodoToDOM } from "./add-to-dom";

class DefaultTodo extends Todo {
  static todos = [];
  static getTodos() {
    return DefaultTodo.todos;
  }

  constructor(title, description, dueDate, priority) {
    super(title, description, dueDate, priority);
    DefaultTodo.todos.push(this);
  }
  removeTodo() {
    // Remove them from the main array and the child array.
    Todo.getTodos().splice(DefaultTodo.todos.indexOf(this), 1);
    DefaultTodo.getTodos().splice(DefaultTodo.todos.indexOf(this), 1);
  }
}

function addDefaultsTodosToDOM() {
  DefaultTodo.getTodos().forEach((todo) => addTodoToDOM(todo));
}
export function loadDefaultTodos() {
  document.querySelector("#todos").innerHTML = "";
  addDefaultsTodosToDOM();
}

export function createDefaultTodo() {
  // title, description, dueDate, priority
  const title = prompt("Title: ");
  const description = prompt("Description: ");
  const dueDate = prompt("dueDate: 24/42/42");
  const priority = prompt("Priority: high, medium, low, none");
  const todo = new DefaultTodo(title, description, dueDate, priority);
  addTodoToDOM(todo);
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
