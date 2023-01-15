import * as functions from './functions.js';

/* Variables */

const colorSelectors = document.getElementById('colors-selector');
const windowBackground = document.getElementById('window-background');
const selectorOne = document.getElementById('one');
const selectorTwo = document.getElementById('two');
const retrieveData = document.getElementById('modal-ok');

/* Modal */

const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');
const modal = document.getElementById('modal');

/* Event Listeners */

window.addEventListener('DOMContentLoaded', (event) => {
  /* System clock */

  functions.interval();

  /* Create Html elements */

  functions.addOptions(functions.arrayOptions, 'options', 'p', 'text');

  functions.addButtons(
    functions.arrayTools,
    'group-buttons',
    'button',
    'img',
    'tool-btn'
  );

  functions.addColors(
    functions.arrayColors,
    'colors-selector',
    'button',
    'selector-item'
  );

  functions.selectorBgDefault(
    windowBackground,
    colorSelectors,
    selectorOne,
    selectorTwo
  );

  /* Modal listeners */

  openModal.addEventListener('click', function (e) {
    modal.showModal();
  });

  closeModal.addEventListener('click', function (e) {
    modal.close();
  });

  /* Window Modal Configuration */

  retrieveData.addEventListener('click', function (e) {
    let x = document.getElementById('axis-x').value;
    let y = document.getElementById('axis-y').value;

    while (windowBackground.firstChild) {
      windowBackground.removeChild(windowBackground.lastChild);
    }

    functions.createMatrixDiv(x, y);
  });

  colorSelectors.addEventListener('click', function (e) {
    functions.changeColor(selectorOne, selectorTwo, e);
  });

  windowBackground.addEventListener('mouseover', function (e) {
    if (e.target.className === 'div-element') {
      e.target.style.backgroundColor = functions.colorSelected;
    }
  });
});
