const STEP = 25;
const MIN_STEP = 25;
const MAX_STEP = 100;
const DEFAULT = 100;

const smallControl = document.querySelector('.scale__control--smaller');
const bigControll = document.querySelector('.scale__control--bigger');
const contollValue = document.querySelector('.scale__control--value');
const imgElement = document.querySelector('.img-upload__preview img');

const scaleImg = (value) => {
  imgElement.style.transform = `scale(${value / 100})`;
  contollValue.value = `${value}%`;
};

const onSmallControlClick = () => {
  const newElement = parseInt(contollValue.value, 10);
  let newValue = newElement - STEP;

  if (newValue < MIN_STEP) {
    newValue = MIN_STEP;
  } else {
    scaleImg(newValue);
  }
};

const onbigControllClick = () => {
  const newElement = parseInt(contollValue.value, 10);
  let newValue = newElement + STEP;

  if (newValue > MAX_STEP) {
    newValue = MAX_STEP;
  } else {
    scaleImg(newValue);
  }
};

const resetScale = () => scaleImg(DEFAULT);

const setScaleListener = () => {
  smallControl.addEventListener('click', onSmallControlClick);
  bigControll.addEventListener('click', onbigControllClick);
};

export { resetScale, setScaleListener};
