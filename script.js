let rn1 = Math.floor(Math.random() * 6) + 1;
let rn2 = Math.floor(Math.random() * 6) + 1;

document.querySelector('.img1').setAttribute('src', `images/dice${rn1}.png`)
document.querySelector('.img2').setAttribute('src', `images/dice${rn2}.png`)

let whosWin;
if ( rn1 > rn2 ) {
  whosWin = 'player1 win!';
} else if ( rn1 < rn2 ) {
  whosWin = 'player2 win!';
} else {
  whosWin = 'draw!'
}

document.querySelector('h1').innerHTML = `${whosWin}`