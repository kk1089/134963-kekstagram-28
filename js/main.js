import {createObjects} from './data.js';
import {setPictureListener, renderPictures} from './miniatures.js';
import {setupForm} from './form.js';
import {setEffectsSlider} from './effects.js';
import {setScaleListener} from './scale.js';

const data = createObjects();
setPictureListener(data);
renderPictures(data);
setEffectsSlider();
setScaleListener();
setupForm();

