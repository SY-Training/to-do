import "./style.css";
import { Landing, UpdateProjectView, UpdateTaskView } from "./DOM.js";

// TO DO
// - Implement saving. - Finish off

// when selecting object, clicking a new task button will add a task to that project.
// So selecting a project will load it in task view.
// THEN, clicking new task will have the object selected.
// projects[i].task = taskDescription.

const projects = [];

function myProjects() {
  return projects;
}

function NewProjectPrompt() {
  let title = prompt("Project Title: ");

  const newProject = CreateProject(title);
  projects.push(newProject);
  console.log(projects);

  UpdateProjectView();
  saveToLocalStorage();
}

function CreateProject(title) {
  return {
    title,
    tasks: {},
  };
}

function DeleteProject(name) {
  const index = projects.findIndex((pro) => {
    return pro.title === name;
  });

  projects.splice(index, 1);
  saveToLocalStorage();
  UpdateProjectView();
}

function createTask(proName) {
  let description = prompt("Task: ");
  // let due date.
  let t = 0;

  projects.forEach((obj) => {
    if (obj.title == proName) {
      let size = Object.keys(obj.tasks).length;

      /*  -- This is if I don't want to use the nested object for tasks. 
                    Also remove nexted prop from create project. 
                    And change obj.tasks to just obj above.

            for (let i = 0; i < size; i++){
                obj[`task${i}`] = description;
            }
            */

      for (t = 0; t < size; t++) {}

      obj.tasks[`task${t}`] = description;
    }
  });

  UpdateTaskView(proName);
}

function DeleteTask(name) {
  console.log(name);
}

const saveToLocalStorage = () => {
  //localStorage.setItem("projects", JSON.stringify(projects));

  const saveProjects = JSON.stringify(projects);
  localStorage.setItem("projects", saveProjects);
};

const loadLocalStorage = () => {
  if (projects.length > 0) {
    //JSON.parse(localStorage.getItem("projects"));

  } else {
    const str = localStorage.getItem("projects");
    const parseProjects = JSON.parse(str);

    for (let i = 0; i < parseProjects.length; i++){
      projects.push(parseProjects[i]);
    }
  }
};

loadLocalStorage();
Landing();

export { myProjects, NewProjectPrompt, createTask, DeleteProject, DeleteTask };
