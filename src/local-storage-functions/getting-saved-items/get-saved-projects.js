export default function getSavedProjects() {
  const projectsArray = localStorage.getItem("projects");
  console.log(projectsArray);
  return projectsArray;
}
