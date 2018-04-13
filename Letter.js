function Letter  (character){
        this.character = character;
        guessed: false;
}

Letter.prototype.display = function (){
    if(this.guessed){
        return this.character
    }

    else{
        return " _ ";
    }

}


