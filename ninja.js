
class Ninja {

    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log("El nombre del ninja es :"+this.nombre);
    }

    showStats () {
        console.log("El nombre del ninja es :"+this.nombre);
        console.log("La salud del ninja es :"+this.salud);
        console.log("La Fuerza del ninja es :"+this.fuerza);
        console.log("La velocidad del ninja es :"+this.velocidad);
    }

    drinkSake() {
        this.salud += 10;
    }

}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();