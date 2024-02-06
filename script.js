/* script.js */ 

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && gameFinished) {
        advanceDialogue();
    }
});



let currentDialogue = 0;
let currentChar = 0;
let typingSpeed = 20; // Milliseconds per character
let crosswordVisible = false; // Track if crossword is visible
const dialogues = [
    "Hello Emmy!",
    "It's me Hello Kitty again!!",
    "I've come here with some exciting news! Kamen has whipped up another special something just for you!",
    "And I, Hello Kitty, am here to deliver it of course!",
    "But, hold your whiskers! You didn't think I'd just hand it over that easily, did you? Like last time, there's a little challenge to tackle first.",
    "Obviously DUH!",
    "Think back to those mornings of you and Kamen solving each day's Wordle",
    "Ah, the memories. Fun times right. ",
    "Well try solving this one like the good old times and I'll show you what Kamen made for you",
    "YAY YOU GOT IT, GOAT!!!!! Now, let's see what message Kamen has for you.",
    "Did you think that was all? Nope! There's more where that came from! Ready for a little adventure? Follow me to the next magical moment!"
];


function advanceDialogue() {
    if (currentDialogue < dialogues.length) {
        if (currentChar < dialogues[currentDialogue].length) {
            // Show the next character
            document.getElementById('dialogue-text').innerText = dialogues[currentDialogue].substring(0, currentChar + 1);
            currentChar++;
            setTimeout(advanceDialogue, typingSpeed);
        } else {
            // Check if dialogue is at index 9 and show Wordle game
            if (currentDialogue === 8) {
                showWordleGame();
            }

            // Prepare for the next line
            currentDialogue++;
            currentChar = 0;

            // Redirect to the URL when currentDialogue equals 10
            if (currentDialogue === 11) {
                setTimeout(function() {
                    window.location.href = "https://fiirt.github.io/question/";
                }, 3000); // 3000 milliseconds = 3 seconds
            }
        }
    } 
}

function showWordleGame() {
    const wordleContainer = document.getElementById('wordle-container');
    wordleContainer.style.display = 'block';
    gameFinished = false;
}


// Initialize the first dialogue
advanceDialogue();
