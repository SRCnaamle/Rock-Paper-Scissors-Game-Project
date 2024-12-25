
let score = JSON.parse(localStorage.getItem('score'));
if(!score){
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}

updateScoreElement();

let computerMove ='';
let result= '';

let isAutoPlaying = false;
let intervalId;
  //isAutoPlaying = true;
function autoPlay(){
  if(!isAutoPlaying){
    isAutoPlaying = true;
    intervalId = setInterval(function(){
      const playerMove=pickComputerMove();
      computerMove = pickComputerMove();
      playGame(playerMove);
    },1000);
  }
  else{
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-button').addEventListener('click',()=>{
  computerMove = pickComputerMove();
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click',()=>{
  computerMove = pickComputerMove();
  playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click',()=>{
  computerMove = pickComputerMove();
  playGame('scissors');
});

document.body.addEventListener('keydown',(event)=>{
  if(event.key ==='r'){
    computerMove = pickComputerMove();
    playGame('rock');
  }
  else if(event.key === 'p'){
    computerMove = pickComputerMove();
    playGame('paper');
  }
  else if(event.key === 's'){
    computerMove = pickComputerMove();
    playGame('scissors');
  }
});

function playGame(playerMove){
  if(playerMove=== 'scissors')
  {
    if(computerMove==='scissors'){
      result='Tie.';
    }
    else if(computerMove==='rock'){
      result='You lose.';
    }
    else{
      result='You win.';
    }
  }

  else if(playerMove=== 'paper'){
    if(computerMove==='paper'){
      result='Tie.';
    }
    else if(computerMove==='scissors'){
      result='You lose.';
    }
    else{
      result='You win.';
    }

  }

  else{
    if(computerMove==='rock'){
      result='Tie.';
    }
    else if(computerMove==='paper'){
      result='You lose.';
    }
    else{
      result='You win.';
    }
  }

  if(result === 'You win.'){
    score.wins +=1;
  }
  else if(result === 'You lose.'){
    score.losses +=1;
  }
  else if(result === 'Tie.'){
    score.ties +=1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();
  
  document.querySelector('.js-result').innerHTML = `${result}`;
  document.querySelector('.js-moves').innerHTML = `You
<img src="imagesForRockPaperScissorsGame/${playerMove}-emoji.png" class="move-icon" alt="">
<img src="imagesForRockPaperScissorsGame/${computerMove}-emoji.png" class="move-icon" alt="">
Computer`;
  

}
//let randumNumber = -1;
function pickComputerMove(){
  let computerMove ='';
  let randumNumber= Math.random();
  if(randumNumber>=0 && randumNumber<1/3){
  computerMove='rock';
  }
  else if(randumNumber>=1/3 && randumNumber<2/3)
  {
    computerMove = 'paper';
  }
  else{
    computerMove = 'scissors';
  }
  return computerMove;
}

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
