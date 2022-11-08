const Proceso=require("../src/Proceso.js")

test("Crear proceso",()=>{
    var proceso=new Proceso(4);
    expect(proceso.cantInstancias).toBe(4);
})

test("Obtener nombre del Local",()=>{
    var proceso=new Proceso(4);
    expect(proceso.local.nombre).toBe("Local");
})

test("Obtener nombre del Destino",()=>{
    var proceso=new Proceso(4);
    expect(proceso.destino.nombre).toBe("Destino");
})

