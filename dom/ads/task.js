let rotatorAll = document.querySelectorAll('.rotator');
let index = 0;
function rotate(i) {
  let children = rotatorAll[i].querySelectorAll('.rotator__case');
  children[index].classList.remove('rotator__case_active');
  if (index === children.length - 1) {
      index = -1;
  }
  index++;
  children[index].classList.add('rotator__case_active');
}

setInterval(rotate, 1000, 0);


