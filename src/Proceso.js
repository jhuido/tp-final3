const Local = require("./Local");
const Destino = require("./Destino");
const Instancia = require("./Instancia");
const { array } = require("yargs");

function Proceso(filas,instancias){

    validarParametros(filas,instancias);

    this.filas=filas;
    this.cantInstancias=instancias.length;
    this.locales=asignarLocales(filas);
    this.destinos=asignarDestinos(filas);
    this.instancias=crearInstancias(instancias);
    this.mapa=[];   

    this.nuevoPaquete=function(local,destinos){
        var paquetes=local.generarPaquete(destinos);
        var loc=this.locales.findIndex(element=>element==local.nombre);
        this.mapa[loc]=new Array();
        this.mapa[loc].push(paquetes);
        return paquetes;
    }

    this.ubicarPaquete=function(paquete){
        var ubicacion;
        for(i=0;i<filas;i++){
            if(ubicacion==-1){
                ubicacion=this.mapa[i].findIndex(element=>element===paquete);
            }
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

    function validarParametros(filas,instancias){
        var rdo=instancias.filter(element=>element=='Cola de salida');
        if(rdo.length>1){
            throw new Error("Solo haya una cola de salida");
        }

        if(filas>instancias.length){
            throw new Error("Cantidad de columnas debe ser >= a filas");
        }

        var rdo=0;
        var obligatorios=['Facturacion','Calidad','Distribucion'];
        for(i=0;i<=obligatorios.length;i++){
            if(instancias.includes(obligatorios[i])){
                rdo++;
            }
        }
        if(rdo<3){
            throw new Error("Debe haber por lo menos una Factuacion, Distribucion y Calidad");
        }        


    }

    


}


module.exports=Proceso;