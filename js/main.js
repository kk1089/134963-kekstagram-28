/* eslint-disable no-unused-vars */
import { setPictureListener, renderPictures } from './miniatures.js';
import { setupForm, setOnFormSubmit, hideModal } from './form.js';
import { setEffectsSlider } from './effects.js';
import { setScaleListener } from './scale.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import {showErrorMessage,showSuccessMessage} from './form-mesage.js';

setEffectsSlider();
setScaleListener();
setupForm();
setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  renderPictures(data);
  setPictureListener(data);
} catch (err) {
  showAlert(err.message);
}

