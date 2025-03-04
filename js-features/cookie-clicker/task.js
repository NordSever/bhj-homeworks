let img = document.getElementById('cookie');
let counterClick = document.getElementById('clicker__counter');
let counterSpeed = document.getElementById('speed__counter');
let numberOfClick = 0;
let previousClick = null;

img.onclick = function clickImg(){
  let currentClick = new Date();
  if(numberOfClick % 2 === 0){
    img.width = 150;
    ++numberOfClick;
  }else {
    img.width = 200;
    ++numberOfClick;
  } 
  counterClick.textContent = numberOfClick;
  
  if (previousClick) {
    counterSpeed.textContent = (1 / (currentClick - previousClick) * 1000).toFixed(2);
  } 
  previousClick = currentClick; 
}

  


