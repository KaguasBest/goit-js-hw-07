import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
// const btn = document.querySelector('.button');

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
      </li>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', markup);

gallery.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.classList.contains('gallery__image')) {
    const modalImage = target.dataset.source;
    const modal = basicLightbox.create(`
    <img src="${modalImage}" width="800" height="600">
    `);
    modal.show();

    document.addEventListener('keydown', keyDown);
    function keyDown(event) {
      if (event.code === 'Escape') {
        modal.close();
      }
    }
  }
}
