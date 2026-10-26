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


## Misión 3 - Agregar tareas sin acoplarse al DOM

**Responsable de implementación:** Christian Raul Paramo Bautista

### Objetivo
Implementar la función agregarTarea(tareas, nuevaTarea)
para agregar elementos a una colección sin modificar
el array original y sin depender del DOM.

### Ciclo RED - GREEN - REFACTOR

**RED:**
Se desarrollaron dos pruebas unitarias antes de
implementar la función. Ambas fallaron porque
agregarTarea() todavía no estaba implementada.

**GREEN:**
Se implementó agregarTarea() utilizando el operador
spread (...) para devolver un nuevo array con las
tareas existentes y la nueva tarea.

Después de ejecutar npm test, las tres pruebas
unitarias pasaron correctamente.

**REFACTOR:**
Se revisó la implementación y se determinó que
no era necesario realizar cambios adicionales,
ya que la función es breve, legible y evita
modificar la colección original.

### Pruebas realizadas

1. Verificar que una nueva tarea se agregue
   correctamente a la colección.
2. Comprobar que la cantidad de tareas aumente
   sin modificar el array original.

### Resultado
Se obtuvo un total de 3 pruebas exitosas y
ninguna prueba fallida.


## Misión 4 - Buscar tareas utilizando find()

**Responsable de implementación:** Christian Raul Paramo Bautista

### Objetivo
Implementar la función buscarTarea(tareas, id) para localizar una tarea mediante su identificador, utilizando el método find() de JavaScript.

### Ciclo RED - GREEN - REFACTOR

**RED:**
Se desarrollaron dos pruebas unitarias antes de implementar la función. Ambas fallaron porque buscarTarea() todavía no estaba implementada.

**GREEN:**
Se implementó buscarTarea() utilizando el método find(), el cual permite localizar una tarea mediante su identificador.

Al ejecutar npm test, las cinco pruebas unitarias pasaron correctamente.

**REFACTOR:**
Se revisó la implementación y se determinó que no necesitaba modificaciones adicionales, ya que utiliza una operación apropiada, es legible y no modifica la colección original.

### Pruebas realizadas

1. Buscar una tarea mediante un identificador existente y comprobar que devuelve el objeto correspondiente.
2. Buscar una tarea mediante un identificador inexistente y comprobar que devuelve undefined.

### Decisiones de diseño

Se utilizó find() porque necesitamos encontrar un solo elemento dentro de la colección. Este método expresa mejor la intención de búsqueda que recorrer manualmente el array.

La función recibe los datos y devuelve un resultado sin interactuar directamente con el DOM.

### Resultado

Se ejecutaron cinco pruebas unitarias, todas exitosas y sin errores.


## Misión 5 - Filtrar tareas utilizando filter()

**Responsable de implementación:** Christian Raul Paramo Bautista

### Objetivo
Implementar las funciones obtenerPendientes() y obtenerTerminadas() utilizando el método filter() de JavaScript para seleccionar tareas según su estado.

### Ciclo RED - GREEN - REFACTOR

**RED:**
Se desarrollaron cuatro pruebas unitarias antes de implementar las funciones. Las pruebas fallaron porque obtenerPendientes() y obtenerTerminadas() todavía no estaban implementadas.

**GREEN:**
Se implementaron ambas funciones utilizando filter().

- obtenerPendientes() devuelve las tareas cuyo estado completada es false.
- obtenerTerminadas() devuelve las tareas cuyo estado completada es true.

Después de ejecutar npm test, las nueve pruebas unitarias pasaron correctamente.

**REFACTOR:**
Se revisó la implementación y se determinó que no requería modificaciones adicionales, debido a que ambas funciones tienen una única responsabilidad, son legibles y no modifican el array original.

### Pruebas realizadas

1. Obtener las tareas pendientes de una colección mixta.
2. Devolver un array vacío cuando todas las tareas están terminadas.
3. Obtener las tareas terminadas de una colección mixta.
4. Devolver arrays vacíos cuando no existen tareas.

### Decisiones de diseño

Se utilizó filter() porque necesitamos seleccionar un subconjunto de tareas que cumpla una condición.

El método devuelve una nueva colección sin alterar el array original, permitiendo mantener separada la lógica de dominio de la interfaz.

### Resultado

Se ejecutaron nueve pruebas unitarias, todas exitosas y sin errores.


