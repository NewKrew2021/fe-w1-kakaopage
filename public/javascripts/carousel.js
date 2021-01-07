import { createNewElement } from './utils.js';

const createCarouselElement = carouselData => {
  const carousel = createNewElement('div', 'carousel', '');
  const carouselImage = createNewElement('img', 'carousel__image');
  carouselImage.src = carouselData.image;

  const carouselDescription = createNewElement(
    'div',
    'carousel__description',
    ''
  );

  const descriptionText = createNewElement('p', '', carouselData.description);

  carouselDescription.appendChild(descriptionText);
  carousel.appendChild(carouselImage);
  carousel.appendChild(carouselDescription);
  return carousel;
};

export { createCarouselElement };
