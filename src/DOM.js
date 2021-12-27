import { myProjects, NewProjectPrompt, createTask } from "./index.js";

const headerBox = document.querySelector('.header-box');
const nav = document.querySelector('.projectList');
const taskBox = document.querySelector('.task-box');
const newProject = document.querySelector('.newProject');


function Landing () {

    const landingHeadText = document.createTextNode('Welcome');
    headerBox.appendChild(landingHeadText);

    const landingTaskText = document.createTextNode(`Create a project, then add tasks here!`);
    taskBox.appendChild(landingTaskText);

    newProject.addEventListener('click', NewProjectPrompt);

}

function UpdateProjectView() {

    let projectList = myProjects();

    while (nav.firstChild){
        nav.removeChild(nav.lastChild);
    }

    projectList.forEach(obj => {
        let pro = document.createElement('button');
        pro.setAttribute('id', `${obj.title}`);
        pro.setAttribute('class', 'projects');
        pro.addEventListener("click", LoadRightPane);
        pro.textContent = `${obj.title}`;
        nav.appendChild(pro);
    })
    
}

function LoadRightPane(e) {

    if (taskBox.firstChild){
        taskBox.removeChild(taskBox.firstChild);
    }


    let newTask = document.createElement('button');
    newTask.setAttribute('class', 'newTask');
    newTask.textContent = `New Task`;
    taskBox.appendChild(newTask);
    console.log(e.currentTarget.id);
    newTask.addEventListener('click', createTask(e.currentTarget.id));
    // update view with tasks. 

}

function UpdateTaskView(proName) {
    // List tasks pertaining to project.

    //project name does work here.

    let projectList = myProjects();

    while (taskBox.firstChild){
        taskBox.removeChild(taskBox.lastChild);
    }

    projectList.forEach(obj => {
        if (obj.title === proName){
            //console.log(obj.tasks);

            let vals = Object.values(obj.tasks).forEach(task => {
                let taskList = document.createElement('div');
                taskList.setAttribute('class', 'taskList');
                let taskText = document.createTextNode(task);
                taskList.appendChild(taskText);
                taskBox.appendChild(taskList);
            })            
            
        }
    })

}

export {
    Landing,
    UpdateProjectView,
    UpdateTaskView,

}