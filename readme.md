# Reto 7. REST y HTTP para obtener y generar datos

Asegurese de correr el proyecto en node 

## ![image](https://github.com/JazminFeliu/tattler-api/assets/71950944/5dcae5de-9ef5-40e6-af78-1a314dae67fb)

PORT: 3000

Para correr en ts los ejemplos --> npm run file.ts (definidos los scripts ts-node en package.json)

Para correr el proyecto -> npm run start


## Buenas Prácticas para el uso de tipos en TypeScript y como se pueden aplicr en un proyecto real

El uso de TypeScript en un proyecto ofrece una gran cantidad de ventajas al proporcionar un sistema de tipos estático sobre JavaScript. Sin embargo, para maximizar estos beneficios, es crucial seguir buenas prácticas en la definición y el uso de tipos. A continuación se presenta un análisis de estas buenas prácticas y cómo aplicarlas en un proyecto real.

### 1. **Tipado Estricto**

**Buena Práctica:**
Habilitar el modo de tipado estricto (`strict`) en la configuración de TypeScript.

**Aplicación:**
En el archivo `tsconfig.json`, asegúrate de que `strict` está configurado en `true`. Esto activa todas las verificaciones estrictas, como `noImplicitAny`, `strictNullChecks`, y `strictFunctionTypes`.

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

**Ventaja:**
Esto ayuda a detectar errores potenciales de forma temprana y a asegurar que todas las variables y parámetros estén correctamente tipados, evitando errores en tiempo de ejecución.

### 2. **Usar Interfaces y Tipos**

**Buena Práctica:**
Definir interfaces o tipos para describir la forma de los objetos y las estructuras de datos.

**Aplicación:**
Utiliza `interface` para describir objetos que podrían ser extendidos o implementados por clases, y `type` para alias de tipos más complejos o uniones.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type UserResponse = User | null;
```

**Ventaja:**
Esto mejora la legibilidad del código y facilita el mantenimiento al proporcionar descripciones claras y reutilizables de las estructuras de datos.

### 3. **Evitar el Uso de `any`**

**Buena Práctica:**
Evitar el uso del tipo `any` tanto como sea posible. 

**Aplicación:**
Si es necesario usar `any`, intenta refactorizar el código para usar tipos más específicos. En situaciones donde el tipo es incierto, considera usar `unknown`.

```typescript
function handleInput(input: unknown): void {
  if (typeof input === 'string') {
    console.log(input.toUpperCase());
  }
}
```

**Ventaja:**
Minimiza los posibles errores al asegurar que los tipos son verificados de manera estática en tiempo de compilación.

### 4. **Usar Tipos Literales y Uniones**

**Buena Práctica:**
Utilizar tipos literales y uniones para representar valores que pueden tomar un conjunto limitado de opciones.

**Aplicación:**
Define tipos literales para valores constantes y uniones de tipos para variables que pueden ser de varios tipos.

```typescript
type Direction = 'north' | 'south' | 'east' | 'west';

function move(direction: Direction): void {
  console.log(`Moving ${direction}`);
}
```

**Ventaja:**
Esto asegura que solo se pueden usar valores válidos, previniendo errores y mejorando la autocompletación y verificación en los editores de código.

### 5. **Uso de Genéricos**

**Buena Práctica:**
Utilizar genéricos para escribir funciones y clases que trabajen con múltiples tipos sin perder el tipado.

**Aplicación:**
Define genéricos para funciones y clases que necesitan ser reutilizables con diferentes tipos.

```typescript
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42);
const str = identity<string>("hello");
```

**Ventaja:**
Proporciona flexibilidad y reutilización del código mientras se mantiene la seguridad de tipos.

### 6. **Aserciones de Tipo**

**Buena Práctica:**
Utilizar aserciones de tipo con moderación y solo cuando sea absolutamente necesario.

**Aplicación:**
Aplica aserciones de tipo cuando estés seguro del tipo de una variable, pero no puedas convencer al compilador de TypeScript de ello.

```typescript
const inputElement = document.getElementById('input-field') as HTMLInputElement;
```

**Ventaja:**
Aserciones de tipo deben ser usadas con precaución ya que omiten algunas verificaciones de tipos y pueden introducir errores si se usan incorrectamente.

### 7. **Usar Módulos y Namespaces Apropiadamente**

**Buena Práctica:**
Organizar el código en módulos en lugar de namespaces.

**Aplicación:**
Utiliza el sistema de módulos de ES6/TypeScript (`import`/`export`) para organizar y compartir el código.

```typescript
// mathUtils.ts
export function add(a: number, b: number): number {
  return a + b;
}

// main.ts
import { add } from './mathUtils';

console.log(add(2, 3));
```

**Ventaja:**
Los módulos proporcionan un aislamiento más claro y evitan la contaminación del espacio de nombres global, mejorando la mantenibilidad y la claridad del código.

### Aplicación en un Proyecto Real

Al aplicar estas buenas prácticas en un proyecto real, se mejorará significativamente la calidad y la mantenibilidad del código. Un ejemplo de implementación podría ser un proyecto de gestión de usuarios:

1. **Configuración Inicial**: Asegúrate de habilitar `strict` en el archivo `tsconfig.json`.

2. **Definición de Tipos e Interfaces**: Define interfaces para los datos de los usuarios y otros objetos:

   ```typescript
   interface User {
     id: number;
     name: string;
     email: string;
     isActive: boolean;
   }
   ```

3. **Uso de Funciones Genéricas**: Implementa funciones genéricas para manejar operaciones comunes:

   ```typescript
   function getItemById<T>(items: T[], id: number): T | undefined {
     return items.find(item => item.id === id);
   }
   ```

4. **Aserciones y Validaciones**: Usa aserciones de tipo y validaciones adecuadas al manipular elementos del DOM:

   ```typescript
   const userInputElement = document.getElementById('user-input') as HTMLInputElement;
   ```

5. **Evitar `any`**: Refactoriza cualquier uso de `any` para tipos más específicos, usando `unknown` si es necesario:

   ```typescript
   function processInput(input: unknown): void {
     if (typeof input === 'string') {
       console.log(input.trim());
     }
   }
   ```

Siguiendo estas prácticas, tu proyecto TypeScript será más robusto, fácil de mantener y menos propenso a errores, aprovechando al máximo el sistema de tipos estáticos de TypeScript.