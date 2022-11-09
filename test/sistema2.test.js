const Proceso=require("../src/Proceso.js");

test("Crear proceso",()=>{
    expect(()=>{var proceso=new Proceso(4,2);}).toThrow("Cantidad de columnas debe ser >= a filas")
})