import {showBigPhoto} from './big-picture.js';
const picturesElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPictures = (photos) => {
  const pictureFragment = document.createDocumentFragment();

  photos.forEach(({likes, comments, url, id, description}) => {
    const photo = pictureTemplate.cloneNode(true);

    photo.querySelector('.picture__likes').textContent = likes;
    photo.querySelector('.picture__comments').textContent = comments.length;
    photo.querySelector('.picture__img').src = url;
    photo.querySelector('.picture__img').alt = description;
    photo.dataset.photoId = id;
    pictureFragment.appendChild(photo);

  });

  picturesElement.appendChild(pictureFragment);
};

const setPictureListener = (photos) => {

  picturesElement.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-photo-id]');

    if (!thumbnail) {
      return;
    }

    const photo = photos.find((item) => item.id === +thumbnail.dataset.photoId);

    showBigPhoto(photo);
  });
};

export {renderPictures, setPictureListener};
