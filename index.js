const operationNumbers = (op, a, b) =>{
    return op(a,b);
}

const add = (a,b) =>{
    return a+b;
}

operationNumbers(add,15, 5);

module.exports = {
    operationNumbers, add,
}
