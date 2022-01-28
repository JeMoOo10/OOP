"use strict"

class Vierkant {
    #zijde;
    constructor(zijde){
        this.#zijde = zijde;
    };

    getOmtrek(){
        return this.#zijde * 4;

    };

    getOppervlakte(){
        return this.#zijde * this.#zijde;
    };
};

const vierkanten = [ new Vierkant(3), new Vierkant(5)];

for(const vierkant of vierkanten){
    console.log(vierkant.getOmtrek());
    console.log(vierkant.getOppervlakte());
};