## Misión 6 - Cambiar estado de tareas utilizando map()

**Responsable de implementación:** Christian Raul Paramo Bautista

### Objetivo
Implementar la función cambiarEstado(tareas, id) para modificar el estado de una tarea sin alterar el array ni el objeto original.

### Ciclo RED - GREEN - REFACTOR

**RED:**
Se desarrollaron tres pruebas unitarias antes de implementar la función. Las tres fallaron porque cambiarEstado() todavía no estaba implementada.

**GREEN:**
Se implementó cambiarEstado() utilizando map() y el operador spread (...).

La función identifica la tarea mediante su id y cambia la propiedad completada de false a true o viceversa.

Después de ejecutar npm test, las doce pruebas unitarias pasaron correctamente.

**REFACTOR:**
Se revisó la implementación y se determinó que no requería cambios adicionales, ya que utiliza map() correctamente, mantiene una única responsabilidad y evita modificar los datos originales.

### Pruebas realizadas

1. Cambiar una tarea pendiente a terminada sin modificar el objeto original.
2. Cambiar una tarea terminada a pendiente sin alterar las demás tareas.
3. Conservar el contenido de la colección cuando el identificador no existe.

### Decisiones de diseño

Se utilizó map() porque necesitamos transformar una colección de tareas y devolver un nuevo array.

El operador spread permite copiar la tarea seleccionada y modificar únicamente su propiedad completada.

Esta implementación evita efectos secundarios y facilita las pruebas unitarias.

### Resultado

Se ejecutaron doce pruebas unitarias, todas exitosas y sin errores.


## Misión 7 - Eliminar tareas y probar casos frontera

**Driver:** Pablo Alexander Alejos Macias  
**Navigator:** Christian Raul Paramo Bautista

### Objetivo
Implementar la función eliminarTarea(tareas, id) para quitar una tarea por su identificador sin modificar la colección original, probando escenarios más allá del caso feliz.

### Elección del método
Antes de programar se compararon map(), filter() y find():

- map() siempre devuelve un array del mismo tamaño, por lo que no sirve para quitar elementos.
- find() devuelve un solo elemento, no una colección.
- filter() expresa la intención "conservar todas las tareas excepto la del id indicado".

Por eso se eligió filter().

### Ciclo RED - GREEN - REFACTOR

**RED:**
Se escribieron tres pruebas unitarias antes de implementar la función. Las tres fallaron porque eliminarTarea() todavía lanzaba el error "Misión 7 pendiente". Resultado: 3 pruebas fallidas y 12 exitosas.

**GREEN:**
Se implementó eliminarTarea() con filter(), devolviendo las tareas cuyo id es distinto del indicado.

Al ejecutar npm test, las quince pruebas unitarias pasaron correctamente.

**REFACTOR:**
La función quedó en una sola línea, no modifica el array recibido y no depende del DOM, por lo que no requirió cambios adicionales.

### Pruebas realizadas

1. Eliminar una tarea con un id existente sin modificar el array original.
2. Conservar todas las tareas cuando el id no existe.
3. Devolver un array vacío cuando la colección está vacía.

### Resultado

Se ejecutaron quince pruebas unitarias, todas exitosas y sin errores.


## Misión 8 - Resumen y composición

**Driver:** Pablo Alexander Alejos Macias  
**Navigator:** Christian Raul Paramo Bautista

### Objetivo
Implementar la función obtenerResumen(tareas), que devuelve un objeto { total, pendientes, terminadas }, combinando reglas que ya estaban probadas.

### Ciclo RED - GREEN - REFACTOR

**RED:**
Se escribieron tres pruebas unitarias antes de implementar la función. Las tres fallaron porque obtenerResumen() todavía lanzaba el error "Misión 8 pendiente". Resultado: 3 pruebas fallidas y 15 exitosas.

**GREEN:**
Se implementó obtenerResumen() reutilizando obtenerPendientes() y obtenerTerminadas() de la Misión 5, y tareas.length para el total.

Al ejecutar npm test, las dieciocho pruebas unitarias pasaron correctamente.

**REFACTOR:**
Se comparó la solución con una alternativa que calcula directamente los contadores. Se conservó la versión que reutiliza funciones (ver la comparación abajo).

### Pruebas realizadas

