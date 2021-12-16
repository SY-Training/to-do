function projectFactory (name, description = ""){

    const projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'project');

    return {
        projectDiv,
        setName(name){
            const proName = document.createTextNode(name);
            projectDiv.appendChild(proName);
        },
        setDescription(description){
            const descBox = document.createElement('div');
            descBox.setAttribute('class', 'descBox');
            const proDesc = document.createTextNode(description);
            descBox.appendChild(proDesc);
            projectDiv.appendChild(descBox);
        }

    }

}

export default projectFactory;