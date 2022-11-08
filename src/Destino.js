function Destino(nombre){
    this.nombre=nombre;
    this.paquetes=[];

    this.recibePaquete=function(paquete){
        this.paquetes.push(paquete);
    }

    this.recibio=function(paquete){
        return this.paquetes.includes(paquete);
    }
}

module.exports=Destino;