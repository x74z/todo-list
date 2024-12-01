import "./styles.css";
import { addDefaultTodoWithDialog, loadDefaultTodos } from "./load-default-project";
import { addTodaysTodoWithDialog, loadTodayTodos } from "./load-today-todos";
import { addTodoWithDialog, loadAllTodos } from "./load-all-todos";

// TODO i should do one of these things:
//
// !!Figure out how to make more projects 
//
// lowp: !clean up the code and add comments
// lowp: make it look good
// bug? sometimes the Invalid date bug comes back...

// Loading default project
document.querySelector("#default-todos").addEventListener("pointerdown", loadDefaultTodos);
document.querySelector("#add-default-todo").addEventListener("pointerdown", addDefaultTodoWithDialog);

// Todays todo
document.querySelector("#today").addEventListener("pointerdown", loadTodayTodos);
document.querySelector("#add-todays-todo").addEventListener("pointerdown", addTodaysTodoWithDialog);

//All Todos
document.querySelector("#all-todos").addEventListener("pointerdown", loadAllTodos);
document.querySelector("#add-todo").addEventListener("pointerdown", addTodoWithDialog);
