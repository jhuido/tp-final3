const Local = require("./Local");

function Proceso(cantInstancias){
    this.cantInstancias=cantInstancias;
    this.local=new Local("Local");
}

module.exports=Proceso;