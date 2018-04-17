const randomWord = require ('./randomWord');
const Word = require('./Word');
const inquirer = require('inquirer')


let remainingGuesses = 10;
let guessArray = [];

//Generate a random word
let currentWord = new Word(randomWord());
// console.log(currentWord);

resetGame()

userGuess();

function userGuess(){
    displayGameStats();
    console.log("correct: "+currentWord.correct);
    //ask user to guess a letter
inquirer.prompt({
    name: 'question1',
    message: 'Guess a letter!'
}).then((guess) =>{
    let letterGuessed = guess.question1.charCodeAt(0)
    //validate that one character was entered
    if((guess.question1.length > 1)){ 
        return userGuess();
    }
    // validate that the letter is upper or lowercase.
    if(letterGuessed >= 65 && letterGuessed  <= 90 || letterGuessed  >= 97 && letterGuessed  <= 122)
    {
        let charGuessed = guess.question1.toLowerCase();
        if (!guessArray.includes(charGuessed)){
            remainingGuesses--;
            currentWord.processGuess(charGuessed);
            checkForWin();
        }
    
        else{
            remainingGuesses--;
            displayGameStats();
        }
    }

    else{
        return userGuess();
    }
//process guess
 

});}


function displayGameStats(){
    //display _____ of word
    console.log('Guesses Remaining: '+ remainingGuesses);
    console.log(currentWord.returnString());
}

function winGame(){
    displayGameStats();
    console.log("Winner")
}

function loseGame(){
    console.log("LOSER!!!")

}

function resetGame(){
    currentWord = new Word(randomWord());
        //reset remaining guesses to 10
    remainingGuesses = Math.floor(1.5*currentWord.letterArray.length);
    ////pick a new word
    
}

function checkForWin(){
    if(currentWord.correct){
        winGame();
    }
    else if(remainingGuesses === 0){
        loseGame();
    }
    else{
        userGuess();
    }
}