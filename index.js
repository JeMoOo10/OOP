"use strict";
class GoedDoel { 
    #opbrengst; 
    #naam;
    constructor(naam){
        this.#opbrengst = 0;
        this.#naam = naam;
    }
    stort(bedrag) { 
        if (bedrag > 0) { 
            this.#opbrengst += bedrag; 
        }
    } 
    getOpbrengst() { 
        return this.#opbrengst; 
    }

    getNaam(){
        return this.#naam;
    }
}


const komOpTegenKanker = new GoedDoel("Kom op tegen kanker");
komOpTegenKanker.stort(100); 
komOpTegenKanker.stort(200);
console.log(komOpTegenKanker.getOpbrengst()); 
const cliniClowns = new GoedDoel("cliniClowns"); 
cliniClowns.stort(500);
console.log(cliniClowns.getOpbrengst());
console.log(komOpTegenKanker.getNaam());
console.log(cliniClowns.getNaam());

