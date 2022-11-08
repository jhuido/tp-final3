const Instancia = require("../src/Instancia");

function Proceso(instancias){
    this.instancias=[];
    for(i=0;i<instancias.length;i++){
        var instancia=new Instancia(instancias[i]);
        this.instancias[i]=instancia;
    }
}

module.exports=Proceso;