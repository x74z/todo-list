function createProjectButton(projectObject) {
  const button = document.createElement("button");
  button.textContent = projectObject.projectName;
  button.type = "button";
  button.id = `${projectObject.projectName}-todos`;
  button.addEventListener("pointerdown", () => projectObject.loadAllTodos());
  return button;
}
function createProjectAddTodoButton(projectObject) {
  const button = document.createElement("button");
  button.textContent = "+";
  button.type = "button";
  button.id = `add-${projectObject.projectName}-todo`;
  button.addEventListener("pointerdown", () =>
    projectObject.addTodoWithDialog(),
  );
  return button;
}

export function addProjectToDom(projectObject) {
  const projectButton = createProjectButton(projectObject);
  const addTodoButton = createProjectAddTodoButton(projectObject);
  const nav = document.querySelector("#navbar");
  const projectDiv = document.createElement("div");
  projectDiv.className = "projects";
  projectDiv.append(projectButton, addTodoButton);
  nav.appendChild(projectDiv);
}
