import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryHTML = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryHTML);

function handleOnClickImg(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const galleryBigImg = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );

  galleryBigImg.show();
  closeModal(galleryBigImg);
}

function closeModal(galleryBigImg) {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      galleryBigImg.close();
    }
  });
}

galleryEl.addEventListener("click", handleOnClickImg);
