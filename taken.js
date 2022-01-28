"use strict"

class Voertuig{   
    #maximumAantalPersonen;
    constructor(maximumAantalPersonen){
        this.#maximumAantalPersonen = maximumAantalPersonen;
    }

    info(){
        return `personal aantal: ${this.#maximumAantalPersonen}`;
    }
}


class LandVoertuig extends Voertuig{
    #aantalwielen;
    constructor(maximumAantalPersonen,aantalwielen){
        super(maximumAantalPersonen);
        this.#aantalwielen = aantalwielen;
    }

    info(){
        return `${super.info()} wielen aantal: ${this.#aantalwielen}`
    }

}

class Fiets extends LandVoertuig {
    #aantalVersnellingen;
    constructor(maximumAantalPersonen, aantalWielen, aantalVersnellingen) {
        super(maximumAantalPersonen, aantalWielen);
        this.#aantalVersnellingen = aantalVersnellingen;
    }
    info() {
        return `${super.info()}, ${this.#aantalVersnellingen} versnellingen`;
    }
    }



class Vaartuig extends Voertuig{
    #diepgang;
    constructor(maximumAantalPersonen,diepgang){
        super(maximumAantalPersonen);
        this.#diepgang = diepgang;
    }

    info(){
        return `${super.info()} : ${this.#diepgang}`
    }

}





class Duikboot extends Vaartuig{
    #maximumDuikDiepte;
    constructor(maximumAantalPersonen, diepgang, maximumDuikDiepte){
        super(maximumAantalPersonen,diepgang);
        this.#maximumDuikDiepte = maximumDuikDiepte;
    }
    info(){
        return `${super.info()} ${this.#maximumDuikDiepte}`
    }
}


const fiets = new Fiets(2, 2, 12);
console.log(fiets.info());
const duikboot = new Duikboot(45, 12, 9000);
console.log(duikboot.info());