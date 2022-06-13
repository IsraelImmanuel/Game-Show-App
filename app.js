const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("#phrase ul");
const btnReset = document.querySelector(".btn__reset");

let missed = 0;

btnReset.addEventListener('click', (e) => {
  e.preventDefault();
  overlay.style.display = "none";
});

const phrases = [
  'Twelve Carat Toothache',
  'Die lit',
  'Come home the kids miss you',
  'Tickets to my downfall',
  'I never liked you',
]

//return a random phrase of an array
function getRandomPhraseAsArray(arr) {
const randomPhrase = Math.floor(Math.random() * arr.length);
let Phrase = arr[randomPhrase];
console.log(Phrase);
return Phrase;
}

const randomPhrase = getRandomPhraseAsArray(phrases);

// adds the letters of the string to the display
const addPhraseToDisplay = arr => {
for (let i = 0; i < arr.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = arr[i];
  phrase.appendChild(listItem);

  if (arr[i] === ' '){
    listItem.className = 'letter';
  } else {
    listItem.className = 'space';
  }
}
}
 addPhraseToDisplay(phrase);

// check if a letter is in the phrase
function checkLetter(clickedButton)  {
  let match = null;
  let clickedLetter = document.querySelectorAll('li');

for (let i = 0; i < clickedLetter.length; i++) {
    if (clickedButton === clickedLetter[i].textContent.toUpperCase()) {
      clickedLetter[i].classList.add('show');
      match = clickedButton.textContent;
    }
}
return match;
}

// check if the game has been won or lost
const checkWin = () => {

}

// listen for the start game button to be pressed
startButton.addEventListener('click', () => {

});

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {

});
