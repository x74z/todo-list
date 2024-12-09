import { isPast, isToday, isTomorrow } from "date-fns";
import { getWeekdayMonthDayYearHourAndMinutesOfADate } from "../format-date-for-todos";

function createDescriptionInput(todo) {
  const description = document.createElement("textarea");
  description.className = "todo-description";
  description.value = todo.description;
  description.addEventListener("focusout", (e) => {
    const newDescription = description.value;
    todo.setDescriptionTo(newDescription);
    // description.textContent = newDescription;
    console.log(newDescription);
  });
  return description;
}
function createTitle(todo) {
  const title = document.createElement("input");
  title.textContent = todo.title;
  title.className = "todo-title";
  title.value = todo.title;
  title.addEventListener("focusout", (e) => {
    const newTitle = title.value;
    todo.setTitleTo(newTitle);
    // title.textContent = newTitle;
    console.log(newTitle);
  });
  return title;
}

function getDueDateTextContent(todo) {
  if (isToday(todo.dueDate)) return "Today";
  else if (isTomorrow(todo.dueDate)) return "Tomorrow";
  else if (isPast(todo.dueDate)) return "Overdue";
  else return getWeekdayMonthDayYearHourAndMinutesOfADate(todo.dueDate);
}
function createDueDate(todo) {
  const dueDate = document.createElement("p");
  dueDate.className = "todo-duedate";
  dueDate.textContent = getDueDateTextContent(todo);

  return dueDate;
}

// TODO: maybe move all of the functions above to a module??
export function addTodoToDOM(todo) {
  // select where the todo will be added
  const todosContainer = document.querySelector("#todos");

  // create the div of the todo
  const div = document.createElement("div");
  div.classList = `todo ${todo.priority}-priority`;

  // Create everything that'll be added
  const todoContentDiv = document.createElement("div");
  todoContentDiv.className = "todo-content";

  const title = createTitle(todo);
  const description = createDescriptionInput(todo);
  const dueDate = createDueDate(todo);

  todoContentDiv.append(title, dueDate, description);

  const deleteButtonDiv = document.createElement("div");
  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("pointerdown", () => {
    // Remove them from both the DOM and the array in the class
    todo.removeTodo();
    div.remove();
  });

  deleteButtonDiv.appendChild(deleteButton);
  div.append(
    deleteButtonDiv,
    todoContentDiv,
    // priority,
  );

  todosContainer.appendChild(div);
}
