const canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let isDrawing = false;
let ctx = canvas.getContext('2d');
ctx.strokeStyle = '#BADASS';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let hue = 0;
let lastX = 0;
let lastY = 0;
let direction = true;

const draw = (e) => {
  if (!isDrawing) {
    return;
  }
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue += 2;
  hue >= 360 ? hue = 0 : hue;

  updateLineWidth();

}

const updateLineWidth = () => {
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

const resetDrawing = () => {
  isDrawing = false;
  hue = 0;
  ctx.lineWidth = 10;
}


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', resetDrawing);
canvas.addEventListener('mouseout', resetDrawing);