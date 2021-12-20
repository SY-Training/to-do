import { dom } from './DOM.js';
import './style.css';

dom();

// Change prompt to html form. 
// add due date. 
// add priority colour.
// Add tasks which add to the object

// Maybe add regex in title to limit char ammount.
  // -- same for desc.


function projectFactory (name, description, due) {
    
    return {name, description, due};
}

export default projectFactory;

