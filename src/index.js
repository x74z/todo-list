import "./styles.css";
import {
  addDefaultTodoWithDialog,
  loadDefaultTodos,
} from "./loading-todos-without-projects/load-default-project";
import { addTodaysTodoWithDialog, loadTodayTodos } from "./loading-todos-without-projects/load-today-todos";
import { addTodoWithDialog, loadAllTodos } from "./loading-todos-without-projects/load-all-todos";
import { Project } from "./classes/project-class";
import { Todo } from "./classes/todo-class";

// TODO i should do one of these things:
//
//
// Reload Project when moving a todo to another project
// Style the dialog
// Add date dialog change
//
//
//  keep styling the page
// SEARCh inside the project class for "TODO", ordering the appearance of todos by date
//
// local storage feature(REMEMBER TO MAKE A BRANCH)
//
// //
// lowp: !clean up the code and add comments
//        split up add to dom module into different functions
//
// lowp: make it look good
// rlowp: make animations on click???

// Loading default project
document
  .querySelector(".js-show-default-todos")
  .addEventListener("pointerdown", loadDefaultTodos);
document
  .querySelector(".js-add-default-todo")
  .addEventListener("pointerdown", addDefaultTodoWithDialog);

// Todays todo
document
  .querySelector(".js-show-today-todos")
  .addEventListener("pointerdown", loadTodayTodos);
document
  .querySelector(".js-add-todo-fortoday")
  .addEventListener("pointerdown", addTodaysTodoWithDialog);

//All Todos
document
  .querySelector(".js-show-all-todos")
  .addEventListener("pointerdown", loadAllTodos);
document
  .querySelector(".js-add-todo")
  .addEventListener("pointerdown", addTodoWithDialog);


// Add project functionality
function createProjectTest() { const projectName = "test"; const projectTodos = [
    ["play amongus", "descriptionnn", new Date("2024-12-01T14:43"), "none", "test"],
    ["Fight back TODAY", "descrip", new Date(), "low", "test"],
    ["Walk dog", "description...", new Date("2024-12-19T16:44"), "medium", "test"],
    ["Car tomorrow", "description...", new Date("2024-12-02T23:59"), "high", "test"],
  ];
  let finalTodos = []; projectTodos.forEach((t) => { const todo = new Todo(t[0], t[1], t[2], t[3], t[4]); finalTodos.push(todo); });
  const newProject = new Project(projectName);
}
document.querySelector(".js-add-project-button").addEventListener("pointerdown", () => {
  // Validation logic to make sure space isnt written
  let projectName = prompt("Enter a project name: ");
  if (projectName === null) return;
  while (projectName === '' || projectName === ' ') {
    console.log(projectName);
    projectName = prompt("Please enter a VALID name: ");
    if (projectName === null) return;
  }
  new Project(projectName);
});
//Testing projects
document.querySelector("#testProject").addEventListener("pointerdown", createProjectTest)
