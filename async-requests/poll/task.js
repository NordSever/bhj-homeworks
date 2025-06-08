let titleContainer = document.getElementById('poll__title');
let answersContainer = document.getElementById('poll__answers');
let pollContainer = document.querySelector('.poll');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.addEventListener('load', () => {
  if(xhr.status === 200){
    let answersArray;
    try {
      let parsedData = JSON.parse(xhr.responseText);
      titleContainer.textContent = parsedData.data.title;
      answersArray = parsedData.data.answers;
    } catch(catchError) {
        pollContainer.innerHTML = 'Не удаётся обработать данные с сервера';
        console.log('catchError: ' + catchError);
        return;
    }
    
    answersArray.forEach(answer => {
      let answerElement = document.createElement('button');
      answerElement.classList.add('poll__answer');
      answerElement.textContent = answer;
      answersContainer.appendChild(answerElement);
      answerElement.addEventListener('click', () => {
        pollContainer.innerHTML ='Спасибо, ваш голос засчитан!';
      });
    });
  } else {
      pollContainer.innerHTML = 'Ошибка загрузка данных: ' + xhr.status;
  }
});

xhr.addEventListener('error', () => {
  pollContainer.innerHTML = 'Ошибка соединения';
})

xhr.send();


