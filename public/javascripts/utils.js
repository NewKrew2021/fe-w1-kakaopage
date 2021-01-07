const $ = (target, parent = document) => {
  return document.querySelector(target);
};

const createNewElement = (tag, className, innerText) => {
  const newElement = document.createElement(tag);
  newElement.className = className;
  newElement.innerText = innerText;
  return newElement;
};

const deleteClassFromElement = (element, className) => {
  element.classList.remove(className);
};

export { $, createNewElement, deleteClassFromElement };
