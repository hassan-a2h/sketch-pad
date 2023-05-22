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
      break;
    }
  } while (true);
});

const container = document.getElementsByClassName('container');
for (let i = 0; i < canvasSize * canvasSize; i++) {

}
