export default function getSavedtodos() {
  const todosArray = localStorage.getItem("todos");
  console.log(todosArray);
  return todosArray;
}
