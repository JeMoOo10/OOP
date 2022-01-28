"use strict"


class HogerLager {
    #teRadenGetal = Math.floor((Math.random() * 10) + 1)
    #aantalPogingen = 0;
    gok(getal) {
        this.#aantalPogingen++;
        if (getal < this.#teRadenGetal) {
            return "Hoger";
        }
        if (getal > this.#teRadenGetal) {
            return "Lager";
        }
        return "Gewonnen";
    }
    getAantalPogingen() {
        return this.#aantalPogingen;
    }
}

const hogerLager = new HogerLager();
let getal = Number(prompt("Getal:"));
let resultaat = hogerLager.gok(getal);
while (resultaat !== "Gewonnen") {
getal = Number(prompt(`${resultaat}, getal:`));
resultaat = hogerLager.gok(getal);
}
alert(`${hogerLager.getAantalPogingen()} pogingen.`);