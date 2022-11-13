const Instancia = require("./Instancia");
function Facturacion (local,colaEspera){
    
    if(!(this instanceof Facturacion)){
        return new Facturacion(local,colaEspera);
    }
    if(colaEspera>=3 && colaEspera<=6){
        Instancia.call(this,local,colaEspera,3);
    }else{
        throw new Error("En los centros de facturación la cola de espera puede ir entre 10 y 30")
    }
}

Facturacion.prototype=Object.create(Intancia.prototype);
Facturacion.prototype.constructor = Facturacion;
module.exports=Facturacion;