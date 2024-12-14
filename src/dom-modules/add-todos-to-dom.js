import { addTodoToDOM } from "./add-todo-to-dom";

export default function addTodosArrayToDOM(todosArray) {
    // TODO: Make every todo in order
    // Date: Overdue -> Today -> Tomorrow...
  const orderedTodos = sortTodosByPriority(todosArray);
  orderedTodos.forEach((todo) => addTodoToDOM(todo));
}

function sortTodosByPriority(todosArray) {
  let orderedTodos = todosArray.sort((a, b) => {
    // This will turn the prioritys into numbers, and sort them: High = 1, medium = 2...
    let firstNumberPriorityInNumber;
    if (a.priority === "high") firstNumberPriorityInNumber = 1;
    else if (a.priority === "medium") firstNumberPriorityInNumber = 2;
    else if (a.priority === "low") firstNumberPriorityInNumber = 3;
    else if (a.priority === "none") firstNumberPriorityInNumber = 4;

    let secondNumberPriorityInNumber;
    if (b.priority === "high") secondNumberPriorityInNumber = 1;
    else if (b.priority === "medium") secondNumberPriorityInNumber = 2;
    else if (b.priority === "low") secondNumberPriorityInNumber = 3;
    else if (b.priority === "none") secondNumberPriorityInNumber = 4;

    return firstNumberPriorityInNumber - secondNumberPriorityInNumber;
  });
  return orderedTodos;
}
