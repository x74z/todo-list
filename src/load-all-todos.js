import { addTodoToDOM } from "./add-to-dom";
import { showDialog } from "./create-todo-dialog";
import { Todo } from "./todo-class";

function addAllTodosToDOM() {
  Todo.getTodos().forEach((todo) => addTodoToDOM(todo));
}

export function loadAllTodos() {
  document.querySelector("#todos").innerHTML = "";
  addAllTodosToDOM();
}

export function addTodoWithDialog(){
  showDialog(createTodo)
}
function createTodo(title, description, dueDate, priority) {
  const todo = new Todo(title, description, dueDate, priority);
  addTodoToDOM(todo);
}
