import "./styles.css";
import { createDefaultTodo, loadDefaultTodos } from "./load-default-project";
import { loadTodayTodos } from "./load-today-todos";

// Code that will change between projects
// Loading default project
// createDefaultTodo("test", "default", "today", "high")
// createDefaultTodo("t2", "default", "today", "high")
document.querySelector("#default-todos").addEventListener("pointerdown", loadDefaultTodos);
document.querySelector("#add-default-todo").addEventListener("pointerdown", createDefaultTodo);

// Todays todo
document.querySelector("#today").addEventListener("pointerdown", loadTodayTodos);
