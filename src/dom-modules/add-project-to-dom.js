function createLoadProjectButton(projectObject) {
  const button = document.createElement("button");
  button.textContent = projectObject.projectName;
  button.type = "button";
  button.className = "projects__load-button";
  button.id = `${projectObject.projectName}-todos`;
  // If i dont have this inside an arrow function, this will be the button
  button.addEventListener("pointerdown", () => projectObject.loadProjectTodos());
  return button;
}
function createAddProjectTodoButton(projectObject) {
  const button = document.createElement("button");
  button.textContent = "+";
  button.type = "button";
  button.className = "projects__add-todo-button";
  // button.id = `add-${projectObject.projectName}-todo`;
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
  button.classList = `projects__remove-button js-project-remove-button`;

  return button;
}

// TODO: maybe move all of the above to their module???
// Main function
export function addProjectToDom(projectObject) {
  const projectButton = createLoadProjectButton(projectObject);
  const addTodoButton = createAddProjectTodoButton(projectObject);
  const deleteProjectButton = createDeleteProjectButton(projectObject);
  const projectsContainer = document.querySelector(".js-projects-container");
  const projectDiv = document.createElement("div");
  projectDiv.className = "projects__project";
  projectDiv.append(deleteProjectButton, projectButton, addTodoButton);
  projectsContainer.appendChild(projectDiv);

  // If moved outside to the create button i would need to pass projectDiv as an argument
  deleteProjectButton.addEventListener("pointerdown", () => {
    // If i dont have this inside an arrow function, this will be the button
    projectObject.deleteProject();
    projectDiv.remove();
  });
}
