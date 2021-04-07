// card images array
const imagesArray= [
"./pics/poptart-cat.jpg",
"./pics/sandiwch-cat.jpg",
"./pics/pizza.jpg",
"./pics/mario.jpg",
"./pics/pickachu.jpg",
"./pics/space-cat.jpg",
"./pics/baby-yoda.jpg"
];

//Variables
let time = 160;
let score = 0;
let hasFlippedCard = false;
// let lockBoard = false;
let firstCard, secondCard;


// // CACHED ELEMENT REFERENCES
const cards = document.querySelectorAll('.bound');
const btn = document.querySelector('#reset');
let scoreBoard = document.querySelector(".score");
let allCards = document.querySelectorAll('.card-wrapper');


// EVENT LISTENERS

//testing button to make sure it works
// let btn = document.querySelector('#reset');
// btn.addEventListener('click',function() {
//     console.log("hi!")
// });



// const shuffleArray = imagesArray => {
//     for (let i = imagesArray.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i+1));
//         const temp = imagesArray[i];
//         imagesArray[i] = array[j];
//         array[j] = temp;
//       }
//   return imagesArray;
// };

// const shuffle = (array) {
//     let oldElement;
//     for (let i = array.length - 1; i > 0; i--) {
//       let rand = Math.floor(Math.random() * (i + 1));
//       oldElement = array[i];
//       array[i] = array[rand];
//       array[rand] = oldElement;
//     }
//     return array;
//   } 
shuffle()

function shuffle () {
	let input = imagesArray;
	
for (let i = input.length-1; i >= 0; i--) {

    let randomIndex = Math.floor(Math.random() * (i + 1)); 
    let itemAtIndex = input[randomIndex]; 
    
    input[randomIndex] = input[i]; 
    input[i] = itemAtIndex;
}

}	


cards.forEach(cards => cards.addEventListener('click', flip));

//flip card
function flip(event) {

    let flipCard = event.currentTarget;
     if (flipCard.className === "bound") {
        if(flipCard.style.transform == "rotateY(180deg)") {
            // flipCard.style.transform = "rotateY(0deg)";
     }
        else {
            flipCard.style.transform = "rotateY(180deg)";
         } 
    } if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
          
            return;
            }
            secondCard = this;
    checkForMatch();
    }


  // match
  function checkForMatch() {
    let matched = firstCard.dataset.framework === secondCard.dataset.framework;
  
    matched ? disableCards() : notFlippedCards(); //ternary operator
  }

// disable cards
  function disableCards() {
    firstCard.removeEventListener('click', flip);
    secondCard.removeEventListener('click', flip);
  }  

  //not flipped
  function notFlippedCards() {
    lockBoard = true;
  
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

    //   init();  
    }, 600);
  }

 

function init() {
    firstCard = null;
    secondCard = null;
    hasFlippedCard = false;
    lockBoard = false;
  }





  


