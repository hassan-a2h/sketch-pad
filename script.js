let canvasSize = 8;

const inputButton = document.getElementById('input');
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

  clearGrid();
  displayGrid();
});

// Driver Code
displayGrid();

// Functions
function displayGrid() {
  let boxSize = Math.floor(800 / canvasSize),
    spacing = Math.floor(boxSize / 8);
  boxSize -= spacing;

  const canvas = document.querySelector('.canvas');
  canvas.style.cssText += `display: flex; flex-wrap: wrap; gap: ${spacing}px; `;

  for (let i = 0; i < canvasSize * canvasSize; i++) {
    const box = document.createElement('div');
    box.classList.add('grid-element');
    box.setAttribute('style', `height: ${boxSize}px; width: ${boxSize}px;\
    color: white; box-shadow: 0px 0px 2px 0.5px black`);
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
