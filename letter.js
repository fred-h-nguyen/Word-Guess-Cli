function Letter(letter) {
    this.letter = letter;
    this.correctGuess = false;
    this.isGuessed = false;
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
            this.isGuessed = true;
        } else {
            this.isGuessed = true;
        }
    }
}