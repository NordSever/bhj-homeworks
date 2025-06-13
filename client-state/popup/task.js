
function setCookie (name, value) {
  document.cookie = name + '=' + encodeURIComponent(value);

}


function getCookie (name) {
  //Если предполагается, что есть только одна кука, то достаточно одного такого кода:
  return document.cookie ? document.cookie.substring(name.length + 1) : null;
  //Ели на сайте несколько кук, то код закомментированный ниже:
  // const cookies = document.cookie.split('; ');
  // const cookie = cookies.find(c => c.startsWith(name + '='));
  // return cookie ? cookie.substring(name.length + 1) : null;
}


let popup = document.getElementById('subscribe-modal');
let closeButton = document.querySelector('.modal__close'); 


window.addEventListener('load', () => {
  if(getCookie('status') !== 'close') {
    popup.classList.add('modal_active');
    
  }
});

closeButton.addEventListener('click', () => {
  popup.classList.remove('modal_active');
  setCookie('status', 'close');
})


