"use strict"

class Huisdier{
    #naam;
    constructor(naam){
        this.#naam = naam;
    }

    getNaam(){
        return this.#naam;
    }
}


class Hond extends Huisdier{
    
    getGeluid(){
        return "woof woof";
    }
}


class Cat extends Huisdier{

    getGeluid(){
        return "meow meow";
    }
}



const dieren = [ new Hond("dog") , new Cat("cat")]

for(const dier of dieren){
    console.log(dier.getNaam(),dier.getGeluid())
}