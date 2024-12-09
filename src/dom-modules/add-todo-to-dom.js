import { isPast, isToday, isTomorrow } from "date-fns";
import { getWeekdayMonthDayYearHourAndMinutesOfADate } from "../format-date-for-todos";
import showChangeProjectDialog from "../change-projects-dialog";

function createDescriptionInput(todo) {
  const description = document.createElement("textarea");
  description.className = "todo__description";
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
  title.className = "todo__title";
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
function getDueDateClassName(todo){
  if (isToday(todo.dueDate)) return "todo__duedate todo__duedate--today";
  else if (isTomorrow(todo.dueDate)) return "todo__duedate todo__duedate--tomorrow";
  else if (isPast(todo.dueDate)) return "todo__duedate todo__duedate--overdue";
  else return "todo__duedate";

}
function createDueDate(todo) {
  const dueDate = document.createElement("p");
  dueDate.textContent = getDueDateTextContent(todo);
  dueDate.className = getDueDateClassName(todo);

  return dueDate;
}
function createDateAndProjectInfoContainer() {
  const todoDueDateAndProject = document.createElement("div");
  todoDueDateAndProject.className = "todo__date-and-project-container"
  return todoDueDateAndProject;
}

function createChangeProjectButton(todo){
  const changeProjectButton =  document.createElement("button");
  changeProjectButton.className = "todo__change-project-button";
  changeProjectButton.addEventListener("pointerdown", ()=> showChangeProjectDialog(todo));
  // The image inside the button
  const icon = '<svg width="200px" height="200px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #e8e6e3;" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="0" y="0" width="24.00" height="24.00" rx="0" fill="#ffffff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M2 12V6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C22 7.84935 22 9.16554 22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2.51839 20.1752 2.22937 19.3001 2.10149 18" stroke="#000000" stroke-width="2.4" stroke-linecap="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #e8e6e3;"></path> <path d="M2 15C8.44365 15 6.55635 15 13 15M13 15L8.875 12M13 15L8.875 18" stroke="#000000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #e8e6e3;"></path> </g></svg>'
  changeProjectButton.innerHTML = icon;

  return changeProjectButton;
}

function createDeleteButtonDiv(todo, mainDiv){
const deleteButtonDiv = document.createElement("div");
  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("pointerdown", () => {
    // Remove them from both the DOM and the array in the class
    todo.removeTodo();
    mainDiv.remove();
  });
  deleteButtonDiv.appendChild(deleteButton);
  return deleteButtonDiv;
}

// TODO: maybe move all of the functions above to a module??
export function addTodoToDOM(todo) {
  // select where the todo will be added
  const todosContainer = document.querySelector(".js-todos");

  // create the div of the todo
  const div = document.createElement("div");
  div.classList = `todo todo--${todo.priority}-priority`;

  // Create everything that'll be added
  const todoContentDiv = document.createElement("div");
  todoContentDiv.className = "todo__content";

  const title = createTitle(todo);
  const description = createDescriptionInput(todo);
  const todoInfoContainer = createDateAndProjectInfoContainer();
  const dueDate = createDueDate(todo);
  const changeProjectButton = createChangeProjectButton(todo);
  todoInfoContainer.append(dueDate, changeProjectButton);
  // Add 
  todoContentDiv.append(title, todoInfoContainer, description);

  const deleteButtonDiv = createDeleteButtonDiv(todo, div);


  div.append( deleteButtonDiv, todoContentDiv);
  todosContainer.appendChild(div);
}
