import { $, createNewElement, deleteClassFromElement } from './utils.js';

const changeClickedNavTab = (
  navData,
  newPageIndex,
  navListClassName,
  clickedNavItemClassName
) => {
  const navList = $(navListClassName);
  deleteClassFromElement(
    navList.childNodes[navData.currentPage],
    clickedNavItemClassName
  );
  navList.childNodes[newPageIndex].classList.add(clickedNavItemClassName);
  navData.currentPage = newPageIndex;
};

const createGenreNav = (navItemList, navClassName) => {
  const genreNav = createNewElement('div', navClassName, '');
  const genreNavList = createNewElement('ul', 'genre-nav__list', '');

  navItemList.forEach(navItem => {
    const navItemElement = createNewElement('li', 'genre-nav__item', navItem);
    genreNavList.appendChild(navItemElement);
  });
  genreNav.appendChild(genreNavList);
  return genreNav;
};

export { createGenreNav, changeClickedNavTab };
