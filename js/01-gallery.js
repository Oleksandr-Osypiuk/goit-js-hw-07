import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

let galleryRender = "";

galleryItems.map(({ preview, original, description}) => { 
    const render = `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `
    galleryRender += render;
})

gallery.innerHTML = galleryRender;

gallery.addEventListener("click", handleClickGallery);


function handleClickGallery (e) { 
    e.preventDefault();
    if (!e.target.classList.contains("gallery__image")) return;
    instance.show()
    const targetClick = e.target;
    const imgSourse = targetClick.dataset.source;
    const galleryBasicLightbox = document.querySelector(".modal img");
    galleryBasicLightbox.setAttribute("src", imgSourse);

    const modalLightbox = document.querySelector(".modal")
    modalLightbox.addEventListener("click", handleCloseGallery);
}

function handleCloseGallery(e) { 
    e.preventDefault();
    instance.close();
} 

const instance = basicLightbox.create(`
    <div class="modal">
       <img src=""/>
    </div>
`)