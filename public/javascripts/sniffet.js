import { $, createNewElement } from './utils.js';

const createSniffetImage = (sniffetImageSrc, sniffetImageDetailText) => {
  const sniffetImageWrapper = createNewElement('div', 'sniffet-image', '');
  const sniffetImage = createNewElement('img', 'sniffet-image__image', '');
  sniffetImage.src = sniffetImageSrc;

  const sniffetImageDetail = createNewElement(
    'div',
    'sniffet-image__detail',
    sniffetImageDetailText
  );

  sniffetImageWrapper.appendChild(sniffetImage);
  sniffetImageWrapper.appendChild(sniffetImageDetail);

  return sniffetImageWrapper;
};

const createSniffetDescription = sniffetData => {
  const sniffetDescription = createNewElement('div', 'sniffet-description', '');
  const sniffetTitle = createNewElement(
    'p',
    'sniffet-title',
    sniffetData.sniffetTitle
  );
  const sniffetViewCount = createNewElement(
    'p',
    'sniffet-title',
    sniffetData.sniffetViewCount
  );
  sniffetDescription.appendChild(sniffetTitle);
  sniffetDescription.appendChild(sniffetViewCount);

  return sniffetDescription;
};

export { createSniffetImage, createSniffetDescription };
