const panel = document.querySelectorAll('.panel');

const handleClick = function() {
  panel.forEach(p => {
    p.classList.remove('open-active');
    p.classList.remove('open')
  })
  this.classList.add('open')
  this.classList.add('open-active');
  console.log(this);
}

panel.forEach(p => {
  p.addEventListener('click', handleClick)
})

console.log(panel);