"use strict";
class Artikel {
    #naam;   // 1
    #prijsExclusiefBTW;
    #btwPercentage;
    constructor(naam, prijsExclusiefBTW, btwPercentage) {
        this.#naam = naam;
        this.#prijsExclusiefBTW = prijsExclusiefBTW;
        this.#btwPercentage = btwPercentage;
    }
    getNaam() {
        return this.#naam;
    }
    getPrijsExclusiefBTW() {
        return this.#prijsExclusiefBTW;
    }
    getPrijsInclusiefBTW() {
        return Number((this.#prijsExclusiefBTW * (1 + this.#btwPercentage / 100)).toFixed(2));
    }

    getInfo() {
        return `${this.#naam}: € ${this.getPrijsInclusiefBTW()}`;
    }
}

class FoodArtikel extends Artikel {    // 2
    #vervalPeriode;   // 3
        constructor(naam, prijsExclusiefBTW, btwPercentage, vervalPeriode) {
        super(naam, prijsExclusiefBTW, btwPercentage);  // 4
        this.#vervalPeriode = vervalPeriode;
    }
    getVervalPeriode() {  // 5
        return this.#vervalPeriode;
    }

    getInfo() {
        return `${super.getInfo()} vervalt na ${this.#vervalPeriode} dagen`; 
    }
}



class NonFoodArtikel extends Artikel {
    #garantiePeriode;
    constructor(naam, prijsExclusiefBTW, btwPercentage, garantiePeriode) {
        super(naam, prijsExclusiefBTW, btwPercentage);
        this.#garantiePeriode = garantiePeriode;
    }
    getGarantiePeriode() {
        return this.#garantiePeriode;
    }
}


const appel = new FoodArtikel("appel", 0.3, 6, 7);
console.log(appel.getNaam());
console.log(appel.getPrijsInclusiefBTW());
console.log(appel.getVervalPeriode());
const koelkast = new NonFoodArtikel("koelkast", 300, 21, 3);
console.log(koelkast.getNaam());
console.log(koelkast.getPrijsInclusiefBTW());
console.log(koelkast.getGarantiePeriode());

console.log(appel.getInfo()); 
console.log(koelkast.getInfo());