import getSavedProjects from "../getting-saved-items/get-saved-projects"

export default function getProjectsFromStorage() {
  // This will load the projects into the Project.projects array
  let projectsArray = [];
  const savedProjects = getSavedProjects();
  if (savedProjects !== null) projectsArray = savedProjects;
  return projectsArray;
}
