
let counterDead = document.getElementById('dead');
let counterLost = document.getElementById('lost');
const getHole = index => document.getElementById(`hole${index}`);
for (let i = 1; i < 10; i++) {
  getHole(i).onclick = () => {
    if(getHole(i).className.includes('hole_has-mole')) {
      let numberDead = ++counterDead.textContent;
      if(numberDead === 10) {
        counterDead.textContent = 0;
        counterLost.textContent = 0;
        alert('Победа');
      }
    }else {
      let numberLost = ++counterLost.textContent;
      if(numberLost === 5) {
        counterDead.textContent = 0;
        counterLost.textContent = 0;
        alert('Поражение');
      }
    }
  }
}
