// card images array
const array= [
  'pics/img_1.png',
  'pics/img_1.png',
  'pics/img_2.jpg',
  'pics/img_2.jpg',
  'pics/img_3.jpg',
  'pics/img_3.jpg',
  'pics/img_4.jpg',
  'pics/img_4.jpg',
  'pics/img_5.jpg',
  'pics/img_5.jpg',
  'pics/img_6.jpg',
  'pics/img_6.jpg'
];

//Variables
let time = 160;
let firstCard, secondCard;
let cardCheck = 0;
let scoreMultiplier = 1;


// // CACHED ELEMENT REFERENCES
const cards = document.querySelectorAll('.bound');
const btn = document.querySelector('#reset');
let scoreBoard = document.querySelector(".score");
let math = document.querySelectorAll(".mathProblems");
let answer = document.querySelector('#answer');
let question = document.querySelector('#question');
let cardFront =  document.querySelectorAll(".front");


// EVENT LISTENERS
// btn.addEventListener('click', shuffled);
cards.forEach(cards => cards.addEventListener('click', flip));

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
  console.log(newArray);
  
  let h = 0;

  cardFront.forEach(element => {
    console.log("element=", element)
    element.setAttribute("src", newArray[h]);
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
            firstCard = this;
        }  
        else {
            secondCard = this;
            matchedCards();
        }
       }   
    }  
}
}
 

//checking
function matchedCards() {
  let matched = firstCard.dataset.framework === secondCard.dataset.framework;
  matched ? correct() : setTimeout(incorrect, 2000);
};


function correct() {
  cardCheck = 0;
  scoreBoard.innerHTML = scoreMultiplier++;
}

function incorrect() {
  firstCard.style.transform = "rotateY(0deg)";
  secondCard.style.transform = "rotateY(0deg)";
  cardCheck = 0;
}


// multiplication question

//  function mathProblems() {
  let num1 = Math.floor(Math.random() *12);
  let num2 = Math.floor(Math.random ()* 12);
  question.innerHTML = num1 * num2;

  question.innerHTML = (num1 + "x" + num2 + "=");

//  }
 

// detecting keyboard press

answer.addEventListener('keyup', (e) => {
  let code = e.key;
  if (code === 13) {
    return;
    checkAnswer();
  } else return false;
});


//check answer
function checkAnswer() {
  let ans = answer.value;
  if (ans === num1 * num2) {
  answer.value("");
  mathProblems();
}
}


// function init () {
//   matchedCards = false;
//   shuffled();
// }



