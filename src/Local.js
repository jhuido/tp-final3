const Paquete=require("./Paquete");

function Local(nombre){
    this.nombre=nombre;

    this.generarPaquete=function(destinos){
        if(destinos.length>5){
            throw new Error("Cada local puede producir un máximo de 5 paquete por unidad de tiempo")
        }
        var paquetes=[]
        destinos.forEach(destino => {
            paquetes.push(new Paquete(destino));
        });
        return paquetes;
    }
}

module.exports=Local;