const panel = document.querySelectorAll('.panel');

const handleClick = function() {
  this.classList.toggle('open');
}

const handleTransition = function (e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
  // this.classList.toggle('open-active');
}

panel.forEach(p => {
  p.addEventListener('click', handleClick)
})

panel.forEach(p => {
  p.addEventListener('transitionend', handleTransition)
})

console.log(panel);