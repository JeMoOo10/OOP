"use strict";
class GoedDoel { 
    #opbrengst; 
    #naam;
    #adres;
    #contactpersonen;
    constructor(naam,adres){
        this.#opbrengst = 0;
        this.#naam = naam;
        this.#adres = adres;
        this.#contactpersonen = [];
    };
    stort(bedrag) { 
        if (bedrag > 0) { 
            this.#opbrengst += bedrag; 
        };
    };
    getOpbrengst() { 
        return this.#opbrengst; 
    };

    getNaam(){
        return this.#naam;
    };

    getAdres() {
        return this.#adres;
    };

    voegContactpersoonToe(persoon) { 
        this.#contactpersonen.push(persoon); 
    };
    getContactpersonen() {
        return this.#contactpersonen;
    };
};

class Adres {
    #straat;
    #huisnummer;
    #postcode;
    #gemeente;
    constructor(straat, huisnummer, postcode, gemeente) {
        this.#straat = straat;
        this.#huisnummer = huisnummer;
        this.#postcode = postcode;
        this.#gemeente = gemeente;
    };
    getVolledigAdres() {
        return `${this.#straat} ${this.#huisnummer} ${this.#postcode} ${this.#gemeente}`;
    };
};


class Persoon {
    #voornaam;
    #familienaam;
    constructor(voornaam, familienaam) {
        this.#voornaam = voornaam;
        this.#familienaam = familienaam;
    };
    getNaam() {
        return `${this.#voornaam} ${this.#familienaam}`;    
    };
};


const cliniClowns = new GoedDoel("clinik", new Adres("schipstraat","6","8530","Harelbeke"));
console.log(cliniClowns.getAdres().getVolledigAdres())


cliniClowns.voegContactpersoonToe(new Persoon("Arthur", "Janssens")); 
cliniClowns.voegContactpersoonToe(new Persoon("Emma", "Peeters"));
console.log(cliniClowns)
for (const persoon of cliniClowns.getContactpersonen()) { 
console.log(persoon.getNaam()); 
}