"use strict"

class LijnStuk{
    #eindpunt1;
    #eindpunt2;
    constructor(eindpunt1,eindpunt2){
        this.#eindpunt1 = eindpunt1;
        this.#eindpunt2 = eindpunt2;
    }

    isHorizontaal(){
        console.log("is het Horizontaal ?")
        return this.#eindpunt1.getY() === this.#eindpunt2.getY(); 
        
    }

    isVerticaal(){
        console.log("is het Verticaal ?")
        return this.#eindpunt1.getX() === this.#eindpunt2.getX();
    }
}


class Punt{
    #x;
    #y;
    constructor(x,y){
        this.#x = x;
        this.#y = y;
    }

    getX(){
        return this.#x;
    }

    getY(){
        return this.#y;

    }
}


const lijn1 = new LijnStuk (new Punt(8,6),new Punt(8,7)) 

console.log(lijn1.isHorizontaal())
console.log(lijn1.isVerticaal())