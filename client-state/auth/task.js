const welcomeContainer = document.getElementById('welcome');
const signin = document.getElementById('signin');

const idSpanElement = document.getElementById('user_id');
let id = localStorage.getItem('id');

const form = document.getElementById('signin__form');

if(id) {
  welcomeContainer.classList.add('welcome_active');
  signin.classList.remove('signin_active');
  idSpanElement.textContent = id;
} else {
  form.addEventListener('submit', eventSubmit => {
    eventSubmit.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

    xhr.addEventListener('load', () => {
      if(xhr.status === 201) {
        let test;
        let userId;

        try {
          const data = JSON.parse(xhr.responseText);
          test = data['success'];
          userId = data['user_id'];

        } catch(error) {
            alert('Не удалось обработать данные с сервера.');
            return;
        }
        if(test && userId) {
          localStorage.setItem('id', userId);
          welcomeContainer.classList.add('welcome_active');
          signin.classList.remove('signin_active');
          idSpanElement.textContent = userId;
        } else {
          alert ('Ошибка входа. Пожалуйста, проверьте введённые данные и попробуйте снова.');
        }           
      } else {
        alert('Ошибка загрузки данных: ' + xhr.status);
        }
    })

    xhr.addEventListener('error', () => {
      alert('Ошибка соединения')
    })
    
    xhr.send(formData);
  
  });
}

