const Instancia = require("./Instancia");
function Calidad (local,colaEspera){
    if(!(this instanceof Calidad)){
        return new Calidad(local,colaEspera);
    }
    if (colaEspera>=2 && colaEspera<=5 ){
        Instancia.call(this,local,colaEspera,1);
        
    }
    else{
        throw new Error("La capacidad tiene que estar entre 2 y 5 ");
    }
    //: Por cada unidad de tiempo puede procesar 1 paquetes
}
Calidad.prototype=Object.create(Instancia.prototype);

module.exports=Calidad;