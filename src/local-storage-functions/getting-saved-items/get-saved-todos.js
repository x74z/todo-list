export default function getSavedTodos() {
  const todosArray = JSON.parse(localStorage.getItem("todos"));
  console.log(todosArray);
  return todosArray;
}
