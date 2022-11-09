const Local = require("./Local");
const Destino = require("./Destino");
const Instancia = require("./Instancia");

function Proceso(filas,instancias){

    var rdo=instancias.filter(element=>element=='Cola de Salida');
    if(rdo>1){
        throw new Error("Solo haya una cola de salida");
    }


    if(filas>instancias.length){
        throw new Error("Cantidad de columnas debe ser >= a filas");
    }
    this.cantInstancias=instancias.length;
    this.locales=asignarLocales(filas);
    this.destinos=asignarDestinos(filas);
    this.instancias=crearInstancias(instancias);    

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

    function crearInstancias(instancias){
        var columnas=[];
        instancias.forEach(nombre=>columnas.push(new Instancia(nombre)));
        return columnas;
    }


}


module.exports=Proceso;