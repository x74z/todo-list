import { Todo } from "../../classes/todo-class";

export default function storeTodos() {
  const todosArray = Todo.getTodos();
  localStorage.setItem("todos", todosArray);
}
