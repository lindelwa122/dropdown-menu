import chevronDown from './node_modules/bootstrap-icons/icons/chevron-down.svg';
import './src/style.css';

/**
 * Creates a dropdown.
 * @param {string} title - Title of the dropdown. Text displayed on the dropdown
 * @param {Array} listItems - An array of items to be displayed as options
 * @param {Function} [clickHandler] - Handles the click event for each list item
 * @return {{}} A method that appends the dropdown to the page
 */
const dropdown = (title, listItems, clickHandler) => {
  const _createElement = () => {
    const header = document.createElement('div');
    header.className = 'lin-ddm-header';
    header.innerHTML = `
            <div class="lin-ddm-title">${title}</div>
            <img src="${chevronDown}" alt="chevron-down">
            <i class="bi bi-chevron-down"></i>
        `;

    const ul = document.createElement('ul');
    ul.className = 'lin-ddm-list-items';
    listItems.forEach((item) => {
      const li = document.createElement('li');
      li.innerText = item;
      ul.appendChild(li);
    });

    const container = document.createElement('div');
    container.className = 'lin-ddm-drop-down';
    container.append(header, ul);

    return container;
  };

  /**
   *
   * @param {HTMLUListElement} item
   */
  const _open = (item) => {
    item.classList.add('visible');
    item.style.height = item.scrollHeight + 'px';
  };

  /**
   *
   * @param {HTMLUListElement} item
   */
  const _close = (item) => {
    item.classList.remove('visible');
    item.style.height = 0;
  };

  const _closeAll = () => {
    const lists = document.querySelectorAll('.lin-ddm-list-items');
    lists.forEach((list) => _close(list));
  };

  /**
   *
   * @param {HTMLDivElement} el
   */
  const _createEvent = (el) => {
    if (clickHandler) {
      const listItems = el.querySelectorAll('li');
      listItems.forEach((item) => {
        item.addEventListener('click', clickHandler);
      });
    }

    const header = el.querySelector('.lin-ddm-header');
    header.addEventListener('click', (e) => {
      e.stopPropagation();

      const itemsContainer = el.querySelector('.lin-ddm-list-items');
      _closeAll();
      _open(itemsContainer);

      document.body.addEventListener('click', () => _close(itemsContainer), {
        once: true,
      });
    });
  };

  /**
   * Adds the dropdown to the page using the specified selector
   * @param {string} selector - Selects an element
   */
  const append = (selector) => {
    const el = _createElement();
    _createEvent(el);
    document.querySelector(selector).appendChild(el);
  };

  return { append };
};

export default dropdown;
