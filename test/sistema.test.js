const Proceso=require("../src/Proceso");

test("Crear proceso",()=>{
    var proceso=new Proceso("Cola de salida")
    expect(proceso.nombre).toBe("Cola de salida");
})