// Expliquez clairement, à l'aide de commentaires,
// ce qu'effectue, chacune des lignes de ce script.


const holes = document.getElementsByClassName('hole');
const moles = document.querySelectorAll('.mole');
const playBtn = document.getElementById('play');

const score = document.getElementById('score');
const molesNbr = document.getElementById('moles-nbr');
var lastHole,
    timeUp = false,
    currentScore = 0, 
    molesScore = 0;

function aaa(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function bbb(holes) {
  var holeIndex = Math.floor(Math.random() * holes.length);
  var hole = holes[holeIndex];

  if (hole === lastHole){
    return bbb(holes);
  }
  lastHole = hole;
  return hole;
}

function ccc() {
  var holeTimer = aaa(750, 1500);
  var hole = bbb(holes);

  hole.classList.add('up');

  molesScore++;
  molesNbr.textContent = molesScore;

  setTimeout(() => {
    hole.classList.remove('up');
    if(!timeUp) {
      ccc();
    }
  }, holeTimer);
}

function ddd() {
  score.innerHTML = 0;
  currentScore = 0;
  molesScore = 0;
  timeUp = false;
}

function wack(mole){
  if(!mole.isTrusted) return;
  currentScore++;

  this.parentNode.classList.remove('up');
  score.textContent = currentScore;
}

function init() {
  console.log("Let's go Pablo !");
  ddd();
  ccc();
  setTimeout(() => {
    timeUp = true;
    alert('Votre score est de : ' + currentScore + ' sur ' + molesScore);
  }, 15000);
}

playBtn.addEventListener('click', init);

moles.forEach((mole) => {
  mole.addEventListener('click', wack)
});
