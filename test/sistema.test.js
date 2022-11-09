const Proceso=require("../src/Proceso.js");
const Paquete=require("../src/Paquete.js");

var proceso;
beforeEach(()=>{
    proceso=new Proceso(1,4);
})


test("Crear proceso",()=>{
    expect(proceso.cantInstancias).toBe(4);
})

test("Obtener nombre del Local",()=>{
    expect(proceso.local.nombre).toBe("Local");
})

test("Obtener nombre del Destino",()=>{
    expect(proceso.destino.nombre).toBe("Destino");
})

test("Local genere paquete",()=>{
    var paquete=proceso.nuevoPaquete();
    expect(paquete.destino.nombre).toBe("Destino");
    expect(paquete.tiempo).toBe(0);
})

test("Proceso ubique paquete",()=>{
    var paquete=proceso.nuevoPaquete();

    var paquete2=new Paquete(proceso.destino); // este paquete no se encuentra en el proceso

    expect(proceso.ubicarPaquete(paquete)).toBe(0);
    expect(proceso.ubicarPaquete(paquete2)).toBe(-1);
})

test("Paquete se mueve",()=>{
    var paquete=proceso.nuevoPaquete();
    expect(proceso.ubicarPaquete(paquete)).toBe(0);
    expect(paquete.tiempo).toBe(0);

    proceso.moverPaquete(paquete);
    expect(proceso.ubicarPaquete(paquete)).toBe(1);
    expect(paquete.tiempo).toBe(1);
})

test("Paquete llegue a destino",()=>{
    var paquete=proceso.nuevoPaquete();
    expect(proceso.ubicarPaquete(paquete)).toBe(0);
    expect(paquete.tiempo).toBe(0);

    proceso.moverPaquete(paquete);
    proceso.moverPaquete(paquete);
    proceso.moverPaquete(paquete);
    proceso.moverPaquete(paquete);
    expect(proceso.ubicarPaquete(paquete)).toBe(-1);
    expect(paquete.tiempo).toBe(4);
    expect(proceso.destino.recibio(paquete)).toBe(true);
})

test("Validar proceso",()=>{
    expect(()=>{var proceso=new Proceso(4,2);}).toThrow("Cantidad de columnas debe ser >= a filas")
})


