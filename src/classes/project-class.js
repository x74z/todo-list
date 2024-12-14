import { showTodoCreationDialog } from "../create-todo-dialog";
import { addProjectToDom } from "../dom-modules/add-project-to-dom";
import { Todo } from "../classes/todo-class";
import clearTodos from "../dom-modules/clear-todos";
import setProjectTitleOfContent from "../dom-modules/set-current-projects-title";
import storeProjects from "../local-storage-functions/store/store-projects";
import addTodosArrayToDOM from "../dom-modules/add-todos-to-dom";

export class Project {
  // Here the projects will be stored as just names, since you only need the name
  // to search through the todos, and add them to the dom.
  static projects = [];
  static getProjects = ()=> Project.projects;
  constructor(projectName) {
    (()=>{
      // Only add the projects if the is no project with that name
      if (Project.projects.indexOf(projectName) !== -1){
        console.log(`"${projectName}" project already exists`); 
        return;
      }

      this.projectName = projectName;
      Project.projects.push(this.projectName);

      console.log(Project.projects);

      (() => {
        // Add the project to the navbar on creation
        addProjectToDom(this);
        // Save the projects aswell
        storeProjects();
        console.log(`PROJECTS this ${this}`);
      })();
      console.log(Project.projects);
    })();
    
  }
  getProjectTodos(){
    const thisProjectTodos = Todo.getTodos().filter((todo) => {
      if (todo.project !== this.projectName) return false;
      return true;
    });

    return thisProjectTodos;
  }

  addAllTodosToDOM() {
    // Loads all the of the todos with projectName === todo.project
    const thisProjectTodos = this.getProjectTodos();
    addTodosArrayToDOM(thisProjectTodos);
  }

  loadProjectTodos() {
    clearTodos();
    setProjectTitleOfContent(this.projectName);
    this.addAllTodosToDOM();
  }

  createTodo(title, description, dueDate, priority) {
    // this switches to the todos(load them) after making the new todo so they show up after making one
    const todo = new Todo( title, description, dueDate, priority,
      this.projectName, // Set the project property to the name.
    );
    // this.addTodoToProjectArray(todo);
    this.loadProjectTodos();
  }
  deleteProjectTodos() {
    // Get all the todos with the same project value as the projects name and delete them
    console.log(Todo.getTodos());
    Todo.todos = Todo.getTodos().filter((todo) => {
      if (todo.project !== this.projectName) return true;
      return false;
    });
  }
  deleteProject() {
    // This will delete the project from the Project.projects and AFTER that delete all the todos
    // from the project with a call to deleteProjectTodos
    const index = Project.projects.indexOf(this.projectName);
    Project.projects.splice(index, 1);
    this.deleteProjectTodos();
    // Store the new array without the delete projects
    storeProjects();
  }
  addTodoWithDialog() {
    // Show the dialog to add it, with the project as the argument, the 
    // handling of that object will be done by the function.
    showTodoCreationDialog(this);
  }
}
