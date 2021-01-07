import { $, createNewElement } from './utils.js';

const createSniffetImage = (sniffetImageSrc, sniffetImageDetail) => {
  const sniffetImageWrapper = createNewElement('div', 'sniffet-image', '');
  const sniffetImage = createNewElement('img', 'sniffet-image__image', '');
  sniffetImage.src = sniffetImageSrc;

  const sniffetImageDetail = createNewElement(
    'div',
    'sniffet-image__detail',
    sniffetImageDetail
  );

  sniffetImageWrapper.appendChild(sniffetImage);
  sniffetImageWrapper.appendChild(sniffetImageDetail);

  return sniffetImageWrapper;
};
