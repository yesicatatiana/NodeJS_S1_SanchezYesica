const Animal= require("./Animal");
class perro extends Animal{
    hablar(){
        console.log(`soy un perro llamado ${this.nombre}que habla`)
    }
}
Module.exports = perro;