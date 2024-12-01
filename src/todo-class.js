export class Todo {
  static todos = [];
  static getTodos() {
    return Todo.todos;
  }
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    console.log(dueDate)
    this.dueDate = new Date(dueDate);
    console.log(this.dueDate)
    this.priority = priority;
    // Add the todos to the class, for easy access. If i want to delete everything, i can.
    Todo.todos.push(this);
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
// console.log(new Todo("title", "very nice task", "tomorrow", "priority low", "default"))

// export function createTodo(title, description, dueDate, priority) {
//   return new Todo(title, description, dueDate, priority);
// }
