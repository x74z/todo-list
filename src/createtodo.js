import { addToDOM } from "./addtoDOM";

class Todo {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
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

  setProjectTo(newProject) {
    this.project = newProject;
  }
}
// console.log(new Todo("title", "very nice task", "tomorrow", "priority low", "default"))

export function createTodo(title, description, dueDate, priority, project) {
  const todo = new Todo(title, description, dueDate, priority, project);
  addToDOM(todo);
}
