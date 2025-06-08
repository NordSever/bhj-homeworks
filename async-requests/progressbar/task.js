let progressElement = document.getElementById('progress');
let formElement = document.getElementById('form');
let inputTypeFile = document.getElementById('file');

formElement.addEventListener('submit', eventSubmit => {
  eventSubmit.preventDefault();

  if (inputTypeFile.files.length === 0){
    alert('Сначала загрузите файл');
    return;
  }

  let fileElement = inputTypeFile.files[0];
  let formData = new FormData();
  formData.append('file', fileElement);

  let xhr = new XMLHttpRequest();
  xhr.open ('POST','https://students.netoservices.ru/nestjs-backend/upload');

  xhr.upload.addEventListener('progress', eventProgress => {
    if(eventProgress.lengthComputable) {
      let progressDecimal = eventProgress.loaded / eventProgress.total;
      progressElement.value = progressDecimal;
    }
  });

  xhr.addEventListener('load', () => {
    if(xhr.status === 200 || 201) {
      alert('Файл успешно загружен');
    } else {
      alert('Ошибка загрузки файла: ' + xhr.status);
    }
    progressElement.value = 0;
  })

  xhr.addEventListener('error', () => {
    alert('Ошибка соединения');
    progressElement.value = 0;
  })

  xhr.send(formData);
})






