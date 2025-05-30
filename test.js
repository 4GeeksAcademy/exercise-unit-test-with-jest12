// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 12);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(26);
});

test("One euro should be 1.07 dollars", function() {
    
    const { fromEuroToDollar } = require('./app.js');

    
    const dollars = fromEuroToDollar(3.5);

    
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("One dollar should be 146.26 yenes", function() {
   
    const { fromDollarToYen } = require('./app.js');

    
    const yenes = fromDollarToYen(3.5);

     
    const expected = (3.5 / 1.07) * 156.5;

    
    expect(fromDollarToYen(3.5)).toBe(expected); 
})

test("1000 yenes deberían ser 5.56 libras", function() {
    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound(1000);

    const expected = (1000 / 156.5) * 0.87;

    expect(fromYenToPound(1000)).toBe(expected);
});