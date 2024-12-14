import "./styles.css";
import {
  addDefaultTodoWithDialog,
  loadDefaultTodos,
} from "./loading-todos-without-projects/load-default-project";
import {
  addTodaysTodoWithDialog,
  loadTodayTodos,
} from "./loading-todos-without-projects/load-today-todos";
import {
  addTodoWithDialog,
  loadAllTodos,
} from "./loading-todos-without-projects/load-all-todos";
import { Project } from "./classes/project-class";
import { Todo } from "./classes/todo-class";
import loadProjectsFromStorage from "./local-storage-functions/getting-stored-objects/get-projects-from-storage";
import loadTodosFromStorage from "./local-storage-functions/getting-stored-objects/get-todos-from-storage";
import { addProjectToDom } from "./dom-modules/add-project-to-dom";
import getSavedProjects from "./local-storage-functions/getting-saved-items/get-saved-projects";
import getSavedTodos from "./local-storage-functions/getting-saved-items/get-saved-todos";

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


// This IIFE will run when loading the page
// it checks if there are values stored
// if true will create all of the projects and todos
(() => {
  const savedProjectsNames = getSavedProjects()
  if (savedProjectsNames !== null){
    savedProjectsNames.forEach((projectName) => {
      console.log(`PROJECTS SAVED = ${savedProjectsNames}`)
      // There is no need to add to dom since that is handled inside the class (maybe bad design????)
      new Project(projectName);
    });
  }

  const savedTodos = getSavedTodos();
  if(savedTodos !== null){
    savedTodos.forEach(todo => {
      new Todo(todo.title, todo.description, todo.dueDate, todo.priority, todo.projects);
    });

     // Show All todos when they are populated
    loadAllTodos();
  }
})();

// event listeners
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
function createProjectTest() {
  const projectName = "test";
  const projectTodos = [ [ "play amongus", "descriptionnn", new Date("2024-12-01T14:43"), "none", "test", ], ["Fight back TODAY", "descrip", new Date(), "low", "test"], [ "Walk dog", "description...", new Date("2024-12-19T16:44"), "medium", "test", ], [ "Car tomorrow", "description...", new Date("2024-12-02T23:59"), "high", "test", ] ];
  let finalTodos = [];
  projectTodos.forEach((t) => {
    const todo = new Todo(t[0], t[1], t[2], t[3], t[4]);
    finalTodos.push(todo);
  });
  const newProject = new Project(projectName);
}
document
  .querySelector(".js-add-project-button")
  .addEventListener("pointerdown", () => {
    // Validation logic to make sure space isnt written
    let projectName = prompt("Enter a project name: ");
    if (projectName === null) return;
    while (projectName === "" || projectName === " ") {
      console.log(projectName);
      projectName = prompt("Please enter a VALID name: ");
      if (projectName === null) return;
    }
    new Project(projectName);
  });
//Testing projects
document
  .querySelector("#testProject")
  .addEventListener("pointerdown", createProjectTest);
