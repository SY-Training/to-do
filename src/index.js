import './style.css';
import {Landing, UpdateProjectView} from './DOM.js'

Landing();


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

}

function CreateProject(title) {
    return {
        title
    }
}

export {
    myProjects,
    NewProjectPrompt,
}
