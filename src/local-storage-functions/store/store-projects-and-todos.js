import storeProjects from "./store-projectsojects";
import storeTodos from "./store/store-todoss";

export default function storeTodosAndProjects() {
  storeTodos();
  storeProjects();
}
