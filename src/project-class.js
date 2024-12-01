import { addProjectToDom, addTodoToDOM } from "./add-to-dom";
import { showDialog } from "./create-todo-dialog";
import { Todo } from "./todo-class";

export class Project {
  static projects = {};
  constructor(projectName, todosInsideProject) {
    this.projectName = projectName;
    this.todos = todosInsideProject; // Should be array
    // Add the project name as a:    projectName: todos.
    //
    Project.projects[this.projectName] = this.todos;

    (() => {
      // Add the project to the navbar on creation
      addProjectToDom(this);
    })();
  }

  addAllTodosToDOM() {
    const thisProjectTodos = Todo.getTodos().filter((todo) => {
      if (todo.project !== this.projectName) return false;
      return true;
    });
    thisProjectTodos.forEach((todo) => addTodoToDOM(todo));
  }

  loadAllTodos() {
    document.querySelector("#todos").innerHTML = "";
    this.addAllTodosToDOM();
  }

  createTodo(title, description, dueDate, priority) {
    // Switch to the todos(load them) after making the new todo
    this.loadAllTodos();
    const todo = new Todo(title, description, dueDate, priority, this.projectName);
    this.addTodoToProjectArray(todo);
    addTodoToDOM(todo);
  }
  addTodoWithDialog() {
    showDialog(this);
  }
  addTodoToProjectArray(todo) {
    Project.projects[this.projectName].push(todo);
  }
}
