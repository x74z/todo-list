export class Todo {
  static todos = [];
  static getTodos() {
    return Todo.todos;
  }
  constructor( title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
    this.project = project;
    // Add the todos to the class, for easy access. If i want to delete everything, i can.
    Todo.todos.push(this);
    console.log(Todo.getTodos());
  }
  setPriorityTo(newPriority) {
    this.priority = newPriority;
  }
  setTitleTo(newTitle) {
    this.title = newTitle;
  }
  setDescriptionTo(newDescription) {
    this.description = newDescription;
  }

  setDueDateTo(newDueDate) {
    this.dueDate = newDueDate;
  }
  removeTodo() {
    const indexOfTodo = Todo.todos.indexOf(this);
    Todo.getTodos().splice(indexOfTodo, 1);
  }
}
