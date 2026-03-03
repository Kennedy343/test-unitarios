const { operationNumbers, add } = require('./index');

test('Funcion de orden superior que recibe una funcion para subar', ()=>{
    expect(operationNumbers(add,10,10)).toBe(20);
});


//Fallo aproposito del test
test('Suma de 15+5 sera 99 ', ()=>{
    expect(operationNumbers(add,15,5)).toBe(99);
});

//fallo del test
test('Suma de un numero y un string', ()=>{
    expect(operationNumbers(add, 15, "15")).toBe(30);
});


//fallo del test
test('Suma de un numero y un string', ()=>{
    expect(operationNumbers(add, 15, 15)).toBe('30');
});
