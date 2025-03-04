// 
// Вариант решения задания без добавления необязательных заданий
// (расскоментировать код, и закомментировать остальное)
// 
// let timer = document.getElementById('timer');

// let idCounter = setInterval(() => {
//   if(Number(timer.textContent) !== 0) {
//     timer.textContent = Number(timer.textContent) - 1;
//   }else {
//     clearInterval(idCounter);
//     alert('Вы победили в конкурсе!');
//   }
// }, 1000);

let timer = document.getElementById('status');
let numberSeconds = document.getElementById('timer');

let timeInSeconds = 15;
numberSeconds.textContent = timeInSeconds;


let idCounter = setInterval(() => {
  if(timeInSeconds !== 0) {
    timeInSeconds--; 
    let hour = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds % 3600) / 60);
    let seconds = timeInSeconds % 60;

    timer.textContent = String(hour).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
    
  }else {
    clearInterval(idCounter);
    alert('Вы победили в конкурсе! При нажатии загрузится файл...');
    window.location = 'theWin.odt';
  }
}, 1000);







