import { getWeekdayMonthDayYearHourAndMinutesOfADate } from "./format-date-for-todos";

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
  dueDate.textContent = getWeekdayMonthDayYearHourAndMinutesOfADate(todo.dueDate)
  // TODO: maybe make this so instead of an h3, it makes the todo a color
  const priority = document.createElement("h3");
  priority.textContent = todo.priority;
  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("pointerdown", () => {
    // Remove them from both the DOM and the array in the class
    todo.removeTodo();
    div.remove();
  });
  div.append(title, dueDate, description, priority, deleteButton);

  todosContainer.appendChild(div);
}

// Idk if ill need this, this should loop through Todo.getTodos() and add them all.
export function addEveryProjectToDom() {}
