let listTasks = document.getElementById('tasks__list');
let form = document.getElementById('tasks__form');
let input = document.getElementById('task__input');
let button = document.getElementById('tasks__add');

form.addEventListener('submit', (ev) => ev.preventDefault());
input.addEventListener('keydown', (event) => {
  if(input.value !== '' && event.key === 'Enter'){
    create();
  }
})
button.addEventListener('click', () => {
  if(input.value !== ''){
    create();
  }
})

function create() {
  let task = document.createElement('div');
  task.classList.add('task');
  listTasks.appendChild(task);
  task.innerHTML = `<div class="task__title">${input.value}</div>`;
  input.value = '';

  let close = document.createElement('a');
  close.href = '#';
  close.classList.add('task__remove');
  close.innerHTML = '&times;';
  task.appendChild(close);
  close.addEventListener('click', () => close.closest('.task').remove());
}












// let close = form.getElementsByTagName('a');
// console.log(close)
// // console.log(form)
// for(let item of close) {
//   item.addEventListener('click', () => {
//     let parent = item.closest('task');
//     console.log(parent);
//     parent.remove();
//   });
// }




