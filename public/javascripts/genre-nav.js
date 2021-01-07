import { createNewElement } from './utils.js';

const createGenreNav = (navItemList, navClassName) => {
  const genreNav = createNewElement('div', 'webtoon-genre-nav', '');
  const genreNavList = createNewElement('ul', 'genre-nav__list', '');

  navItemList.forEach(navItem => {
    const navItemElement = createNewElement('li', 'genre-nav__item', navItem);
    genreNavList.appendChild(navItemElement);
  });
  genreNav.appendChild(genreNavList);
  return genreNav;
};

export { createGenreNav };
