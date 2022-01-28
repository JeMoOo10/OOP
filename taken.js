"use strict"

class DvdSpeler{
    #snelheid = 0;

    start(){
        this.#snelheid = 1;
        return this.#snelheid;
    }

    spoelDoor(){
        if( this.#snelheid < 0){
            this.#snelheid = 2;
        } else {
            this.#snelheid *= 2;
        }
        return this.#snelheid;
    }

    spoelTerug(){
        if(this.#snelheid > 0){
            this.#snelheid = -2;
        }else {
            this.#snelheid *= 2;
        }
        return this.#snelheid;
    }
}


const snel = new DvdSpeler();

console.log(snel.start());
console.log(snel.spoelDoor());
console.log(snel.spoelDoor());
console.log(snel.spoelDoor());
console.log(snel.spoelTerug());
console.log(snel.spoelTerug());
console.log(snel.spoelTerug());
console.log(snel.start());

