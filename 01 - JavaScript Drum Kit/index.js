const playSound = event => {
  const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
  const key = document.querySelector(`div[data-key='${event.keyCode}']`);
  if (!audio) {
    return;
  }
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const removeTransition = event => {
  if (event.propertyName === 'transform') {
    event.target.classList.remove('playing');
  }
}

const keys = document.querySelectorAll('.key')

keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition)
})


window.addEventListener('keydown', playSound);

