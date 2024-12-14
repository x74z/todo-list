import getSavedTodos from "../getting-saved-items/get-saved-todos";

export default function getTodosFromStorage() {
  // This will load the todos into the todo.todos array
  let todosArray = [];
  const savedTodos = getSavedTodos();
  if (savedTodos !== null) todosArray = savedTodos;
  return todosArray;
}

