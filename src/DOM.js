function dom () {

    const content = document.querySelector('#content');

    const projectList = document.createElement('div');
    projectList.setAttribute('class', 'projectList');
    projectList.innerHTML = `<p> TEST </p>`;
    content.appendChild(projectList);

}

export default dom;