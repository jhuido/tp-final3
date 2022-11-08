const Local = require("./Local");
const Destino = require("./Destino");

function Proceso(cantInstancias){
    this.cantInstancias=cantInstancias;
    this.local=new Local("Local");
    this.destino=new Destino("Destino");
    this.instancias=[];

    this.nuevoPaquete=function(){
        var paquete=this.local.generarPaquete(this.destino);
        this.instancias[0]=paquete;
        return paquete;
    }

    this.ubicarPaquete=function(paquete){
        var ubicacion=this.instancias.indexOf(paquete);
        return ubicacion;

    }

}

module.exports=Proceso;