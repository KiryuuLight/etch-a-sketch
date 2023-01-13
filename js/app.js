/* Get variables */

const colorSelectors = document.getElementById('colors-selector');
const windowBackground = document.getElementById('window-background');
const selectorOne = document.getElementById('one');
const selectorTwo = document.getElementById('two');
const retrieveData = document.getElementById('modal-ok');
const hour = document.getElementById('hour');

setInterval(obtainHour, 1000);

/* Color variables */

let colorSelected;
let lastColor = '#000000';

/* Modal */

const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');
const modal = document.getElementById('modal');

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  selectorBgDefault();

  openModal.addEventListener('click', function (e) {
    modal.showModal();
  });

  closeModal.addEventListener('click', function (e) {
    modal.close();
  });

  retrieveData.addEventListener('click', function (e) {
    let x = document.getElementById('axis-x').value;
    let y = document.getElementById('axis-y').value;

    while (windowBackground.firstChild) {
      windowBackground.removeChild(windowBackground.lastChild);
    }

    createMatrixDiv(x, y);
  });

  colorSelectors.addEventListener('click', function (e) {
    colorSelected = e.target.style.backgroundColor;
    console.log(colorSelected);

    selectorTwo.style.backgroundColor = colorSelected;

    selectorOne.style.backgroundColor = lastColor;

    lastColor = colorSelected;
  });

  windowBackground.addEventListener('mouseover', function (e) {
    if (e.target.className === 'div-element') {
      e.target.style.backgroundColor = colorSelected;
    }
  });
});

const arrayOptions = ['File', 'Edit', 'View', 'Image', 'Options', 'Help'];
const arrayTools = [
  'img/free-form.png',
  'img/select.png',
  'img/eraser.png',
  'img/fill-with-color.png',
  'img/pick.png',
  'img/magnifier.png',
  'img/pencil.png',
  'img/brush.png',
  'img/air-brush.png',
  'img/text.png',
  'img/line.png',
  'img/curve.png',
  'img/rectangle.png',
  'img/poligon.png',
  'img/ellipse.png',
  'img/rounded-rectangle.png',
];

function addOptions(array, id, htmlTag, className) {
  const options = document.getElementById(id);
  for (let i = 0; i < array.length; i++) {
    const element = document.createElement(htmlTag);

    element.classList.add(className);

    element.textContent = array[i];

    options.appendChild(element);
  }
}

addOptions(arrayOptions, 'options', 'p', 'text');

function addButtons(array, id, htmlTag1, htmlTag2, className) {
  const options = document.getElementById(id);
  for (let i = 0; i < array.length; i++) {
    const elementParent = document.createElement(htmlTag1);
    const elementChild = document.createElement(htmlTag2);

    elementChild.setAttribute('src', array[i]);

    elementParent.classList.add(className);

    elementParent.appendChild(elementChild);

    elementParent.setAttribute('disabled', '');

    if (array[i] === 'img/pencil.png') {
      elementParent.style.backgroundColor = '#dbe0e0';
      elementParent.removeAttribute('disabled');
    }

    options.appendChild(elementParent);
  }
}
addButtons(arrayTools, 'group-buttons', 'button', 'img', 'tool-btn');

arrayColors = [
  ['black', '#000000'],
  ['gray', '#7a7a7a'],
  ['rust', '#7f0404'],
  ['olive', '#7b7903'],
  ['green oscure', '#007a00'],
  ['turquoise', '#02797f'],
  ['navy blue', '#00037f'],
  ['purple', '#810086'],
  ['sage', '#767d36'],
  ['dark teal', '#023a3e'],
  ['sky blue', '#007bf9'],
  ['royal blue', '#003a7e'],
  ['periwinkle', '#3604f5'],
  ['burnt orange', '#7e3700'],
  ['white', '#ffffff'],
  ['silver', '#bdbdbd'],
  ['red', '#f90200'],
  ['yellow', '#fffe04'],
  ['green', '#00fe06'],
  ['light sky blue', '#02feff'],
  ['ultramarine blue', '#0003fa'],
  ['fuchsia', '#fe02fb'],
  ['mustard', '#fcff77'],
  ['turquoise green', '#02ff82'],
  ['light turquoise', '#81fdff'],
  ['lavender blue', '#7981f9'],
  ['pink', '#f90188'],
  ['salmon', '#ff7b3d'],
];

function addColors(array, id, htmlTag, className) {
  const options = document.getElementById(id);
  for (let i = 0; i < array.length; i++) {
    const element = document.createElement(htmlTag);
    element.classList.add(className);
    element.setAttribute('id', array[i][0]);
    element.style.backgroundColor = `${array[i][1]}`;

    options.appendChild(element);
  }
}

addColors(arrayColors, 'colors-selector', 'button', 'selector-item');

// function createMatrix(x, y) {
//   let matrix = [];

//   for (let i = 0; i < x; i++) {
//     let emptyFile = [];

//     for (let j = 0; j < y; j++) {
//       emptyFile.push(null);
//     }

//     matrix.push(emptyFile);
//   }

//   return matrix;
// }

// console.log(createMatrix(4, 5));

function createMatrixDiv(x, y) {
  let matrix = document.getElementById('window-background');
  let widthMatrix = matrix.clientWidth;
  let heightMatrix = matrix.clientHeight;
  let widthElement = widthMatrix / x;
  let heightElement = heightMatrix / y;

  for (let i = 0; i < x; i++) {
    let emptyFile = document.createElement('div');
    emptyFile.classList.add('div-x');
    emptyFile.style.display = 'flex';

    for (let j = 0; j < y; j++) {
      elementDiv = document.createElement('div');
      elementDiv.classList.add('div-element');
      elementDiv.style.width = `${widthElement}px`;
      elementDiv.style.height = `${heightElement}px`;

      emptyFile.appendChild(elementDiv);
    }

    matrix.appendChild(emptyFile);
  }

  return elementDiv;
}

function paintDiv(color) {
  e.style.backgroundColor = `${color}`;
}

function selectorBgDefault() {
  windowBackground.style.backgroundColor = '#ffffff';
  colorSelected = colorSelectors.children[0].style.backgroundColor;

  selectorOne.style.backgroundColor = '#ffffff';
  selectorTwo.style.backgroundColor = '#000000';

  createMatrixDiv(64, 64);
}

/* Obtain hour */

function obtainHour() {
  while (hour.firstChild) {
    hour.removeChild(hour.lastChild);
  }
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  (hours >= 1) & (hours <= 12) ? (zhour = 'am') : (zhour = 'pm');

  minutes > 9
    ? (time = `${hours}:${minutes} ${zhour}`)
    : (time = `${hours}:0${minutes} ${zhour}`);

  let p = document.createElement('p');
  p.textContent = time;

  hour.appendChild(p);
}
