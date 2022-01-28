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


const goedeDoelen = [ 
    new GoedDoel("Kom op tegen kanker"), 
    new GoedDoel("Cliniclowns") 
    ];


    for (const goedDoel of goedeDoelen) { 
        console.log(goedDoel.getNaam()); 
        };