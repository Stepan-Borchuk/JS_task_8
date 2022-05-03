// Add imports above this line

// Change code below this line

import createListItems from '../templates/gallery-render.hbs'

import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const galleryItemsList = document.querySelector(".gallery")

const listItems = createListItemsMarkup(galleryItems)

function createListItemsMarkup(galleryItems) {
    return createListItems(galleryItems);
}

galleryItemsList.innerHTML = listItems
    
galleryItemsList.addEventListener('click', onClick);

new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: 'alt'});

function onClick(evt) {
    evt.preventDefault();  
}