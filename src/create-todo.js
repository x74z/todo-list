class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
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
}
// console.log(new Todo("title", "very nice task", "tomorrow", "priority low", "default"))

export function createTodo(title, description, dueDate, priority) {
  return new Todo(title, description, dueDate, priority);
}
