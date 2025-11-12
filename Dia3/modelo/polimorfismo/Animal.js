//clase base o superclases

class Animal{
    constructor(nombre) {
        this.nombre=nombre;
    }


    //metodos -> funcionalidades
    hablar(){
        console.log(`soy un animal ${this.nombre}que habla`);
    }

}


modules.exports = Animal;

//metodos -> funcionalidades

