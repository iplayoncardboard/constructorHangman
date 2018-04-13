let wordArray = ['cats', 'tacos', 'antidisestablishmentarianism', 'santa']

function getWord (){
    return wordArray[generateRandomWord()]
}

function generateRandomWord (){
        min = Math.ceil(0);
        max = Math.floor(wordArray.length-1);
        return Math.floor(Math.random() * (max - min + 1)) + min;
}


module.exports = getWord;
//Testing
//console.log(getWord());