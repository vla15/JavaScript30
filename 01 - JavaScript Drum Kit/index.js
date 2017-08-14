const playSound = e => {
  const sound = document.querySelector(`audio[data-key='${e.keyCode}']`);
  if (!sound) {
    return;
  }
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  key.classList.add('playing');
  sound.currentTime = 0;
  sound.play();
}

const removeTransition = e => {
  if (e.propertyName === 'transform') {
    e.target.classList.remove('playing');
  }
}

const keys = document.querySelectorAll('.key');

keys.forEach(e => {
  e.addEventListener('transitionend', removeTransition);
});


document.body.addEventListener('keydown', playSound);