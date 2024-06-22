const http = require('http');
let notes = [
    {
      id: 1,
      content: "let z: number = 123.456; declara explícitamente a  'z' como un tipo número y le asigna un valor",
      important: true
    },
    {
      id: 2,
      content: "let firstName: string = 'Mateo'; let sentence: string = `My name is ${firstName}.I am new to TypeScript.`; declara dos variables string que interactuan ",
      important: false
    },
    {
      id: 3,
      content: "type Operation = 'multiply' | 'add' | 'divide'; nos permite definir nuestros propios tipos",
      important: true
    }
  ]

const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json'})
    res.end(JSON.stringify(notes))
    
});


const PORT = 3000
app.listen(PORT)
console.log(`Server is running on port ${PORT}"`)