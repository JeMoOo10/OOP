"use strict"

class Rechthoek{
    #lengte;
    #breedte;
    constructor(lengte,breedte){
        this.#lengte = lengte;
        this.#breedte = breedte;
    }

    getOmtrek(){
        return (this.#lengte + this.#breedte) * 2;
    }

    getOppervlakte(){
        return this.#breedte * this.#lengte;
    }

    
}


const rechthoek = new Rechthoek(6, 4);
console.log(rechthoek.getOmtrek());
console.log(rechthoek.getOppervlakte());