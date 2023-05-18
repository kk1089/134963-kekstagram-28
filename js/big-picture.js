
const bigPhoto = document.querySelector('.big-picture');
const pictureTemplate = bigPhoto.querySelector('.social__comment');
const commentCounter = bigPhoto.querySelector('.social__comment-count');
const commentsLoader = bigPhoto.querySelector('.comments-loader');
const closeButton = bigPhoto.querySelector('.cancel');
const socialComments = bigPhoto.querySelector('.social__comments');

const COMMENTS_FOR_PORTION = 5;

let commentsShow = 0 ;
let allMessage = [];

const hideBigPhoto = () => {
  bigPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentsLoader.classList.remove('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  closeButton.removeEventListener('click', onCloseButton);
};

function onDocumentKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPhoto();
  }
}

function onCloseButton () {
  hideBigPhoto();
}

const renderPhotoDetails = ({url, description, likes}) => {
  bigPhoto.querySelector('.big-picture__img img').src = url;
  bigPhoto.querySelector('.social__caption').textContent = description;
  bigPhoto.querySelector('.likes-count').textContent = likes;
};

const createComment = (comment) => {
  const elementComment = pictureTemplate.cloneNode(true);
  elementComment.querySelector('.social__picture').src = comment.avatar;
  elementComment.querySelector('.social__picture').alt = comment.name;
  elementComment.querySelector('.social__text').textContent = comment.message;

  return elementComment;
};

const renderComments = (comments) => {
  commentsShow += COMMENTS_FOR_PORTION;
  if(commentsShow >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShow = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');

  }
  const fragment = document.createDocumentFragment();
  for (let i = 0 ; i < commentsShow; i++) {
    const commentElement = createComment(comments[i]);
    fragment.append(commentElement);
  }

  socialComments.innerHTML = '';
  socialComments.append(fragment);
  commentCounter.innerHTML = `${commentsShow } из <span class="comment-count">${comments.length}</span> коментариев`;
};

commentsLoader.addEventListener('click', () => {
  renderComments(allMessage);
});

const showBigPhoto = (modal) => {
  bigPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', onCloseButton);
  allMessage = modal.comments;

  renderPhotoDetails(modal);
  renderComments(modal.comments);
};

export {showBigPhoto};
