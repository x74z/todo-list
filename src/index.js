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
// !!Figure out how to make more projects
//
// lowp: !clean up the code and add comments
// lowp: make it look good
// bug? sometimes the Invalid date bug comes back...

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
document.querySelector("#add-project").addEventListener("pointerdown", () => {
  const projectName = "test";
  const projectTodos = [
    {
      title: "n",
      description: "n",
      dueDate: new Date("2024-12-01T14:43"),
      priority: "none",
      project: "test",
    },
    {
      title: "d1",
      description: "d1",
      dueDate: new Date("2024-12-12T14:43"),
      priority: "none",
      project: "test",
    },
    {
      title: "d2",
      description: "d2",
      dueDate: new Date("2024-12-19T16:44"),
      priority: "high",
      project: "test",
    },
    {
      title: "tomorrow n",
      description: "afds",
      dueDate: new Date("2024-12-02T23:59"),
      priority: "high",
      project: "test",
    },
  ];
  projectTodos.forEach((t) => {
    Todo.todos.push(t);
  });
  const newProject = new Project(projectName, projectTodos);
});
