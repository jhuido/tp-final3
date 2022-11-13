const Instancia = require("./Instancia");
function Distribucion (local,colaEspera){
    
    if(!(this instanceof Distribucion)){
        return new Distribucion(local,colaEspera);
    }
    if(colaEspera>=10 && colaEspera<=30){
        Instancia.call(this,local,colaEspera,10);
    }else{
        throw new Error("En los centros de distribución la cola de espera puede ir entre 10 y 30")
    }
}
Distribucion.prototype=Object.create(Intancia.prototype);


module.exports=Distribucion;
