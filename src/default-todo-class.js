import { Todo } from "./todo-class";

export class DefaultTodo extends Todo {
    static todos = [
        // new DefaultTodo(
        //   "TestinArray",
        //   "this todo is in array to test loading projects",
        //   "November 24, 2024, 23:00",
        //   "high",
        // ),
    ];
    static getTodos() {
        return DefaultTodo.todos;
    }

    constructor(title, description, dueDate, priority) {
        super(title, description, dueDate, priority);
        DefaultTodo.todos.push(this);
    }
    removeTodo() {
        // Remove them from the main array and the child array.
        Todo.getTodos().splice(DefaultTodo.todos.indexOf(this), 1);
        DefaultTodo.getTodos().splice(DefaultTodo.todos.indexOf(this), 1);
    }
}

