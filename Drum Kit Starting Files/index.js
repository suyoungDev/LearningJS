const numberOfDrumButtons = document.querySelectorAll('.drum').length

const crash = new Audio('./sounds/crash.mp3');
const kick = new Audio('./sounds/kick-bass.mp3');
const snare = new Audio('./sounds/snare.mp3');
const tom1 = new Audio('./sounds/tom-1.mp3');
const tom2 = new Audio('./sounds/tom-2.mp3');
const tom3 = new Audio('./sounds/tom-3.mp3');
const tom4 = new Audio('./sounds/tom-4.mp3');


document.querySelector('.w').addEventListener('click', () => tom1.play());
document.querySelector('.a').addEventListener('click', () => tom2.play());
document.querySelector('.s').addEventListener('click', () => tom3.play());
document.querySelector('.d').addEventListener('click', () => tom4.play());
document.querySelector('.j').addEventListener('click', () => crash.play());
document.querySelector('.k').addEventListener('click', () => kick.play());
document.querySelector('.l').addEventListener('click', () => snare.play());



// document.addEventListener('keydown', () => {
//   let buttonInnerHTML = this.innerHTML;
// });


for (i = 0 ; i < numberOfDrumButtons; i++){
  document.querySelectorAll('button')[i].addEventListener('click', 
  function(){this.style.color = 'white'})
}


document.addEventListener('keydown', (event) => playSound(event.key) );

function playSound(key){
  switch (key) {
    case 'w':
      tom1.play()
      break;

    case 'a':
      tom2.play()
      break;

    case 's':
      tom3.play()
      break;

    case 'd':
      tom4.play()
      break;

    case 'j':
      crash.play()
      break;

    case 'k':
      kick.play()
      break;

    case 'l':
      snare.play()
      break;


    default:
      break;
  }
}
