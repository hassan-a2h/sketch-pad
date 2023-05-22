let canvasSize = 32;
let selectedColor = '#000000';

// For User to define Canvas size
const inputButton = document.querySelector('#input');
inputButton.addEventListener('click', () => {
  do {
    canvasSize = Number(prompt('Size', 8));
    if (isNaN(canvasSize)) {
      console.log('Invalid Input');
      continue;
    }
    else {
      if (canvasSize > 100 || canvasSize < 2) {
        alert('Size limit exceeded (1 < size < 101)');
        continue;
      }
      break;
    }
  } while (true);

  const diplayCanvasSize = document.querySelector('#current-grid-size');
  diplayCanvasSize.textContent = `${canvasSize} X ${canvasSize}`;
  clearGrid();
  displayGrid();
  drawOnGrid();
});

const clearCanvas = document.querySelector('#clear-canvas');
clearCanvas.addEventListener('click', (e) => {
  const gridElements = document.querySelectorAll('.grid-element');
  gridElements.forEach((gridElement) => {
      if (gridElement.classList.contains('color-black')) {
        gridElement.classList.add('color-white');
        gridElement.classList.remove('color-black');
        gridElement.style.cssText += `background-color: #FFFFFF`;
      }
  });
});

// For color change
const activeColor = document.querySelector('#color-picker');
activeColor.addEventListener('change', (e) => {
  selectedColor = activeColor.value;
})

// Driver Code
displayGrid();
drawOnGrid();

// Functions
function displayGrid() {
  let boxSize = Math.floor(800 / canvasSize);

  const canvas = document.querySelector('.canvas');
  canvas.style.cssText += `display: flex; flex-wrap: wrap;`;

  for (let i = 0; i < canvasSize * canvasSize; i++) {
    const box = document.createElement('div');
    box.classList.add('grid-element', 'color-white');
    box.setAttribute('style', `height: ${boxSize}px; width: ${boxSize}px;`);
    canvas.appendChild(box);
  }
}

function clearGrid() {
  const gridElements = document.querySelectorAll('.grid-element');
  if (gridElements) {
    gridElements.forEach((gridElement) => {
      gridElement.remove();
    });
  }
}

// Adds event listeners to change grid color on hover
function drawOnGrid() {
  const gridElements = document.querySelectorAll('.grid-element');
  gridElements.forEach((gridElement) => {
    gridElement.addEventListener('mouseenter', (e) => {
      if (e.target.classList.contains('color-white')) {
        e.target.classList.remove('color-white');
        e.target.classList.add('color-black');
        e.target.style.cssText += `background-color: ${selectedColor}`;
      }
    });
  })
}
