import "./styles.css";
import {
  addDefaultTodoWithDialog,
  loadDefaultTodos,
} from "./load-default-project";
import { addTodaysTodoWithDialog, loadTodayTodos } from "./load-today-todos";
import { addTodoWithDialog, loadAllTodos } from "./load-all-todos";
import { Project } from "./project-class";
import { Todo } from "./todo-class";

// TODO i should do one of these things:
//
//!!!!Make it so that when deleting a todo it gets deleted from the project array
//
// Add more stuff to the todo, change project, show which project it is
// color it according to the priority etc
// //
// lowp: !clean up the code and add comments
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
function createProjectTest() {
  const projectName = "test";
  const projectTodos = [
    ["n", "n", new Date("2024-12-01T14:43"), "none", "test"],
    ["d1", "d1", new Date("2024-12-12T14:43"), "none", "test"],
    ["d2", "d2", new Date("2024-12-19T16:44"), "high", "test"],
    ["tomorrow n", "afds", new Date("2024-12-02T23:59"), "high", "test"],
  ];
  let finalTodos = [];
  projectTodos.forEach((t) => {
    const todo = new Todo(t[0], t[1], t[2], t[3], t[4]);
    finalTodos.push(todo);
  });
  const newProject = new Project(projectName, finalTodos);
}
document.querySelector("#add-project").addEventListener("pointerdown", () => {
  new Project(prompt("name"), []);
});
//Testing projects
document.querySelector("#testProject").addEventListener("pointerdown", createProjectTest)
