const Local = require("./Local");
const Destino = require("./Destino");

function Proceso(filas,columnas){
    if(filas>columnas){
        throw new Error("Cantidad de columnas debe ser >= a filas");
    }
    this.cantInstancias=columnas;
    this.locales=asignarLocales(filas);
    this.destinos=asignarDestinos(filas);
    this.instancias=[];    

    this.nuevoPaquete=function(){
        var paquete=this.locales[0].generarPaquete(this.destinos[0]);
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
        /*
        if(ubic<this.cantInstancias){
            this.instancias[ubic+1]=paquete;
        }else{
            this.destino.recibePaquete(paquete);
        }*/
        if(ubic<this.cantInstancias-1){
            this.instancias[ubic+1]=paquete;
        }else{
            this.destinos[0].recibePaquete(paquete);
        }
        this.instancias[ubic]=null;
    }

    function asignarLocales(num){
        var locales=[];
        var letra='A';
        for(i=0;i<num;i++){
            locales.push(new Local(letra));
            letra=String.fromCharCode(letra.charCodeAt()+1);
        }
        return locales;
    }

    function asignarDestinos(num){
        var destinos=[];
        for(i=1;i<=num;i++){
            destinos.push(new Destino(i));
        }
        return destinos;
    }

}


module.exports=Proceso;