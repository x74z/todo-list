import { showTodoCreationDialog } from "../create-todo-dialog";
import { addTodoToDOM } from "../dom-modules/add-todo-to-dom";
import { addProjectToDom } from "../dom-modules/add-project-to-dom";
import { Todo } from "../classes/todo-class";

export class Project {
  static projects = [];
  constructor(projectName) {
    this.projectName = projectName;
    // I dont seem to need these, i only need to know the project exists
    // Since when pressing the button it loops through the Todo.todos, i dont need to keep another one
    // So keep this empty for now, TODO: remove this
    this.todos = []; // Should be array
    // I dont need to store them again 2
    // Project.projects[this.projectName] = this.todos;
    Project.projects.push(this.projectName);
    console.log(Project.projects);

    (() => {
      // Add the project to the navbar on creation
      addProjectToDom(this);
    })();
    console.log(Project.projects);
  }

  addAllTodosToDOM() {
    // Loads all the of the todos with projectName === todo.project
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
    // this switches to the todos(load them) after making the new todo so they show up after making one
    this.loadAllTodos();
    const todo = new Todo( title, description, dueDate, priority,
      this.projectName, // Set the project property to the name.
    );
    // this.addTodoToProjectArray(todo);
    addTodoToDOM(todo);
  }
  deleteProjectTodos() {
    console.log(Todo.getTodos());
    Todo.todos = Todo.getTodos().filter((todo) => {
      if (todo.project !== this.projectName) return true;
      return false;
    });
  }
  deleteProject() {
    const index = Project.projects.indexOf(this.projectName);
    Project.projects.splice(index, 1);
    this.deleteProjectTodos();
  }
  addTodoWithDialog() {
    showTodoCreationDialog(this);
  }
  // Same as constructor, i no longer need this
  // addTodoToProjectArray(todo) {
  //   Project.projects[this.projectName].push(todo);
  // }
}
