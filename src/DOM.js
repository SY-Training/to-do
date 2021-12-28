import { myProjects, NewProjectPrompt, createTask, DeleteProject, } from "./index.js";

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
        pro.addEventListener("click", function(){LoadRightPane(`${obj.title}`)});
        pro.textContent = `${obj.title}`;
        // Add delete button.
        let del = document.createElement('button');
        del.setAttribute('class', 'proDel');
        del.textContent = "Delete Project";
        del.addEventListener("click", function() {DeleteProject(`${obj.title}`)})
        pro.appendChild(del);

        nav.appendChild(pro);
    })
    
}

function LoadRightPane(name) {

    if (taskBox.firstChild){
        taskBox.removeChild(taskBox.firstChild);
    }


    let newTask = document.createElement('button');
    newTask.setAttribute('class', 'newTask');
    newTask.textContent = `New Task`;
    newTask.addEventListener("click", function() {createTask(name);});
    taskBox.appendChild(newTask);
}

function UpdateTaskView(proName) {

    let projectList = myProjects();

    while (taskBox.firstChild){
        taskBox.removeChild(taskBox.lastChild);
    }

    projectList.forEach(obj => {
        if (obj.title === proName){

            let vals = Object.values(obj.tasks).forEach(task => {
                let taskList = document.createElement('div');
                taskList.setAttribute('class', 'taskList');
                let taskText = document.createTextNode(task);
                taskList.appendChild(taskText);
                // Adding checkbox to task.
                let check = document.createElement('input');
                check.setAttribute('type', 'checkbox');
                check.addEventListener('change', function() {
                    if (this.checked){
                        taskList.style.setProperty('text-decoration', 'line-through');
                    }
                })
                taskList.appendChild(check);
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