import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryBoxEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<a class = 'gallery__item' href='${original}'>
    <img class = 'gallery__image' src = '${preview}' alt = '${description}' title = '${description}'/>
    </a>`
  )
  .join("");

galleryBoxEl.innerHTML = markup;

var lightbox = new SimpleLightbox(".gallery a", {
  //   fadeSpeed: 250,
  //   animationSpeed: 500,
  enableKeyboard: true,
  //   throttleInterval: 250,
});

console.log(galleryItems);
