var Word = require('./word');
var inquirer = require('inquirer');

var guessRemaining = 10;
var randomWord
var word
var wordArray = ['star wars', 'harry potter', 'avengers', 'jurassic park', 'jaws', 'casino royale', 'rocky', 'back to the future', 'indiana jones', 'casablanca'];

function newWord() {
    randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    word = new Word(randomWord);
}



function newGame() {
    newWord();
    guessRemaining = 10;
    word.letter();
};

function guessPrompt() {
    if (guessRemaining > 0) {
        console.log(word.toString());
        inquirer.prompt([{
            type: 'input',
            name: 'guess',
            message: '\r\nGuess a letter'
        }]).then(function (res) {
            checkLetter(res.guess)
        })
    } else {
        console.log('Out of Guesses! YOU LOSE!')
        replayPrompt();
    }
    ;
}

function replayPrompt() {
    inquirer.prompt([{
        type: 'confirm',
        name: 'play',
        message: 'Play Again?'
    }]).then(function (res) {
        console.log(res.play)
        if (res.play == true){
            play();
        }else{
            console.log('Game Over')
        }
    })
}

function checkLetter(letter) {
    var lowerCase = letter.toLowerCase();
    var temp = word.toString();
    word.guessCheck(lowerCase);

    if (temp === word.toString()) {
        console.log("Wrong guess")
        guessRemaining--;
        console.log(`You have ${guessRemaining} guesses remaining.`);
        guessPrompt();
    } else {
        correctGuess();
    }
}

function correctGuess() {
    if (word.toString().replace(/ /g,'') === randomWord.replace(/ /g,'')) {
        console.log('You Won.')
        console.log(word.toString())
        replayPrompt();
    }
    else{
        guessPrompt();
    }
}

function play() {
    newGame();
    guessPrompt();
}

play();
