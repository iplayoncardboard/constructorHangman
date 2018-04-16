const randomWord = require ('./randomWord');
const Word = require('./Word');
const inquirer = require('inquirer')


let remainingGuesses = 10;
let guessArray = [];

//Generate a random word
let currentWord = new Word(randomWord());
// console.log(currentWord);

//display _____ of word
console.log(currentWord.returnString());
//ask user to guess a letter
inquirer.prompt({
    name: 'question1',
    message: 'Guess a letter!'
}).then((guess) =>{
    //test
    // console.log('test complete: '+ JSON.stringify(guess));

//process guess
    if (!guessArray.includes(guess.question1)){
        remainingGuesses--;
         currentWord.processGuess(guess.question1);
         console.log(currentWord.correct);
    }

    
    
//If !_ remaining player wins. work in progress fix this logic
    // if(currentWord.array.forEach(element => {
    //     element.guessed;
    // }
    // ))
    // {
    //     console.log("winner");
    // };
    //Display win message 
    //pick a new word
    //reset remaining guesses to 10

// else if guesses < 0
    // decrement guesses 
    //use word method to check guess

// else display lose message
    //reset remaining guesses to 10
    ////pick a new word
});
