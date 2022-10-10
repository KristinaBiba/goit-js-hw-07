import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBoxEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<div class = 'gallery__item'>
    <a class = 'gallery__link' href='${original}'>
    <img class = 'gallery__image' src = '${preview}' alt = '${description}' data-source ='${original}' />
    </a> 
    </div> `
  )
  .join("");

galleryBoxEl.innerHTML = markup;

galleryBoxEl.addEventListener("click", (evt) => {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const currentImgEl = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src= '${currentImgEl}'>
`);

  instance.show();

  console.log(currentImgEl);
});

// console.log(galleryItems);
