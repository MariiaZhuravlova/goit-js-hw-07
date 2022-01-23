import { galleryItems } from './gallery-items.js';
// Change code below this line
const listGallary = document.querySelector('.gallery');

const galleryCard = ({ preview, original, description} ) => {
    const galleryWrapper = document.createElement('div');
    galleryWrapper.innerHTML = 
    `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        data-source="${original}" 
        alt="${description}"/>
     </a>
    </div>`;
return galleryWrapper.firstElementChild;
};
//     const galleryWrapper = document.createElement('div');
// galleryWrapper.classList.add('gallery__item');
// const gallerylink = document.createElement('a');
// gallerylink.classList.add('gallery__link');
// gallerylink.href = original;
// const galleryImg = document.createElement('img');
// galleryImg.src = preview;
// galleryImg.dataset.source = original;
// galleryImg.alt = description;
// galleryImg.classList.add('gallery__image');

// galleryWrapper.append(gallerylink);
// gallerylink.append(galleryImg);
//  return galleryWrapper;
// }; 

const galleryCards = galleryItems.map(gallery => galleryCard(gallery));
listGallary.append(...galleryCards);

const galleryHendler = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
     const originalUrl = event.target.dataset.source;
console.log(originalUrl);
     const instance = basicLightbox.create(`
    <img src="${originalUrl}">
`)

instance.show()
};
listGallary.addEventListener('click', galleryHendler);