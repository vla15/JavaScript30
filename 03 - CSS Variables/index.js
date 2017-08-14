const controls = document.querySelectorAll('.controls input')


const handleChange = e => {
  const suffix = e.target.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${e.target.id}`, e.target.value + suffix);
}


controls.forEach(input => {
  input.addEventListener('change', handleChange);
})