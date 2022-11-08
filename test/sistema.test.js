const Proceso=require("../src/Proceso.js");
const Paquete=require("../src/Paquete.js")

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

test("Local genere paquete",()=>{
    var proceso=new Proceso(4);
    var paquete=proceso.nuevoPaquete();
    expect(paquete.destino.nombre).toBe("Destino");
    expect(paquete.tiempo).toBe(0);
})

test("Proceso ubique paquete",()=>{
    var proceso=new Proceso(4);
    var paquete=proceso.nuevoPaquete();

    var paquete2=new Paquete(proceso.destino); // este paquete no se encuentra en el proceso

    expect(proceso.ubicarPaquete(paquete)).toBe(0);
    expect(proceso.ubicarPaquete(paquete2)).toBe(null);
})

test("Paquete se mueve",()=>{
    var proceso=new Proceso(4);
    var paquete=proceso.nuevoPaquete();
    expect(proceso.ubicarPaquete(paquete)).toBe(0);
    expect(paquete.tiempo).toBe(0);

    proceso.moverPaquete(paquete);
    expect(proceso.ubicarPaquete(paquete)).toBe(1);
    expect(paquete.tiempo).toBe(1);
})


