"use strict";
    class Land {
    #naam; 
    static #aantal = 0; 
    constructor(naam) {
        this.#naam = naam;
        Land.#aantal++; 
    }
    static getAantal() { 
        return Land.#aantal;
    }
}
console.log(Land.getAantal()); 
const land = new Land("België");
const buurland = new Land("Nederland");
console.log(Land.getAantal());