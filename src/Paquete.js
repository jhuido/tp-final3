function Paquete(destino){
    this.destino=destino;
    this.tiempo=0;
    this.ubicacion= new Array(2);
    this.ubicacion=[-1,-1];

    this.aumentarTiempo=function(){
        this.tiempo+=1;
    }
    
}

module.exports=Paquete;