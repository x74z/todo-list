import { Project } from "../../classes/project-class";

export default function storeProjects() {
  const projectsArray = Project.getProjects();
  localStorage.setItem("projects", JSON.stringify(projectsArray));
}
