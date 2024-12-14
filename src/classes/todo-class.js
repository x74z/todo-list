import storeTodos from "../local-storage-functions/store/store-todos";

export class Todo {
  static todos = [];
  static getTodos() {
    return Todo.todos;
  }
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
    this.project = project;
    // Add the todos to the class, for easy access. If i want to delete everything, i can.
    Todo.todos.push(this);
    console.log(Todo.getTodos());

    // Save the todos with this new todo included
    (() => {
      storeTodos();
    })();
  }
  setPriorityTo(newPriority) {
    this.priority = newPriority;
    storeTodos();
  }
  setTitleTo(newTitle) {
    this.title = newTitle;
    storeTodos();
  }
  setDescriptionTo(newDescription) {
    this.description = newDescription;
    storeTodos();
  }

  setDueDateTo(newDueDate) {
    this.dueDate = newDueDate;
    storeTodos();
  }
  setProjectTo(newProject) {
    this.project = newProject;
    storeTodos();
  }
  removeTodo() {
    const indexOfTodo = Todo.todos.indexOf(this);
    Todo.getTodos().splice(indexOfTodo, 1);

    storeTodos();
  }
}