1. Obtener { total: 5, pendientes: 3, terminadas: 2 } de una colección mixta.
2. Devolver todos los contadores en cero cuando la colección está vacía.
3. Calcular el resumen sin modificar la colección original.

### Comparación: reutilizar funciones vs. calcular directamente

| Criterio | Reutilizar funciones | Cálculo directo |
| --- | --- | --- |
| ¿Cuál comunica mejor la intención? | Se lee como la definición: pendientes y terminadas | Hay que deducir que pendientes = total - terminadas |
| ¿Cuál hace más trabajo? | Recorre la colección dos veces | Recorre la colección una vez |
| ¿Cuál es más fácil de mantener? | La regla de "completada" vive en un solo lugar | Vuelve a escribir la condición t.completada, que ya existe en obtenerTerminadas() |

Se eligió reutilizar las funciones: recorrer dos veces una lista de tareas no representa un costo relevante, y la regla de qué es una tarea pendiente o terminada queda definida en un solo lugar y protegida por sus propias pruebas.

### Resultado

Se ejecutaron dieciocho pruebas unitarias, todas exitosas y sin errores.


## Misión 9 - Integrar con la interfaz

**Driver:** Pablo Alexander Alejos Macias  
**Navigator:** Christian Raul Paramo Bautista

### Objetivo
Conectar taskService.js con app.js sin volver a mezclar responsabilidades. El DOM actúa como adaptador:

```
evento del usuario → app.js → taskService.js → nuevo estado → render() → DOM
```

### Cambios realizados

- app.js importa las funciones de taskService.js y construye el estado inicial con crearTarea().
- Agregar usa agregarTarea() en lugar de tareas.push().
- Eliminar usa eliminarTarea() con el id de la tarea en lugar de splice() con el índice.
- Se agregó el botón Completar/Reabrir, que usa cambiarEstado(). Las tareas terminadas se tachan con la clase .done que ya existía en styles.css.
- Los filtros Todas, Pendientes y Terminadas funcionan con obtenerPendientes() y obtenerTerminadas().
- El resumen muestra total, pendientes y terminadas con obtenerResumen().
- Los elementos se crean con createElement y textContent en lugar de innerHTML, para que el texto escrito por el usuario no se interprete como HTML.

app.js ya no contiene reglas de negocio: sólo lee eventos, llama al servicio y renderiza.

### Cómo ejecutar la aplicación

Los módulos de JavaScript no cargan abriendo index.html directamente, por lo que se usa el servidor de Vite (incluido con Vitest):

```bash
npx vite
```

