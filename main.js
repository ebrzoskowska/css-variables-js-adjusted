document.querySelectorAll('.controls input').forEach(input => {
  let isClicked = false;

  input.addEventListener('mousedown', () => { isClicked = true; });
  input.addEventListener('mouseup', () => { isClicked = false; });
    
  input.addEventListener('change', e => {
    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + (e.target.dataset.sizing || e.target.dataset.per || ''));
    isClicked = true;
  });      

  input.addEventListener('mousemove', e => {
    if (isClicked) {
      document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + (e.target.dataset.sizing || e.target.dataset.per || ''));
    }
  });
});

// or:
// const inputs = document.querySelectorAll('.controls input');
// function updateHandler() {
//   const suffix = this.dataset.sizing || '';
//   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
// }
// inputs.forEach(input => input.addEventListener('change', updateHandler));
// inputs.forEach(input => input.addEventListener('mousemove', updateHandler));