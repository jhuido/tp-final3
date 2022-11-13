const Local = require("../src/Local");
const Proceso = require("../src/Proceso");
const Facturacion = require("../src/Facturacion");
const Calidad = require("../src/Calidad");
const Distribucion = require("../src/Distribucion");


test("Crear intancias",()=>{

    /*
    1) Proceso se crea sin locales, solo con las instancias
        --> const proceso
        proceso.instancias=["Facturacion",'Calidad','Distribucion']
    2) Agregar local:(4,4,11)==> (facturacion)
            procesa crea nuevo local
            --> const local=new local('a')
            crea las instancias
                recorriendo el arreglo de instancias
                --> for(i=0,i<this.instancias.length;i++)
                    crea Factuarcion(local,facturacion)
                    crea Calidad(local,calidad)
                    crea Distribucion(local,distribucion)

    */
})

test("instancias",()=>{
    const local= new Local("A")
    const facturacion= new Facturacion(local,2);
    const calidad= new Calidad(local,4);
    const distribucion=new Distribucion(local,9);
    expect(facturacion.colaEspera).toBe(2);
    expect(calidad.colaEspera).toBe(4);
    expect(distribucion.colaEspera).toBe(9);
    

    
    
})


