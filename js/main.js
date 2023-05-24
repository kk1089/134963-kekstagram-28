import {createObjects} from './data.js';
import {setPIctureListener, renderPictures} from './miniatures.js';
import {hideModal} from './form.js';

const data = createObjects();
setPIctureListener(data);
renderPictures(data);
hideModal();

