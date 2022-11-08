function Destino(nombre){
    this.nombre=nombre;
    this.paquetes=[];

    this.recibePaquete=function(paquete){
        this.paquetes.push(paquete);
    }
}

module.exports=Destino;