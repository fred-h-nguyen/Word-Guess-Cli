var Letter = require('./letter')

function Word(word) {
    this.word = word.split('')
    this.letter = function () {
        for (var i = 0; i < word.length; i++) {
            this.word[i] = new Letter(this.word[i])
        }
    }
    this.toString = function () {
        var string = []
        for (var i = 0; i < word.length; i++) {
            if (this.word[i].letter === ' ') { string.push(' ') }
            else {
                string.push(this.word[i].reveal())
            }
        }
        return string.join(' ')
    }

    this.guessCheck = function (guess) {
        for (var i = 0; i < word.length; i++) {
            this.word[i].guessCorrect(guess);
        }
    }

}
module.exports = Word;