const galleryItem = document.getElementsByClassName('gallery-item');

// create element for lightbox
const lightBoxContainer = document.createElement('div');
// basic area
const lightBoxContent = document.createElement('div');
// for image
const lightBoxImg = document.createElement('img');
// for previous button
const lightBoxPrev = document.createElement('div'); /* div for previous button */
// for next button
const lightBoxNext = document.createElement('div'); /* div for next button */


// create classlist
lightBoxContainer.classList.add('lightbox'); /* give the lightbox div a class */
lightBoxContent.classList.add('lightbox-content'); /* give the div inside the parent div a class */
lightBoxPrev.classList.add('fa', 'fa-angle-left', 'lightbox-prev'); /* add icon classes to prev div */
lightBoxNext.classList.add('fa', 'fa-angle-right','lightbox-next'); /* add icon classes to next div */


// append lightbox container to the lightbox content div
lightBoxContainer.appendChild(lightBoxContent);

lightBoxContent.appendChild(lightBoxImg); /* add the img tag into the lightbox child div */
lightBoxContent.appendChild(lightBoxPrev); /* add prev div to the lightbox child container */
lightBoxContent.appendChild(lightBoxNext); /* add next div to the lightbox child container */

// Append the entire lightbox container to the body
document.body.appendChild(lightBoxContainer);




// counter to keep track of images
let index = 1;



// create function
function showLightBox(n){
    // if the current image index is more than the lenght, then show the 1st image : index = 1
    if(n > galleryItem.length){
        index = 1;

    // if the current image is less than 1, make the current image the LAST image
    }else if(n < 1){
        index = galleryItem.length;
    }

    // capture the source (src) of the current clicked image
    let imageLocation = galleryItem[index -1].children[0].getAttribute('src');

    // set the src attribute
    lightBoxImg.setAttribute('src', imageLocation);
}


function currentImage(){
    lightBoxContainer.style.display="block";

    let imageIndex = parseInt(this.getAttribute("data-index"));

    showLightBox(index = imageIndex);
}


for(let i = 0; i < galleryItem.length; i++){
    galleryItem[i].addEventListener('click', currentImage);
}


function sliderImage(n){
    showLightBox(index += n);
}


function prevImage(){
    sliderImage(-1);
}

function nextImage(){
    sliderImage(1);
}


lightBoxPrev.addEventListener('click', prevImage);
lightBoxNext.addEventListener('click', nextImage);


// close lightbox
function closeLightBox(){
    if(this === event.target){
        lightBoxContainer.style.display = "none";
    }
}

lightBoxContainer.addEventListener('click', closeLightBox);
