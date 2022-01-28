"use strict"

class Bankrekening{
    #saldo = 0;

    stort(bedrag){
        if(bedrag > 0){
        this.#saldo += bedrag;
        }
    }

    haalAf(bedrag){
        if(bedrag > 0 && bedrag <= this.#saldo){
            this.#saldo -= bedrag;
        } else {
            console.log( "not good")
        }
    }

    getSaldo(){
        return this.#saldo;
    }
}


const rekening = new Bankrekening();
console.log(rekening.getSaldo());
rekening.stort(10);
console.log(rekening.getSaldo());
rekening.stort(-2);
console.log(rekening.getSaldo());
rekening.haalAf(2);
console.log(rekening.getSaldo());
rekening.haalAf(-2);
console.log(rekening.getSaldo());
rekening.haalAf(20);
console.log(rekening.getSaldo());