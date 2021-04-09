// card images array
const array= [
  'pics/img_1.png',
  'pics/img_2.jpg',
  'pics/img_3.jpg',
  'pics/img_4.jpg',
  'pics/img_5.jpg',
  'pics/img_6.jpg',
  'pics/img_1.png',
  'pics/img_2.jpg',
  'pics/img_3.jpg',
  'pics/img_4.jpg',
  'pics/img_5.jpg',
  'pics/img_6.jpg'
];

// Variables
let time = 160;
let firstCardImg, secondCardImg;
let cardCheck = 0;
let scoreMultiplier = 1;
let emptyArray = [];

// CACHED ELEMENT REFERENCES
const cards = document.querySelectorAll('.bound');
const btn = document.querySelector('#reset');
let scoreBoard = document.querySelector(".score");
let math = document.querySelectorAll(".mathProblems");
let question = document.querySelector('#question');
const cardFront =  document.querySelectorAll(".front");
let answer = document.getElementById('answer');
let num1 = '';
let num2 = '';
let ans = '';

// EVENT LISTENERS
btn.addEventListener('click', init);
cards.forEach(cards => cards.addEventListener('click', flip));
answer.addEventListener('keyup',checkKeyEvt);



// shuffle array part 1
let arrayShuffle = function(arr) {
  let newPos;
  let temp;
  for (let i = array.length -1; i>0; i--) {
    newPos = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[newPos];
    arr[newPos] = temp;
  }
  return arr;
};

// shuffled array part 2
function shuffled() { 
  let newArray = arrayShuffle(array);
  
  let h = 0;

  cardFront.forEach(element => {
    element.setAttribute("src", newArray[h]);
    emptyArray[h] = newArray[h];
    h++;
  });
}

shuffled();

//flip card
function flip(event) {  
    if (cardCheck < 2) {
      cardCheck ++;
      
    let flipCard = event.currentTarget;
     if (flipCard.className === "bound") {
       if(flipCard.style.transform = "rotateY(0deg)"){
          flipCard.style.transform = "rotateY(180deg)";
          if(cardCheck === 1) {
            firstCardImg = this;
            this.removeEventListener("click", flip);
        }  
        else {
            secondCardImg = this;
            checkMatch();
        }
       }   
    }  
}
}

function checkMatch(){
  let cardInspect1 = firstCardImg.childNodes[3].childNodes[1];
  let cardSrc1 = cardInspect1.getAttribute('src');
  let cardInspect2 = secondCardImg.childNodes[3].childNodes[1];
  let cardSrc2 = cardInspect2.getAttribute('src');
  let matched = cardSrc1 === cardSrc2;
  matched ? correct() : setTimeout(incorrect, 2000, secondCardImg); 
}

  function correct() {
    cardCheck = 0;
    scoreBoard.innerHTML = scoreMultiplier++;
    mathProblems();
}

  function incorrect(secondCardImg) {
    firstCardImg.style.transform = "rotateY(0deg)";
    secondCardImg.style.transform = "rotateY(0deg)";
    cardCheck = 0;
    cards.forEach(cards => cards.addEventListener('click', flip));
 }


// multiplication question
 function mathProblems() {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  num1 = Math.floor(Math.random() *12);
  num2 = Math.floor(Math.random ()* 12);
  question.innerHTML = (num1 + "x" + num2 + "=");
  answer.style.visibility = "visible";
  question.style.visibility = "visible";
 }

function checkKeyEvt(event){
  if(event.keyCode === 13){
    checkAnswer();
  }
}
//check answer
function checkAnswer() {
  ans = parseInt(answer.value);
  if (ans === num1 * num2) {
    scoreBoard.innerHTML = scoreMultiplier++;
    answer.style.visibility = "hidden";
    question.style.visibility = "hidden";
}
}

//winning message
//all cards are flipped 
function winningMsg(){
  if (scoreBoard.innerHTML = 12)
  {
    alert("Yay!")
  } else {
    "Try Again!"
  }
}

function init () {
  matchedCards = false;
  setTimeout(shuffled, 2000);
  firstCardImg.style.transform = "rotateY(0deg)";
  secondCardImg.style.transform = "rotateY(0deg)";
  cardCheck = 0;
  scoreBoard.innerHTML = 0;
}




