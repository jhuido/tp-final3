const Proceso=require("../src/Proceso.js");
const Paquete=require("../src/Paquete.js");

var proceso;
beforeEach(()=>{
    proceso=new Proceso(2,['Cola de Salida','Facturacion','Calidad','Distribucion']);
})


test("Crear proceso",()=>{
    expect(proceso.cantInstancias).toBe(4);
})

test("Obtener nombre del Local",()=>{
    expect(proceso.locales[0].nombre).toBe("A");
})

test("Obtener nombre del Destino",()=>{
    expect(proceso.destinos[0].nombre).toBe(1);
})

test("Local genere paquete",()=>{
    var paquetes=proceso.nuevoPaquete(proceso.locales[0],[proceso.destinos[0]]);
    expect(paquetes[0].destino.nombre).toBe(1);
    expect(paquetes[0].tiempo).toBe(0);
})

test("Proceso ubique paquete",()=>{
    var paquete=proceso.nuevoPaquete(proceso.locales[0],[proceso.destinos[0]]);

    var paquete2=new Paquete(proceso.destinos[0]); // este paquete no se encuentra en el proceso

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
    expect(proceso.destinos[0].recibio(paquete)).toBe(true);
})

test("Validar proceso",()=>{
    expect(()=>{var proceso=new Proceso(4,['Cola de salida']);}).toThrow("Cantidad de columnas debe ser >= a filas")
})

test("Local tenga nombre abecedario",()=>{
    expect(proceso.locales[0].nombre).toBe("A");
    expect(proceso.locales[1].nombre).toBe("B");
})

test("Destino tenga numeracion",()=>{
    expect(proceso.destinos[0].nombre).toBe(1);
    expect(proceso.destinos[1].nombre).toBe(2);
})

test("Crear intancias",()=>{
    expect(proceso.instancias[0].nombre).toBe('Cola de Salida');
})

test("Validar que haya una cola de salida",()=>{
    expect(()=>{var proceso=new Proceso(2,['Cola de salida','Cola de salida','Cola de salida']);}).toThrow("Solo haya una cola de salida")
})

test("Validar que haya al menos una distribucion,facturacion y calidad",()=>{
    expect(()=>{var proceso=new Proceso(2,['Cola de salida','Facturacion','Otra instancia']);}).toThrow("Debe haber por lo menos una Factuacion, Distribucion y Calidad")
    expect(()=>{var proceso=new Proceso(2,['Cola de salida','Facturacion','Facturacion','Facturacion']);}).toThrow("Debe haber por lo menos una Factuacion, Distribucion y Calidad")
})

test("Validar que Local genere hasta 5 paquete por unidad de tiempo",()=>{
    expect(proceso.locales[0].generarPaquete([proceso.destinos[0],proceso.destinos[0],proceso.destinos[0],proceso.destinos[1],proceso.destinos[1],proceso.destinos[1]])).toThrow("Cada local puede producir un máximo de 5 paquete por unidad de tiempo")
})




