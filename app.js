const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('#phrase ul');
const startButton = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const winText = document.querySelector('.title');
const ul = document.querySelector('ul');

let missed = 0;

const phrases = [
  'Twelve Carat Toothache',
  'Whole Lotta Red',
  'Come home the kids miss you',
  'Tickets to my downfall',
  'I never liked you',
]

startButton.addEventListener('click',(e) => {
  e.preventDefault();
  overlay.style.display = 'none';
});

  function getRandomPhraseAsArray(arr) {
  const randomPhrase = Math.floor(Math.random() * phrases.length);
  let Phrase = arr[randomPhrase];
  console.log(Phrase);
  return Phrase;
}

const randomPhrase = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i += 1){
    let letter = arr[i];
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.textContent = letter;
    ul.appendChild(li);

    if (letter === " ") {
      li.className = 'space';
    } else {
      li.className = 'letter';
    }
    }
  }
  addPhraseToDisplay(randomPhrase);

  let clickedLetter = document.querySelectorAll('.letter');
  function checkLetter(arr) {
    let match = null;

    for (let i = 0; i < clickedLetter.length; i += 1) {
      const li = clickedLetter[i];
      if (clickedLetter.textContent === arr.textContent){
        clickedLetter.classList.add('show');
        clickedLetter.style.transition = "all .5s ease";
        match = arr.textContent;
      }
    }
    return match;
  }

  qwerty.addEventListener('click', (e) => {
    const button = e.target;
    if (button.tagName === 'BUTTON') {
      button.disabled = true;
      button.className = "chosen";
      let letterFound = checkLetter(button);

      if (letterFound === null) {
        const heart = document.querySelectorAll(".tries img");
        heart[missed].src = "images/lostHeart.png";
        missed += 1;
      }
    }
  });
