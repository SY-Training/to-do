import projectFactory from "./index";

const content = document.querySelector('#content');
const projects = [];

function dom () {

    const projectList = document.createElement('div');
    projectList.setAttribute('class', 'projectList');
    projectList.innerHTML = `<p> TEST!!! </p>`;
    content.appendChild(projectList);

    const myButton = document.createElement('button');
    myButton.setAttribute('id', 'create');
    myButton.innerText = "Create";
    content.appendChild(myButton);

    myButton.addEventListener('click', addProject)

}

function addProject(){
    let proName = prompt("Project name: ");
    let proDesc = prompt("Description: ");
    let proDate = prompt("When is it due: ");

    let newPro = projectFactory(proName, proDesc, proDate);
    projects.push(newPro);

    console.log(projects);

    listProjects();

}

function listProjects() {

    const listTop = document.querySelector('.projectList');
    removeProjects();


    projects.forEach(obj =>{

        let pro = document.createElement('div');
        pro.setAttribute('class', 'project');

        // Create left side of project, name and desc.
        let proLeft = document.createElement('div');
        proLeft.setAttribute('class', 'proLeft');
        proLeft.innerHTML = `<p> ${obj.name} </p>`;
        let text = document.createTextNode(`${obj.description}`);
        proLeft.appendChild(text);
        pro.appendChild(proLeft);
        
        // Create right side of project, due date and create task.
        let proRight = document.createElement('div');
        proRight.setAttribute('class', 'proRight');
        let dueDate = document.createElement('div')
        dueDate.setAttribute('class', 'dueDate');
        dueDate.innerHTML = `${obj.due}`;
        proRight.appendChild(dueDate);
        pro.appendChild(proRight);

        let newTask = document.createElement('button');
        newTask.setAttribute('class', 'newTask');
        newTask.textContent = `+`;
        proRight.appendChild(newTask);

        // Add all to project list.
        listTop.appendChild(pro);      

    });
}

function removeProjects() {
    const list = document.querySelector('.projectList');
    while (list.firstChild){
        list.removeChild(list.lastChild);
    }
    
}

export { 
    dom,
    addProject,

}