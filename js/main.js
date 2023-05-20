import {createObjects} from './data.js';
import {setPIctureListener, renderPictures} from './miniatures.js';


const data = createObjects();
setPIctureListener(data);
renderPictures(data);

