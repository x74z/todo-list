import { getTodaysDateInDatetimelocal } from "./format-date-for-todos";

// This function is just to add the close functionality
(function () {
  const dialog = document.querySelector(".js-add-todo-dialog");
  document .querySelector(".js-add-todo-dialog-close-button") .addEventListener("pointerdown", () => {
      dialog.close();
    });
})();

function clearForm() {
  const form = document.querySelector(".js-add-todo-dialog-form");
  form.title.value = "";
  form.description.value = "";
  form.date.value = "";
  // TODO: I have to figure out how to set No priority as the default from here
  // form.priority.value = "";
}


export function showTodoCreationDialog(projectObject) {
  // This function will show the dialog and add an event listener for the create Todo button
  // When that button gets clicker, the parameter of the function(That creates a new todo, specified by the caller)
  // will create a new todo, hopefully
  const dialog = document.querySelector(".js-add-todo-dialog");
  const form = document.querySelector(".js-add-todo-dialog-form");

  // Set the default date to today.
  form.date.value = getTodaysDateInDatetimelocal();
  dialog.showModal();

  function handleSubmit(e) {
    e.preventDefault();
    const todoTitle = form.title.value;
    const todoDescription = form.description.value;
    const todoDate = form.date.value;
    const todoPriority = form.priority.value;
    // (() => {
    projectObject.createTodo(todoTitle, todoDescription, todoDate, todoPriority);
    // })();
    dialog.close();
    clearForm();


    form.removeEventListener("submit", handleSubmit);
  }

  // Add the event listener
  form.addEventListener("submit", handleSubmit);
}

// The difference between this function and the one for projects is that when
// a new dialog is open, it calls the createTodo function without a project, this way
// the todo gets added to the Todo.todos right away.
export function showTodoCreationDialogForNonProjects(createTodoFunction){

  const dialog = document.querySelector(".js-add-todo-dialog");
  const form = document.querySelector(".js-add-todo-dialog-form");

  form.date.value = getTodaysDateInDatetimelocal();
  dialog.showModal();

  function handleSubmit(e) {
    e.preventDefault();
    const todoTitle = form.title.value;
    const todoDescription = form.description.value;
    const todoDate = form.date.value;
    const todoPriority = form.priority.value;
    // (() => {
    createTodoFunction(todoTitle, todoDescription, todoDate, todoPriority);
    // })();
    dialog.close();
    clearForm();


    // Without removing this event listener, the next time you click it will add 2, then 3 todos...
    form.removeEventListener("submit", handleSubmit);
  }

  // Add the event listener
  form.addEventListener("submit", handleSubmit);
}

//Check the projects branch for the dialog creation code
