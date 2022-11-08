

test("Crear proceso",()=>{
    var proceso=new Proceso(4);
    expect(proceso.cantInstancias).toBe(4);
})