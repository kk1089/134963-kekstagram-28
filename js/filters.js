import { renderPictures } from './miniatures.js';
import { debounce } from './util.js';

const RANDOM_PICTURES_COUNT = 10;

const TIMEOUT = 500;

const imgFilters = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');
const defaultFilter = document.querySelector('#filter-default');
const randomFilter = document.querySelector('#filter-random');
const discussedFilter = document.querySelector('#filter-discussed');

const randomPictures = () => Math.random() - 0.5;

const discussedPictures = (a, b) => b.comments.length - a.comments.length;

const filterPictures = (pictures, sortButton) => {

  if (sortButton === defaultFilter) {
    return pictures;
  }

  if (sortButton === randomFilter) {
    return pictures.slice().sort(randomPictures).slice(0, RANDOM_PICTURES_COUNT);
  }

  if (sortButton === discussedFilter) {
    return pictures.slice().sort(discussedPictures);
  }
};

const removePictures = (pictures) => pictures.forEach((thumbnail) => thumbnail.remove());

const setOnFilterClick = (evt, pictures) => {

  defaultFilter.classList.remove('img-filters__button--active');
  randomFilter.classList.remove('img-filters__button--active');
  discussedFilter.classList.remove('img-filters__button--active');

  const filterButton = evt.target;
  filterButton.classList.add('img-filters__button--active');
  const thumbnails = document.querySelectorAll('.picture');

  removePictures(thumbnails);

  renderPictures(filterPictures(pictures, filterButton));
};

const setDebouncedSort = (pictures) => {
  filterForm.addEventListener('click', debounce((evt) => {
    setOnFilterClick(evt, pictures);
  }, TIMEOUT));
};

const showFilters = () => imgFilters.classList.remove('img-filters--inactive');

export { setDebouncedSort, showFilters };
