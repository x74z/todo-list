export function addTodoToDOM(todo) {
  // select where the todo will be added
  const todosContainer = document.querySelector("#todos");
  // create the div of the todo
  const div = document.createElement("div");
  div.className = "todo";
  // Create everything that'll be added
  const title = document.createElement("h1");
  title.textContent = todo.title;
  const description = document.createElement("p");
  description.textContent = todo.description;
  const dueDate = document.createElement("h2");
  dueDate.textContent = todo.dueDate;
  const priority = document.createElement("h3");
  priority.textContent = todo.priority;
  div.append(title, dueDate, description, priority);
  todosContainer.appendChild(div);
}
export function addProjectsToDom(project) { }
