import "./styles.css";
import { createTodo } from "./create-todo";
import { createDefaultTodo, loadDefaultTodos } from "./load-default-project";

// Code that will change between projects
// Loading default project
createDefaultTodo("test", "default", "today", "high")
createDefaultTodo("t2", "default", "today", "high")
document.querySelector("#default-todos").addEventListener("pointerdown", () => {
  loadDefaultTodos();
});
