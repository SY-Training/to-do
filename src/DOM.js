import projectFactory from "./index";

const content = document.querySelector('#content');
const projects = [];

function dom () {

    const projectList = document.createElement('div');
    projectList.setAttribute('class', 'projectList');
    projectList.innerHTML = `<p> TEST!!! </p>`;
    content.appendChild(projectList);

    const myButton = document.createElement('button');
    myButton.setAttribute('id', 'mybutton');
    myButton.innerText = "Create";
    content.appendChild(myButton);

    myButton.addEventListener('click', addProject)

}

function addProject(){
    let proName = prompt("Project name: ");
    let proDesc = prompt("Description: ");

    let newPro = projectFactory(proName, proDesc);
    projects.push(newPro);

    console.log(projects);

    listProjects();

}

function listProjects() {

    const listTop = document.querySelector('.projectList');
    removeProjects();


    projects.forEach(obj =>{
        let pro = document.createElement('div');
        pro.innerHTML = `<p> ${obj.name} </p>`;
        let text = document.createTextNode(`${obj.description}`);
        pro.appendChild(text);
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