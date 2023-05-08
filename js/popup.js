import {createObjects} from './data.js';

const picturesOtherUser = document.querySelector('.pictures');
const picturesOtherUserTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const otherPicturesFragment = document.createDocumentFragment();
const otherPictures = createObjects();

otherPictures.forEach(({likes, comments, url}) => {
  const otherPicturesElements = picturesOtherUserTemplate.cloneNode(true);

  otherPicturesElements.querySelector('.picture__likes').textContent = likes;
  otherPicturesElements.querySelector('.picture__comments').textContent = comments.length;
  otherPicturesElements.querySelector('.picture__img').src = url;
  otherPicturesFragment.appendChild(otherPicturesElements);

});

picturesOtherUser.appendChild(otherPicturesFragment);

