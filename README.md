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

## Registro RED → GREEN → REFACTOR

**RED:**
Se ejecutó la prueba inicial de crearTarea(), la cual falló debido a que la función todavía no estaba implementada y lanzaba un error.

**GREEN:**
Se implementó la función para devolver un objeto con las propiedades id, titulo y completada. Al ejecutar npm test, la prueba pasó correctamente.

**REFACTOR:**
Se simplificó la construcción del objeto utilizando la sintaxis abreviada de propiedades de JavaScript, eliminando repeticiones innecesarias sin cambiar el resultado.

## Pair Programming


## Misión 1 - Cambiar el modelo de string a objeto

**Driver:** Christian Raul Paramo Bautista  
**Navigator:** Pablo Alejos Macias

### Cambios realizados

Se modificó la estructura inicial de las tareas, pasando de un array de strings a un array de objetos.

Cada tarea cuenta ahora con tres propiedades:
- id: identificador único.
- titulo: descripción de la tarea.
- completada: estado de la tarea.

También se adaptó la función render() para mostrar los títulos desde los objetos y se actualizó el formulario para crear tareas con identificadores únicos.

### Decisiones de diseño

Las propiedades id, titulo y completada pertenecen a los datos de cada tarea.

Los botones, clases CSS y elementos HTML pertenecen a la interfaz, ya que solamente permiten visualizar e interactuar con la información.

### Comprobación

Se verificó manualmente que las tareas continúan mostrándose y que las operaciones de agregar y eliminar siguen funcionando.


## Misión 2 - Primera función de dominio y prueba unitaria

**Responsable de implementación:** Christian Raul Paramo Bautista

### Objetivo
Implementar la función crearTarea(id, titulo) y comprobar su funcionamiento mediante una prueba unitaria con Vitest.

### Ciclo RED - GREEN - REFACTOR

**RED:**
Se ejecutó la prueba inicial de crearTarea(), la cual falló debido a que la función todavía no estaba implementada y lanzaba un error.

**GREEN:**
Se implementó la función para devolver un objeto con las propiedades id, titulo y completada. Al ejecutar npm test, la prueba pasó correctamente.

**REFACTOR:**
Se simplificó la construcción del objeto utilizando la sintaxis abreviada de propiedades de JavaScript, eliminando repeticiones innecesarias sin cambiar el resultado.

### Resultado
La prueba unitaria verifica que, al recibir un identificador y un título, la función devuelve una tarea con estado completada: false.

La prueba continuó pasando después de la refactorización.
