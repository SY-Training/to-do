import { dom } from './DOM.js';
import './style.css';

dom();

// Change prompt to html form. 
// add due date. 
// add priority colour.
// Add tasks which add to the object


function projectFactory (name, description) {
    
    return {name, description};
}

export default projectFactory;

