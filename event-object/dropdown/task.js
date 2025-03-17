let list = document.querySelector('.dropdown__list');
let value = document.querySelector('.dropdown__value');
let items = document.getElementsByClassName('dropdown__item');


value.addEventListener('click', () => list.classList.toggle('dropdown__list_active'));

for (let elem of items) {
  elem.addEventListener('click', (event) => {
    event.preventDefault();
    list.classList.remove('dropdown__list_active')
    value.textContent = elem.querySelector('.dropdown__link').textContent;
  });
}