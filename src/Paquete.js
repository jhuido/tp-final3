function Paquete(destino){
    this.destino=destino;
    this.tiempo=0;
    

    this.aumentarTiempo=function(){
        this.tiempo+=1;
    }
    
}

module.exports=Paquete;