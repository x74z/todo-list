import "./styles.css";
import { createDefaultTodo, loadDefaultTodos } from "./load-default-project";
import { createTodayTodo, loadTodayTodos } from "./load-today-todos";
import { createTodo, loadAllTodos } from "./load-all-todos";

// TODO i should do one of these things:
// Make an actual dialog for adding todos, figure out how to get the dates, make it readable, unlike the library project.
//

// Loading default project
document.querySelector("#default-todos").addEventListener("pointerdown", loadDefaultTodos);
document.querySelector("#add-default-todo").addEventListener("pointerdown", createDefaultTodo);

// Todays todo
document.querySelector("#today").addEventListener("pointerdown", loadTodayTodos);
document.querySelector("#add-todays-todo").addEventListener("pointerdown", createTodayTodo);

//All Todos
document.querySelector("#all-todos").addEventListener("pointerdown", loadAllTodos);
document.querySelector("#add-todo").addEventListener("pointerdown", createTodo);
