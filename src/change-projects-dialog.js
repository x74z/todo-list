import { Project } from "./classes/project-class";

// This function is just to add the close functionality
(function () {
  const dialog = document.querySelector(".js-change-project-dialog");
  document .querySelector(".js-change-project-dialog-close-button") .addEventListener("pointerdown", () => {
      dialog.close();
    });
})();

export default function showChangeProjectDialog(todoObject){
  const dialog = document.querySelector(".js-change-project-dialog");
  dialog.showModal();
  const form = document.querySelector(".js-change-project-form")
  const selectElement = document.querySelector(".js-change-project-select-element");

  // Populate all of the options
  (()=>{
    const projects = Project.getProjects();
    // Before setting the project first clean them, so there arent duplicates
    selectElement.innerHTML = "";

    projects.forEach((project)=>{
      const newOption = document.createElement("option");
      newOption.value = project;
      newOption.textContent = project;
      selectElement.appendChild(newOption);
    })
  })();

  function handleSubmit(e){
    e.preventDefault()
    todoObject.setProjectTo(form.project.value)
    dialog.close();
    form.removeEventListener("submit", handleSubmit);
    }

  

form.addEventListener("submit", handleSubmit);
}
