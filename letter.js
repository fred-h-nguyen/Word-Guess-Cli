function Letter(letter) {
    this.letter = letter;
    this.correctGuess = false;
    this.reveal = function () {
        if (this.correctGuess) {
            return this.letter
        } else {
            return '_'
        }
    }
    this.guessCorrect = function (guess) {
        if (guess === this.letter) {
            this.correctGuess = true;
        }
    }
}

module.exports = Letter;