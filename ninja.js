
class Ninja {

    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    get getNombre(){
        return this.nombre;
    }

    get getSalud() {
        return this.salud;
    }

    get getVelocidad() {
        return this.velocidad;
    }

    get getFuerza() {
        return this.fuerza
    }

    /**
     * @param {String} nombre
     */
    set setNombre(nombre){
        this.nombre = nombre;
    }

    /**
     * @param {number} salud
     */
    set setSalud(salud) {
        this.salud = salud;
    }

    /**
     * @param {number} velocidad
     */
    set setVelocidad(velocidad) {
        this.velocidad = velocidad;
    }

    /**
     * @param {number} fuerza
     */
    set setFuerza(fuerza) {
        this.fuerza = fuerza;
    }
    
    sayName() {
        console.log("El nombre del ninja es :"+this.nombre);
    }

    showStats () {
        console.log(`Nombre: ${this.nombre}, salud: ${this.salud}, velocidad:${this.velocidad}, fuerza:${this.fuerza}`);
    }

    drinkSake() {
        this.salud += 10;
    }

}


class Sensei extends Ninja {

    constructor(nombre) {
        super(nombre);
        super.setSalud = 200;
        super.setVelocidad = 10;
        super.setFuerza = 10;
        this.sabiduria = 10;
    }

    speakWisdom() {
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
        super.drinkSake();
    }

}

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"