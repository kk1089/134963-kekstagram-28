import { setPictureListener, renderPictures } from './miniatures.js';
import { setupForm, setOnFormSubmit, hideModal, unblockSubmitButton } from './form.js';
import { setEffectsSlider } from './effects.js';
import { setScaleListener } from './scale.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { showErrorMessage, showSuccessMessage } from './form-message.js';
import { showFilters, setDebouncedSort } from './filters.js';
import { previewPicture } from './upload.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  } finally {
    unblockSubmitButton();
  }
});

try {
  const data = await getData();
  setPictureListener(data);
  setupForm(data);
  setScaleListener();
  setEffectsSlider();
  showFilters();
  previewPicture();
  renderPictures(data);
  setDebouncedSort(data);
} catch (err) {
  showAlert(err.message);
}


