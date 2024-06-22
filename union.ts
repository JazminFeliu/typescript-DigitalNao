let multiType: number | boolean; // aca estoy uniendo tipos
multiType = 40;         //* Valid
multiType = true;       //* Valid
//multiType = "fourty";   //* Invalid

function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log("¡¡¡¡¡¡¡¡¡¡Ejemplo de Union!!! ")
console.log(add('Hello ', 'DigitalNao!'));  //* Returns "onetwo"
console.log(add(4, 34));          //* Returns 3
console.log("¡¡¡¡¡¡¡¡¡¡¡Ejemplo de Error!!!!!!!!!!!!!!!!")
console.log(add('one', 2));      //* Returns error

//otro ejemplo seria la union de tipos en un array
let objUnido = ["lunes", "martes", "sabado", 2, true];
// let objUnido: (string | number | boolean)[] : el mismo ts lo toma como una union
//otra forma seria darle el tipo any: let objUnido: any