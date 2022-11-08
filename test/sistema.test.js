const Proceso=require("../src/Proceso");

test("Crear proceso",()=>{
    var proceso=new Proceso(["Cola de salida","Centro de Facturacion","Centro de calidad","Centro de Distribucion"]);
    expect(proceso.instancias[0].nombre).toBe("Cola de salida");
})