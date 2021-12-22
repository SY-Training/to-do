import { myProjects, NewProjectPrompt } from "./index.js";

const headerBox = document.querySelector('.header-box');
const nav = document.querySelector('.nav');
const taskBox = document.querySelector('.task-box');
const newProject = document.querySelector('.newProject');


function Landing () {

    const landingHeadText = document.createTextNode('Welcome');
    headerBox.appendChild(landingHeadText);

    const landingTaskText = document.createTextNode(`Hmm, you don't have any projects`);
    taskBox.appendChild(landingTaskText);

    newProject.addEventListener('click', NewProjectPrompt);

}

function UpdateProjectView() {
    // get myProjects
    let projectList = myProjects();

    projectList.forEach(obj => {
        let pro = document.createElement('div');
        pro.setAttribute('class', 'projects');
        let proName = document.createTextNode(`${obj.title}`);
        pro.appendChild(proName);
        nav.appendChild(pro);
    })
    
    // ForEach project
    // createElement and add to nav.
}


export {
    Landing,
    UpdateProjectView,

}