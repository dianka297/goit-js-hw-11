import { fetchFotosByQuery } from './js/pixabay-api.js';
import { createGalleryMarkup } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery-list');
const searchFormEl = document.querySelector('.form');
const loaderEl = document.querySelector('.loader');
let lightbox = new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function onSearchFormSubmit(event) {
  event.preventDefault();

  const searchQuery = event.target.elements.query.value.trim();

  if (searchQuery === '') {
    galleryEl.innerHTML = '';
    event.target.reset();
    return;
  }

  galleryEl.innerHTML = '';
  loaderEl.classList.remove('is-hidden');

  fetchFotosByQuery(searchQuery)
    .then(photosData => {
      if (photosData.total === 0) {
        event.target.reset();
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 4000,
          pauseOnHover: true,
          color: 'red',
        });
      }
      galleryEl.innerHTML = createGalleryMarkup(photosData.hits);
      lightbox.refresh();
    })
    .catch(error => console.log(error))
    .finally(() => {
      event.target.reset();
      loaderEl.classList.add('is-hidden');
    });
}

searchFormEl.addEventListener('submit', onSearchFormSubmit);