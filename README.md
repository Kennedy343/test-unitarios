# Test Unitarios en JS
Este repositorio contiene un ejemplo para realizar un test unitario a un codigo de una funcion de orden superior.

Se uso el lenguaje de JavaScript para realizar las pruebas. 

```javascript
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
```

## Matcher
El matcher utilizado para esta prueba fue .toBe
Ya que .toBe(valor) se usa para comparar datos como
- Números
- Strings
- Booleanos
- Comparaciones simples

***⚠️ No es recomendado su uso para: objetos o arrays*** 

### *Requisitos*
- Node instalado

### Instalacion y ejecucion del codigo
Para poder clonar el repositorio y ejectuar el codigo te dejo las instrucciones:

1. Clonar el repositorio
```shell
git clone https://github.com/Kennedy343/test-unitarios.git
```
2. Entrar a la carpeta
```shell
cd unit-test-js
```
3. Instalar dependencias (crea la carpeta node_modules)
```shell
npm install
```
4. Ejecutar las pruebas
```shell
npx jest
```

### ***Recomendacion***
Abre tu package.json y asegúrate de tener esto:
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```
Para que en vez de usar:
```shell
npm jest
```
Puedas usar:
```shell
npm test
```
