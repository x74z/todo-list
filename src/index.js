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
// Add more stuff to the todo, change project, show which project it is
//  keep styling the page
//
//
// local storage feature
//
// //
// lowp: !clean up the code and add comments
//        split up add to dom module into different functions
//
// lowp: make it look good

// Loading default project
document
  .querySelector("#default-todos")
  .addEventListener("pointerdown", loadDefaultTodos);
document
  .querySelector("#add-default-todo")
  .addEventListener("pointerdown", addDefaultTodoWithDialog);

// Todays todo
document
  .querySelector("#today")
  .addEventListener("pointerdown", loadTodayTodos);
document
  .querySelector("#add-todays-todo")
  .addEventListener("pointerdown", addTodaysTodoWithDialog);

//All Todos
document
  .querySelector("#all-todos")
  .addEventListener("pointerdown", loadAllTodos);
document
  .querySelector("#add-todo")
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
document.querySelector("#add-project").addEventListener("pointerdown", () => {
  let projectName = prompt("Enter a project name: ");
  while (projectName === '' || projectName === null) {
    console.log(projectName);
    projectName = prompt("Please enter a VALID name: ");
  }
  new Project(projectName);
});
//Testing projects
document.querySelector("#testProject").addEventListener("pointerdown", createProjectTest)
