// This function is just to add the close functionality
(function () {
  const dialog = document.querySelector("body > dialog");
  document
    .querySelector("#dialog-close-button")
    .addEventListener("pointerdown", () => {
      dialog.close();
    });
})();

function clearForm() {
  const form = document.querySelector("body > dialog > div > form");
  form.title.value = "";
  form.description.value = "";
  form.date.value = "";
  // I have to figure out how to set No priority as the default from here
  // form.priority.value = "";
}
//Maybe change the name to express the createTodoFunctionality
export function showDialog(createTodoFunction) {
  // This function will show the dialog and add an event listener for the create Todo button
  // When that button gets clicker, the parameter of the function(That creates a new todo, specified by the caller)
  // will create a new todo, hopefully
  const dialog = document.querySelector("body > dialog");
  dialog.showModal();

  const form = document.querySelector("body > dialog > div > form");
  function handleClick(e) {
    e.preventDefault();
    // This will get the form values to the create Todo function when called
    const todoTitle = form.title.value;
    const todoDescription = form.description.value;
    const todoDate = form.date.value;
    const todoPriority = form.priority.value;
    createTodoFunction(todoTitle, todoDescription, todoDate, todoPriority);
    dialog.close();
    clearForm();
    // Make sure it doesnt add the event listener every single time.
    // this removes it to prevent 3 event listeners or more at the same time
    form.removeEventListener("submit", handleClick);
  }

  // Add the event listener
  form.addEventListener("submit", handleClick);

}

// ALL OF THIS IS ME TRYING TO MAKE A DIALOG PROGRAMATICALLY, SO ILL KEEP IT TO LAUGH AT IT LATER

// function addTitleElement(titleDiv, dialog) {
//   const dialogTitle = document.createElement("h2");
//   dialogTitle.textContent = "Add a new Todo";
//   const closeButton = document.createElement("button");
//   closeButton.textContent = "X";
//   closeButton.addEventListener("pointerdown", () => {
//     dialog.close();
//     dialog.remove();
//   });
//   titleDiv.append(dialogTitle, closeButton);
// }
// const formHandler = (() => {
//   function addFormSelectPriorities(formSelectElement) {
//     const highPriorityOption = document.createElement("option");
//     highPriorityOption.textContent = "High Priority";
//     highPriorityOption.value = "high";
//     const mediumPriorityOption = document.createElement("option");
//     mediumPriorityOption.textContent = "Medium Priority";
//     mediumPriorityOption.value = "medium";
//     const lowPriorityOption = document.createElement("option");
//     lowPriorityOption.textContent = "Low Priority";
//     lowPriorityOption.value = "low";
//     const noPriorityOption = document.createElement("option");
//     noPriorityOption.textContent = "No Priority";
//     noPriorityOption.value = "none";
//     formSelectElement.append(
//       highPriorityOption,
//       mediumPriorityOption,
//       lowPriorityOption,
//       noPriorityOption,
//     );
//   }
//   function setFormElementsProperties(
//     titleInput,
//     descriptionInput,
//     dateInput,
//     priorityInput,
//     submitButton,
//   ) {
//     titleInput.name = "title";
//     titleInput.type = "text";
//     titleInput.required = true;

//     descriptionInput.name = "description";
//     descriptionInput.type = "text";
//     descriptionInput.required = false;

//     dateInput.name = "date";
//     dateInput.type = "date";
//     dateInput.required = true;

//     priorityInput.name = "priority";
//     priorityInput.required = true;

//     submitButton.type = "submit";
//     submitButton.textContent = "Create Todo";
//   }
//   function addFormElements(form, dialog) {
//     const titleInput = document.createElement("input");
//     const descriptionInput = document.createElement("input");
//     const dateInput = document.createElement("input");
//     const priorityInput = document.createElement("select");
//     // This function add all the <option> Elements
//     addFormSelectPriorities(priorityInput);
//     const submitButton = document.createElement("button");
//     submitButton.id = "submit-button";

//     // This function will set all the properties for the elements in the form
//     setFormElementsProperties(
//       titleInput,
//       descriptionInput,
//       dateInput,
//       priorityInput,
//       submitButton,
//     );
//     form.append(
//       titleInput,
//       descriptionInput,
//       dateInput,
//       priorityInput,
//       submitButton,
//     );
//   }
//   return { addFormElements };
// })();
// function createTodoDialog(createTodoFunction) {
//   const body = document.querySelector("body");
//   // Create all the dialog
//   const dialog = document.createElement("dialog");
//   dialog.open = true;
//   const dialogContent = document.createElement("div");
//   // Title content
//   const dialogTitleDiv = document.createElement("div");
//   addTitleElement(dialogTitleDiv, dialog);
//   dialogContent.appendChild(dialogTitleDiv);

//   // Form content
//   const dialogForm = document.createElement("form");
//   dialogForm.method = "dialog";
//   formHandler.addFormElements(dialogForm, dialog);
//   dialogContent.append(dialogTitleDiv, dialogForm);
//   dialog.append(dialogContent);
//   body.appendChild(dialog);

//   // This event listener will store the form results in a variable inside formHandler
//   // that way i can access it with another function
//   document.querySelector("#submit-button").addEventListener("pointerdown", (e) => {
//       e.preventDefault();
//       const form = document.querySelector("body > dialog > div > form");
//       const todoTitle = form.title.value;
//       const todoDescription = form.description.value;
//       const todoDate = form.date.value;
//       const todoPriority = form.priority.value;
//       createTodoFunction(todoTitle, todoDescription, todoDate, todoPriority)

//     });
// }
