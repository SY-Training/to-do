

const headerBox = document.querySelector('.header-box');
const nav = document.querySelector('.nav');
const taskBox = document.querySelector('.task-box');


function Landing () {
    const projectTitle = document.createTextNode(`Projects`);
    nav.appendChild(projectTitle);

    const landingHeadText = document.createTextNode('Welcome');
    headerBox.appendChild(landingHeadText);

    const landingTaskText = document.createTextNode(`Hmm, you don't have any projects`);
    taskBox.appendChild(landingTaskText);

}



export {
    Landing

}