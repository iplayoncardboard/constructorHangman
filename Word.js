const letter = require('./Letter');

function Word (word) {
        //array of letter objects
        this.correct = false;
        this.stringArray = word.trim().split('');
        this.letterArray = this.stringArray.map(element => {
        return new letter(element);
    });
}
  //function that returns the word as a stirng displaying characters or underscores
Word.prototype.returnString = function (){
    string =""
    this.letterArray.forEach(element => {
        string += element.display();
    });
    return string;
}
    

//function that takes the character argument and calls the guess founciton oneach letter
Word.prototype.processGuess = function(char){
    let correctGuesses = 0;
    this.letterArray.forEach(element => {
        //TEST
        // console.log("input char "+ char)
        // console.log("obj char " + element.character)
        
        if(element.character.trim() === char.trim()){
            element.guessed = true;
            correctGuesses +=1;
        }
    });
    if(correctGuesses === this.letterArray.length){
        this.correct = true;
    }
}


module.exports = Word;

//Test
// let apple = new Word("apple");
// console.log(apple.letterArray);
// apple.processGuess("a");
// console.log(apple.returnString());