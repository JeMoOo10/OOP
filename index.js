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


const artikels = [ 
    new FoodArtikel("druif", 6, 6, 7), 
    new NonFoodArtikel("papier", 10, 21, 1) 
    ];
    for (const artikel of artikels) { 
    console.log(artikel.getInfo()); 
    }