"use strict"

class Persoon {
    #voornaam;
    #familienaam;
    constructor(voornaam,familienaam){
        this.#voornaam = voornaam;
        this.#familienaam = familienaam;
    }

    getNaam(){
        return `${this.#voornaam} ${this.#familienaam}`
    }
}


class KlassiekGezin{
    #papa;
    #mama;
    #kinderen = []
    constructor(papa,mama){
        this.#papa = papa;
        this.#mama = mama;
    }

    voegKindToe(persoon){
        this.#kinderen.push(persoon);
    }

    getPapa(){
        return this.#papa;
    }

    getMama(){
        return this.#mama;
    }

    getKinderen(){
        return this.#kinderen;
    }
}

const gezin = new KlassiekGezin(new Persoon("jamal", "albatta"), new Persoon("mmm", "ddd"));

gezin.voegKindToe(new Persoon("ahmed","albatta"))
gezin.voegKindToe(new Persoon("lala","albatta"))


console.log(gezin.getPapa().getNaam())
console.log(gezin.getMama().getNaam())

for(const kind of gezin.getKinderen()){
    console.log(kind.getNaam())
}