const Proceso=require("../src/Proceso");

test("Crear proceso",()=>{
    var proceso=new Proceso()
    expect(proceso.nombre).toBe("Cola de salida");
})