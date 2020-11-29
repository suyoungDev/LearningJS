const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];
let isStart = false;
let level = 0;


$(document).keypress(function(){
  if (!isStart) {
    isStart = true;
    $('#level-title').text(`Level ${level}`);
    nextSequence();
  }
});


$('.btn').click( function(){
  let userChosenColor = $(this).attr('id');
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  
  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length-1);
});


function startOver(){
  level = 0;
  gamePattern =[];
  isStart = false;
}

function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    console.log('success');

    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();
      }, 1000);
    }
    
  } else {
    console.log('wrong');
    playSound('wrong');
    $('body').addClass('game-over');
    setTimeout(function(){
      $('body').removeClass('game-over');
    }, 200);
    $('#level-title').text('Game Over, Press Any Key to Restart');
    startOver();
  }
}


function nextSequence(){
  // nextSequence가 불러올때마다 레벨업
  level ++;
  $('#level-title').text(`Level ${level}`);

  userClickedPattern = [];

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $(`#${randomChosenColour}`).fadeOut(50).fadeIn(50);
};

function playSound(key){
  let sound = new Audio(`./sounds/${key}.mp3`)
  sound.play();
};


function animatePress(currentColor){
  $(`#${currentColor}`).addClass('pressed');

  setTimeout(function(){
    $(`#${currentColor}`).removeClass('pressed');
  }, 100);
}


