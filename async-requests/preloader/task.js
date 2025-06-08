let loader = document.getElementById('loader');
let itemsContainer = document.getElementById('items');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');


xhr.addEventListener('load', () => {
  if (xhr.status === 200) {
    let valuteObj;
    try {
      let data = JSON.parse(xhr.responseText);
      valuteObj = data.response.Valute;
    } catch (errorCatch) {
        loader.classList.remove('loader_active');
        itemsContainer.textContent = 'Не удалось обработать данные с сервера';
        console.log('errorCatch: ' + errorCatch);
        return;
      }
    
    itemsContainer.innerHTML = '';

    for (let key in valuteObj) {
      let currency = valuteObj[key];

      let item = document.createElement('div');
      item.classList.add('item');

      let codeElement = document.createElement('div');
      codeElement.classList.add('item__code');
      codeElement.textContent = currency.CharCode;

      let valueElement = document.createElement('div');
      valueElement.classList.add('item__value');
      valueElement.textContent = currency.Value.toFixed(2);

      let nameCurrencyElement = document.createElement('div');
      nameCurrencyElement.classList.add('item__currency');
      nameCurrencyElement.textContent = 'руб.';

      item.appendChild(codeElement);
      item.appendChild(valueElement);
      item.appendChild(nameCurrencyElement);

      itemsContainer.appendChild(item);

      loader.classList.remove('loader_active');
    }
  } else {
    loader.classList.remove('loader_active');
    itemsContainer.textContent = 'Ошибка загрузки данных: ' + xhr.status;
    }
  }
)

xhr.addEventListener('error', () => {
  loader.classList.remove('loader_active');
    itemsContainer.textContent = 'Ошибка соединения';
})

xhr.send();

// (async function load() {
//   let responseOfServer = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
//   let data = await responseOfServer.json();

//   let valuteObj = data.response.Valute;

//   itemsContainer.innerHTML = "";
  
//   for(let key in valuteObj) {
//     let currencyObj = valuteObj[key];

//     let item = document.createElement('div');
//     item.classList.add("item");

//     let codeElement = document.createElement('div');
//     codeElement.classList.add("item__code");
//     codeElement.textContent = `${currencyObj.CharCode}`;

//     let valueElement = document.createElement('div');
//     valueElement.classList.add("item__value");
//     valueElement.textContent = `${currencyObj.Value.toFixed(2)}`;

//     let currencyElement  = document.createElement('div');
//     currencyElement.classList.add('item__currency');
//     currencyElement.textContent = 'руб.';

//     item.appendChild(codeElement);
//     item.appendChild(valueElement);
//     item.appendChild(currencyElement);

//     itemsContainer.appendChild(item);    
//  }

//  loader.classList.remove('loader_active'); 
  
// })();

