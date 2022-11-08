const Paquete=require("./Paquete");

function Local(nombre){
    this.nombre=nombre;

    this.generarPaquete=function(destino){
        var paquete=new Paquete(destino);
        return paquete;
    }
}

module.exports=Local;