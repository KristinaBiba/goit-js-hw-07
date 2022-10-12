import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryBoxEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<a class = 'gallery__item' href='${original}'>
    <img class = 'gallery__image' src = '${preview}' alt = '${description}'/>
    </a>`
  )
  .join("");

galleryBoxEl.innerHTML = markup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  enableKeyboard: true,
});

console.log(galleryItems);
