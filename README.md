# ToDo Refactor Starter

Proyecto inicial para **ToDo Refactor Lab**: refactorización, pruebas unitarias y Pair Programming.

## Inicio

```bash
npm install
npm test
```

Durante el desarrollo:

```bash
npm run test:watch
```

La primera prueba está preparada para fallar: es el punto de partida de la **Misión 2** y del ciclo **RED → GREEN → REFACTOR**.

## Estructura

- `src/legacy.js`: código funcional simple para analizar antes de cambiar.
- `src/taskService.js`: lógica de dominio que completarás misión por misión.
- `src/app.js`: interfaz inicial; en la Misión 9 deberá delegar la lógica a `taskService.js`.
- `tests/taskService.test.js`: suite incremental de pruebas unitarias con Vitest.


## Misión 0 · Antes de modificar código

### 1. ¿Dónde almacenarías ahora el estado completada de una tarea?

El estado completada se almacenaría como una propiedad booleana dentro de un objeto que represente cada tarea. Esto permitiría identificar si está pendiente o terminada sin depender únicamente del título.

### 2. ¿Qué ocurriría si mañana cada tarea necesita prioridad, fecha o responsable?

El modelo actual basado en strings sería insuficiente. Por eso, consideramos conveniente utilizar objetos que permitan incorporar nuevas propiedades sin modificar completamente la estructura de los datos.

### 3. ¿Qué parte del código representa datos y qué parte representa interfaz?

El array tareas representa los datos de la aplicación. Las instrucciones que utilizan document.querySelector(), innerHTML y los elementos HTML corresponden a la interfaz. Actualmente, ambas responsabilidades están mezcladas en el código.

### 4. ¿Qué comportamiento debemos conservar durante el refactor?

Debemos conservar la visualización de las tareas iniciales, la posibilidad de agregar tareas válidas, la validación de títulos vacíos, la eliminación de tareas y la actualización del contador.

### Tres comportamientos observables que NO deben cambiar

1. Al iniciar la aplicación deben mostrarse las tres tareas existentes.
2. Al agregar una tarea válida debe aparecer en la lista y actualizarse el contador.
3. Al eliminar una tarea debe desaparecer de la lista y actualizarse el total.


### Tres comportamientos observables que NO deben cambiar

1. 
2. 
3. 

## Registro RED → GREEN → REFACTOR

Documenta al menos una iteración:

- **RED:** ¿qué prueba escribiste y por qué falló?
- **GREEN:** ¿cuál fue el cambio mínimo que la hizo pasar?
- **REFACTOR:** ¿qué mejoraste sin cambiar el comportamiento?

## Pair Programming

Registra por misión quién fue **Driver** y quién **Navigator**. Intercambien roles con frecuencia y no hagan commit hasta que ambos puedan explicar el código y la prueba.
