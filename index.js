"use strict";
class GoedDoel { 
    #opbrengst = 0; 
    stort(bedrag) { 
        if (bedrag > 0) { 
            this.#opbrengst += bedrag; 
        }
    } 
    getOpbrengst() { 
        return this.#opbrengst; 
    }
}


const komOpTegenKanker = new GoedDoel(); 
komOpTegenKanker.stort(100); 
komOpTegenKanker.stort(200);
console.log(komOpTegenKanker.getOpbrengst()); 
const cliniClowns = new GoedDoel(); 
cliniClowns.stort(500);
console.log(cliniClowns.getOpbrengst());
console.log(komOpTegenKanker.stort(-6000));
console.log(komOpTegenKanker.getOpbrengst()); 

