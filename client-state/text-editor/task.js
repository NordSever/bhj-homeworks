let editor = document.getElementById('editor');

window.addEventListener('load', () => {
  if(localStorage.text) {
    editor.value = localStorage.text;
  }
});

editor.addEventListener('input', () => {
 localStorage.setItem('text', editor.value);
});




