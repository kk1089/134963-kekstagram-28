import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { isEscapeKey } from './util.js';

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const overlay = document.querySelector('.img-upload__overlay');
const uploadCancelButton = document.querySelector('#upload-cancel');
const hashtagElement = document.querySelector('.text__hashtags');
const descpriptionElement = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-я0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'Хештеги введёны неверно.';
const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideModal = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  form.reset();
  pristine.reset();
  resetEffects();
  resetScale();
};

const isElementFocus = () =>
  document.activeElement === hashtagElement ||
  document.activeElement === descpriptionElement;

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !isElementFocus() && !body.classList.contains('has-modal')) {
    evt.preventDefault();
    hideModal();
  }
}

const isValidTag = (tag) => VALID_SYMBOLS.test(tag);

const isValidCount = (tag) => tag.length <= MAX_HASHTAG_COUNT;

const isUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());

  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);

  return isValidCount(tags) && isUniqueTags(tags) && tags.every(isValidTag);
};

const onFileInputChange = () => showModal();

const onCancelButtonClick = () => hideModal();

const setupForm = () => {
  uploadFile.addEventListener('change', onFileInputChange);
  uploadCancelButton.addEventListener('click', onCancelButtonClick);

  pristine.addValidator(
    hashtagElement,
    validateTags,
    TAG_ERROR_TEXT
  );
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const setOnFormSubmit = (callback) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      callback(new FormData(form));
    }
  });
};

export { setupForm, setOnFormSubmit, hideModal, unblockSubmitButton };
