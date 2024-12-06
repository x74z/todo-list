function createLoadProjectButton(projectObject) {
  const button = document.createElement("button");
  button.textContent = projectObject.projectName;
  button.type = "button";
  button.className = "load-project-button";
  button.id = `${projectObject.projectName}-todos`;
  // If i dont have this inside an arrow function, this will be the button
  button.addEventListener("pointerdown", () => projectObject.loadAllTodos());
  return button;
}
function createAddProjectTodoButton(projectObject) {
  const button = document.createElement("button");
  button.textContent = "+";
  button.type = "button";
  button.className = "add-project-todo-button";
  button.id = `add-${projectObject.projectName}-todo`;
  button.addEventListener("pointerdown", () =>
    // If i dont have this inside an arrow function, this will be the button
    projectObject.addTodoWithDialog(),
  );
  return button;
}
function createDeleteProjectButton(projectObject) {
  const button = document.createElement("button");
  button.textContent = "x";
  button.type = "button";
  button.className = "remove-project-button";
  button.id = `remove-${projectObject.projectName}-project`;

  return button;
}

export function addProjectToDom(projectObject) {
  const projectButton = createLoadProjectButton(projectObject);
  const addTodoButton = createAddProjectTodoButton(projectObject);
  const deleteProjectButton = createDeleteProjectButton(projectObject);
  const nav = document.querySelector("#navbar");
  const projectDiv = document.createElement("div");
  projectDiv.className = "projects";
  projectDiv.append(deleteProjectButton, projectButton, addTodoButton);
  nav.appendChild(projectDiv);
  // Add the event listener for the delete project button
  deleteProjectButton.addEventListener("pointerdown", () => {
    // If i dont have this inside an arrow function, this will be the button
    projectObject.deleteProject();
    projectDiv.remove();
  });
}
