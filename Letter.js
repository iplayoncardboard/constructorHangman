

function Letter  (character){
        this.character = character + " ";
        guessed: false;
}

Letter.prototype.display = function (){
    if(this.guessed){
        return this.character
    }

    else{
        return "_ ";
    }

}



// Testing
// let zee = new Letter('z');
// zee.guessed = true;
// console.log(zee.display());
module.exports = Letter;
