// arrays o vectores
let numeros = [1,2,3,4,5,6]
let dias: string[] = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sábado"]
let otro = ["mañana", "tarde", true, 67] //aca me lo define con tipos unidos  let otro: (string | number | boolean)[]
let otro2: any[] = ["coche", "bici", 6, 8] //otra forma de definirlo

//tuplas o tuples es un array con una semantica mas estricta
let db: [string, number, string, boolean] = ["Jaz", 28, "Argentina", true]

console.log(numeros)
console.log(dias)
console.log(otro)
console.log(otro2)
console.log(db)


