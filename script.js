// Get the current position of the character.
var characterPosition = document.querySelector('#character').getBoundingClientRect();

// Create a function to move the character left.
function moveCharacterLeft() {
  characterPosition.left -= 10;
  document.querySelector('#character').style.left = characterPosition.left + 'px';
}

// Create a function to move the character back to its original position.
function moveCharacterBack() {
  characterPosition.left = 0;
  document.querySelector('#character').style.left = characterPosition.left + 'px';
}

// Set an interval to move the character left and then back to its original position every minute.
setInterval(() => {
  moveCharacterLeft();
  setTimeout(() => {
    moveCharacterBack();
  }, 60000);
}, 60000);