y se abre la dirección que indica (por ejemplo http://localhost:5173).

## Pruebas de integración manual

| Escenario | Acción | Resultado esperado | Resultado observado |
| --- | --- | --- | --- |
| Alta válida | Escribir "Documentar README" y Agregar | Aparece una nueva tarea pendiente y cambia el resumen | Correcto: Total 4 · Pendientes 4 |
| Alta inválida | Enviar título vacío | No se agrega; se muestra mensaje claro | Correcto: "Escribe un título antes de agregar." y el total sigue en 4 |
| Cambio de estado | Completar "Diseñar pruebas" | Cambia estilo/estado y contadores | Correcto: se tacha, el botón cambia a Reabrir; Pendientes 3 · Terminadas 1 |
| Filtro | Elegir Pendientes y luego Terminadas | Sólo se muestran las tareas del filtro | Correcto: 3 pendientes; 1 terminada |
| Eliminar | Eliminar "Refactorizar código" | Desaparece y se actualiza el resumen | Correcto: Total 3 · Pendientes 2 · Terminadas 1 |

### Registro de fallos

| Entrada | Resultado observado | Resultado esperado | Corrección |
| --- | --- | --- | --- |
| Enviar título vacío y después completar una tarea | El mensaje "Escribe un título antes de agregar." seguía visible | El mensaje desaparece al realizar otra acción | Limpiar el mensaje en el evento de la lista antes de renderizar |


## Misión 10 - Refactor final protegido por pruebas

**Driver:** Pablo Alexander Alejos Macias  
**Navigator:** Christian Raul Paramo Bautista

Con las 18 pruebas en verde se revisaron taskService.js, app.js y la suite. Sólo se cambió lo que se podía justificar; el comportamiento no cambió.

| Archivo | Cambio | Problema que resuelve |
| --- | --- | --- |
| taskService.js | Función interna estaTerminada(tarea), usada por obtenerPendientes() y obtenerTerminadas() | Código duplicado: la regla "completada" estaba en dos lugares |
| taskService.js | Comentario inicial actualizado | Comentario desactualizado ("Completa estas funciones…") |
| taskService.test.js | Se eliminaron las líneas void agregarTarea; … del starter | Código muerto: todos los imports ya se usan |
| taskService.test.js | Comentarios-instrucción reemplazados por etiquetas (// MISIÓN 3 · agregarTarea) | Comentarios que daban instrucciones en vez de documentar |
| app.js | Cadena de if de filtros reemplazada por el objeto FILTROS | Condiciones difíciles de leer; facilita agregar filtros |
| app.js | render() separado en renderLista() y renderResumen() | Función con más de una responsabilidad |

### Verificación

- npm test: 18 pruebas exitosas después del refactor, sin modificar ninguna aserción.
- Se repitieron las pruebas manuales en el navegador (alta, completar, filtros y eliminar) con el mismo resultado que en la Misión 9.


## Misión 11 - Nuevo requerimiento: buscar por texto (extensión B)

**Driver:** Pablo Alexander Alejos Macias  
**Navigator:** Christian Raul Paramo Bautista

### Extensión elegida
**B. Buscar por texto.** Pregunta de prueba de la guía: ¿la búsqueda debe ignorar mayúsculas/minúsculas?

Decisiones tomadas antes de programar:

- Ignora mayúsculas y minúsculas.
- Ignora acentos ("codigo" encuentra "código").
- Un texto vacío o con sólo espacios no filtra: devuelve todas las tareas.

### Ciclo RED - GREEN - REFACTOR

**RED:**
Se escribieron cuatro pruebas para buscarPorTexto(tareas, texto). Fallaron porque la función sólo lanzaba el error "Misión 11 pendiente". Resultado: 4 pruebas fallidas y 18 exitosas.

**GREEN:**
Se implementó una función interna normalizar() (quita acentos, pasa a minúsculas y recorta espacios) y buscarPorTexto() filtra las tareas cuyo título normalizado contiene el texto normalizado. Resultado: 22 pruebas exitosas.

**REFACTOR:**
El texto vacío no necesitó una condición aparte: al normalizarlo queda "", y todo título contiene la cadena vacía.

### Pruebas realizadas

1. "PRUEBAS" encuentra "Diseñar pruebas".
2. "codigo" encuentra "Refactorizar código".
3. "despliegue" devuelve un array vacío.
4. "" y "   " devuelven todas las tareas.

### Integración

- index.html: caja de búsqueda junto a los filtros.
- app.js: tareasVisibles() aplica la búsqueda sobre el filtro activo: `buscarPorTexto(FILTROS[filtro](tareas), busqueda)`.

### ¿El refactor facilitó el cambio?
Sí. Se agregó una función de dominio con sus pruebas, un campo en index.html, un listener y una línea en tareasVisibles(). Ninguna de las 18 pruebas existentes tuvo que modificarse.

## Reflexión de pareja

El cambio que más aumentó la mantenibilidad fue separar las reglas de negocio en taskService.js y dejar app.js sólo como adaptador del DOM. En el código inicial las tareas eran strings y el mismo bloque recorría los datos, decidía qué hacer y escribía HTML, así que cualquier cambio obligaba a tocar todo a la vez. Al convertir cada tarea en un objeto con id, título y estado, y al expresar cada operación como una función que recibe datos y devuelve datos nuevos, cada regla quedó en un solo lugar y pudo probarse sin abrir el navegador. La misión 11 lo confirmó: agregar la búsqueda por texto sólo requirió una función nueva con sus pruebas y una línea en tareasVisibles(), gracias al objeto FILTROS del refactor final.

La prueba que nos dio más confianza fue la de cambiarEstado que verifica que la tarea modificada es un objeto nuevo y que el original conserva su estado. Ese error, mutar el objeto compartido, no se nota a simple vista en la interfaz y podría romper los filtros o el resumen sin avisar. También fueron valiosas las pruebas de casos frontera, como eliminar en una colección vacía o buscar con un texto vacío, porque nos obligaron a decidir el comportamiento antes de programarlo.

Trabajar con el ciclo RED, GREEN y REFACTOR y alternar los roles de Driver y Navigator nos ayudó a explicar cada función antes de hacer commit.
