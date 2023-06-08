import {isEscapeKey} from './util.js';

const bigPhoto = document.querySelector('.big-picture');
const commentTemplate = bigPhoto.querySelector('.social__comment');
const bigPictureImg = bigPhoto.querySelector('.big-picture__img img');
const commentCounter = bigPhoto.querySelector('.social__comment-count');
const commentsLoader = bigPhoto.querySelector('.comments-loader');
const closeButton = bigPhoto.querySelector('.cancel');
const socialComments = bigPhoto.querySelector('.social__comments');

const COMMENTS_FOR_PORTION = 5;

let commentsShowed = 0 ;
let allComments = [];

const hideBigPhoto = () => {
  bigPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentsLoader.classList.remove('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  closeButton.removeEventListener('click', onCloseButton);
  commentsShowed = 0;
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideBigPhoto();
  }
}

function onCloseButton() {
  hideBigPhoto();
}

const renderPhotoDetails = ({url, description, likes}) => {
  bigPictureImg.src = url;
  bigPhoto.querySelector('.social__caption').textContent = description;
  bigPhoto.querySelector('.likes-count').textContent = likes;
};

const createComment = (comment) => {
  const elementComment = commentTemplate.cloneNode(true);
  elementComment.querySelector('.social__picture').src = comment.avatar;
  elementComment.querySelector('.social__picture').alt = comment.name;
  elementComment.querySelector('.social__text').textContent = comment.message;

  return elementComment;
};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();

  for (let i = 0 ; i < commentsShowed; i++) {
    const commentElement = createComment(comments[i]);
    fragment.append(commentElement);
  }

  socialComments.innerHTML = '';
  socialComments.append(fragment);
  commentCounter.innerHTML = `${commentsShowed } из <span class="comment-count">${comments.length}</span> коментариев`;
};


const getCommentsCount = (comments) => {
  commentsShowed += COMMENTS_FOR_PORTION;
  if(commentsShowed >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShowed = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }
  renderComments(comments);
};

commentsLoader.addEventListener('click', () => {
  getCommentsCount(allComments);
});

const showBigPhoto = (photo) => {
  bigPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', onCloseButton);
  allComments = photo.comments;

  renderPhotoDetails(photo);
  getCommentsCount(photo.comments);
};

export {showBigPhoto};
