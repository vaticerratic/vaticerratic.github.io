// Set initial position
let character = {
    x: 0,
    y: 0
};

let gameContainer = document.getElementById('game-container');
let characterElement = document.getElementById('character');

// This function will update the character's position on the screen
function drawCharacter() {
    characterElement.style.left = character.x + 'px';
    characterElement.style.top = character.y + 'px';
}

// Listen for keydown events
window.addEventListener('keydown', function(event) {
    // Check which key was pressed
    switch(event.key) {
        case 'ArrowUp':
            // Up arrow was pressed
            if(character.y > 0) {
                character.y -= 10;
            }
            break;
        case 'ArrowDown':
            // Down arrow was pressed
            if(character.y < (gameContainer.offsetHeight - characterElement.offsetHeight)) {
                character.y += 10;
            }
            break;
        case 'ArrowLeft':
            // Left arrow was pressed
            if(character.x > 0) {
                character.x -= 10;
            }
            break;
        case 'ArrowRight':
            // Right arrow was pressed
            if(character.x < (gameContainer.offsetWidth - characterElement.offsetWidth)) {
                character.x += 10;
            }
            break;
    }

    // Redraw the character
    drawCharacter();
});

// Draw the character for the first time
drawCharacter();
