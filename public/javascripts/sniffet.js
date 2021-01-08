import { $, createNewElement } from './utils.js';
import { sniffetDataListText } from './data.js';
const DAY_LIST_CLASS_NAME = {
  dayList: 'day-list',
  nav: 'day-list__nav',
  content: 'day-list__content',
  header: 'day-list__header',
  headerLeft: 'day-list__header-left',
  headerRight: 'day-list__header-right',
  title: 'day-list__header-left-title',
  subtitle: 'day-list__header-left-subtitle',
};

const DAY_LIST_HEADER_DATA = {
  title: '요일 연재 TOP',
  subtitle: '(1,085)',
  right: '더보기 >',
};

const createSniffetListContent = () => {
  const dayListContent = createNewElement(
    'div',
    DAY_LIST_CLASS_NAME.content,
    ''
  );
  dayListContent.innerHTML = sniffetDataListText + sniffetDataListText;
  return dayListContent;
};

const createDayListHeader = () => {
  const dayListHeader = createNewElement('div', DAY_LIST_CLASS_NAME.header, '');
  const dayListHeaderLeft = createNewElement(
    'div',
    DAY_LIST_CLASS_NAME.headerLeft,
    ''
  );
  const dayListHeaderRight = createNewElement(
    'div',
    DAY_LIST_CLASS_NAME.headerRight,
    DAY_LIST_HEADER_DATA.right
  );
  dayListHeaderLeft.appendChild(
    createNewElement('p', DAY_LIST_CLASS_NAME.title, DAY_LIST_HEADER_DATA.title)
  );
  dayListHeaderLeft.appendChild(
    createNewElement(
      'p',
      DAY_LIST_CLASS_NAME.subtitle,
      DAY_LIST_HEADER_DATA.subtitle
    )
  );
  dayListHeader.appendChild(dayListHeaderLeft);
  dayListHeader.appendChild(dayListHeaderRight);
  return dayListHeader;
};

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

export {
  createSniffetImage,
  createSniffetDescription,
  createSniffetListContent,
  createDayListHeader,
  DAY_LIST_CLASS_NAME,
};
