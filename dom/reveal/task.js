let reveal = document.querySelectorAll('.reveal');

for(let rect of reveal) {
  document.addEventListener('scroll', () => {
    let {bottom, top} = rect.getBoundingClientRect();
    // return console.log('false')
    if(top <= window.innerHeight) {
      // return console.log('false');
      rect.classList.add('reveal_active');
    }
    if(bottom <= 0) {
      //  console.log('false');
      rect.classList.remove('reveal_active');
    }
  })
}