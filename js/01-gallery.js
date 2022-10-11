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

  const instance = basicLightbox.create(
    `
    <img src= '${evt.target.dataset.source}'>
`,
    {
      onClose: (instance) => {
        window.removeEventListener("keydown", onEcapeCloseModal);
      },
    }
  );

  instance.show();

  window.addEventListener("keydown", onEcapeCloseModal);

  onEcapeCloseModal(evt);
});

function onEcapeCloseModal(e) {
  const modalEl = document.querySelector(".basicLightbox");
  if (e.code === "Escape") {
    modalEl.remove();
    window.removeEventListener("keydown", onEcapeCloseModal);
    return;
  }
}

console.log(galleryItems);
