const picturesElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderPictures = (photos) => {

  const pictureFragment = document.createDocumentFragment();

  photos.forEach(({likes, comments, url}) => {
    const photo = pictureTemplate.cloneNode(true);

    photo.querySelector('.picture__likes').textContent = likes;
    photo.querySelector('.picture__comments').textContent = comments.length;
    photo.querySelector('.picture__img').src = url;
    pictureFragment.appendChild(photo);

  });

  picturesElement.appendChild(pictureFragment);

};
export {renderPictures};
