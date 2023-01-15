export const arrayOptions = [
  'File',
  'Edit',
  'View',
  'Image',
  'Options',
  'Help',
];
export const arrayTools = [
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

export const arrayColors = [
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

export let colorSelected;
export let lastColor = '#000000';

export function addOptions(array, id, htmlTag, className) {
  const options = document.getElementById(id);
  for (let i = 0; i < array.length; i++) {
    const element = document.createElement(htmlTag);

    element.classList.add(className);

    element.textContent = array[i];

    options.appendChild(element);
  }
}

export function addButtons(array, id, htmlTag1, htmlTag2, className) {
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

export function addColors(array, id, htmlTag, className) {
  const options = document.getElementById(id);
  for (let i = 0; i < array.length; i++) {
    const element = document.createElement(htmlTag);
    element.classList.add(className);
    element.setAttribute('id', array[i][0]);
    element.style.backgroundColor = `${array[i][1]}`;

    options.appendChild(element);
  }
}

export function createMatrixDiv(x, y) {
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
      let elementDiv = document.createElement('div');
      elementDiv.classList.add('div-element');
      elementDiv.style.width = `${widthElement}px`;
      elementDiv.style.height = `${heightElement}px`;

      emptyFile.appendChild(elementDiv);
    }

    matrix.appendChild(emptyFile);
  }
}

export function selectorBgDefault(
  windowBackground,
  colorSelectors,
  selectorOne,
  selectorTwo
) {
  windowBackground.style.backgroundColor = '#ffffff';
  colorSelected = colorSelectors.children[0].style.backgroundColor;

  selectorOne.style.backgroundColor = '#ffffff';
  selectorTwo.style.backgroundColor = '#000000';

  createMatrixDiv(16, 16);
}

/* Obtain hour */

export function interval() {
  setInterval(function obtainHour() {
    const hour = document.getElementById('hour');

    while (hour.firstChild) {
      hour.removeChild(hour.lastChild);
    }

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let time;
    let zhour = '';

    (hours >= 1) & (hours <= 12) ? (zhour = 'am') : (zhour = 'pm');

    minutes > 9
      ? (time = `${hours}:${minutes} ${zhour}`)
      : (time = `${hours}:0${minutes} ${zhour}`);

    let p = document.createElement('p');
    p.textContent = time;

    hour.appendChild(p);
  }, 1000);
}

/* Change color */

export function changeColor(selectorOne, selectorTwo, e) {
  colorSelected = e.target.style.backgroundColor;

  selectorTwo.style.backgroundColor = colorSelected;

  selectorOne.style.backgroundColor = lastColor;

  lastColor = colorSelected;
}
