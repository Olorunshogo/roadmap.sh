
const textarea = document.getElementById('userInput');
const characterCountDisplay = document.getElementById('characterCount');
const maxCharacter = 250;

textarea.addEventListener('input', function() {
    const currentLenght = textarea.value.length;

    characterCountDisplay.textContent = `${currentLenght} / ${maxCharacter}`;

    if (currentLenght > maxCharacter) {
        textarea.classList.add('limit-reached');
        characterCountDisplay.classList.add('limit-reached');
    } else {
        textarea.classList.remove('limit-reached');
        characterCountDisplay.classList.remove('limit-reached');
    }
});