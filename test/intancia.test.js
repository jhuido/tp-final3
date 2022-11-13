const Local = require("../src/Local");
const Proceso = require("../src/Proceso");
const Facturacion = require("../src/Facturacion");
const Calidad = require("../src/Calidad");
const Distribucion = require("../src/Distribucion");


test("Crear intancias",()=>{
    const cantInstancias=4;
    const proceso=new Proceso(["Facturacion",'Calidad','Distribucion'])
    proceso.agregarLocal(4,4,11);

    /*
    1) Proceso se crea sin locales, solo con las instancias
    2) Agregar local:
            procesa crea nuevo local
            crea las instancias

    */
})

test("instancias",()=>{
    const facturacion= new Facturacion("A",2);
    const calidad= new Calidad("A",3);
    const distribucion=new Distribucion("A",10);
    expect(facturacion.colaEspera).toBe(2);
    expect(calidad.colaEspera).toBe(3);
    expect(distribucion.colaEspera).toBe(10);
    

    
    
})


