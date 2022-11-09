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
        if(ubicacion>this.cantInstancias){
            return -1;
        }
        return ubicacion;
    }

    this.moverPaquete=function(paquete){
        //var ubic=this.instancias.indexOf(paquete);
        var ubic=this.ubicarPaquete(paquete)
        paquete.aumentarTiempo();
        if(ubic<this.cantInstancias-1){
            this.instancias[ubic+1]=paquete;
        }else{
            this.destino.recibePaquete(paquete);
        }
        this.instancias[ubic]=null;
    }

}

module.exports=Proceso;