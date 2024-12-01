import { Todo } from "./todo-class";

export class TestTodo extends Todo {
  static todos = [];
  static getTodos() {
    return TestTodo.todos;
  }

  constructor(title, description, dueDate, priority) {
    super(title, description, dueDate, priority);
    TestTodo.todos.push(this);
  }
  removeTodo() {
    // Remove them from the main array and the child array.
    Todo.getTodos().splice(TestTodo.todos.indexOf(this), 1);
    TestTodo.getTodos().splice(TestTodo.todos.indexOf(this), 1);
  }
}
