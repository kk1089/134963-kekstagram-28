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
  const newValue = newElement - STEP < MIN_STEP ? MIN_STEP : newElement - STEP;
  scaleImg(newValue);

};

const onbigControllClick = () => {
  const newElement = parseInt(contollValue.value, 10);
  const newValue = newElement + STEP > MAX_STEP ? MAX_STEP : newElement + STEP;
  scaleImg(newValue);

};

const resetScale = () => scaleImg(DEFAULT);

const setScaleListener = () => {
  smallControl.addEventListener('click', onSmallControlClick);
  bigControll.addEventListener('click', onbigControllClick);
};

export { resetScale, setScaleListener};
