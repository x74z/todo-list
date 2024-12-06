import { getWeekdayMonthDayYearHourAndMinutesOfADate } from "../format-date-for-todos";

export function addTodoToDOM(todo) {
  // select where the todo will be added
  const todosContainer = document.querySelector("#todos");

  // create the div of the todo
  const div = document.createElement("div");

  // Add a div to the class to allow for easy styling
  div.classList = `todo ${todo.priority}-priority`;

  // Create everything that'll be added
  const todoContentDiv = document.createElement("div");
  todoContentDiv.className = "todo-content";

  const title = document.createElement("h1");
  title.textContent = todo.title;
  const description = document.createElement("p");
  description.className = "todo-description"
  description.textContent = todo.description;
  const dueDate = document.createElement("p");
  dueDate.className = "todo-duedate"
  dueDate.textContent = getWeekdayMonthDayYearHourAndMinutesOfADate( todo.dueDate);


  todoContentDiv.append(title, dueDate, description);

  const deleteButtonDiv = document.createElement("div");
  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("pointerdown", () => {
    // Remove them from both the DOM and the array in the class
    todo.removeTodo();
    div.remove();
  });
  deleteButtonDiv.appendChild(deleteButton)
  div.append(
    deleteButtonDiv,
    todoContentDiv, 
    // priority,
  );

  todosContainer.appendChild(div);
}
