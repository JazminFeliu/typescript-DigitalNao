console.log('Tipo Any:')
let randomValue: any = 10;

console.log('aquí randomValue = 10 guarda un: ', randomValue);

randomValue = 'Mateo'

console.log('aquí randomValue = "Mateo"  guarda un: ', randomValue);

randomValue = true

console.log('aquí randomValue = true guarda un: ', randomValue);

// Logs "undefined" to the console
console.log('aquí randomValue.name guarda un: ', randomValue.name);
console.log('toda la comodidad de any se produce a costa de perder seguridad de tipos')
console.log('Tipo Unknown:')

let randomValueU: unknown = 23;

console.log('aquí randomValueU guarda un: ', randomValueU);

randomValueU = 'Marcela'

console.log('aquí randomValueU guarda un: ', randomValueU);

randomValueU = false

console.log('aquí randomValueU guarda un: ', randomValueU);

// Logs "undefined" to the console
console.log('aquí randomValue.name guarda un: ', randomValue.name);
console.log('En este ejemplo se cambia el tipo any del ejemplo anterior a unknown.')
console.log('Ahora generará errores de comprobación de tipos y evitará que compile el código hasta que tome las medidas adecuadas para resolverlos.')

let Value: unknown = 10;

Value = true;
Value = 'Mateo';

if (typeof Value === "string") {
    console.log((Value as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}