export default function getSavedProjects() {
  const projectsArray = JSON.parse(localStorage.getItem("projects"));
  console.log(projectsArray)
  return projectsArray;
}
