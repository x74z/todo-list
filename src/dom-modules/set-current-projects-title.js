export default function setProjectTitleOfContent(newTitle){
  const titleInDOM = document.querySelector(".js-current-project");
  titleInDOM.textContent = newTitle;
}
