var Letter = require('./letter')

function Word(word) {
    this.word = word.split('')
    this.string = []
    this.letter = function () { 
        for (var i =0; i<word.length; i++){
            this.word[i]= new Letter(this.word[i])
        }
    }
    this.toString = function () {
        for (var i = 0; i < word.length; i++) {
            if (this.word[i].letter === ' ') { this.string.push(' ') }
            else {
                this.string.push(this.word[i].reveal())
            }
        }
        return this.string.join(' ')
    }

    this.guessCheck = function(guess){
        for(var i = 0 ; i<word.length; i++){
            this.word[i].guessCorrect(guess);
        }
    }

}