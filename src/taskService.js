/*
 * TODO REFACTOR LAB · LÓGICA DE DOMINIO
 *
 * Funciones puras sobre la colección de tareas: reciben datos y devuelven
 * datos nuevos, sin modificar la entrada y sin acceder al DOM.
 * Cada función está protegida por pruebas en tests/taskService.test.js.
 */

// Regla de negocio única: qué significa que una tarea esté terminada.
function estaTerminada(tarea) {
  return tarea.completada;
}

// MISIÓN 2
export function crearTarea(id, titulo) {
  return { id, titulo, completada: false };
}

// MISIÓN 3
export function agregarTarea(tareas, nuevaTarea) {
  return [...tareas, nuevaTarea];
}

// MISIÓN 4
export function buscarTarea(tareas, id) {
  return tareas.find(tarea => tarea.id === id);
}

// MISIÓN 5
export function obtenerPendientes(tareas) {
  return tareas.filter(tarea => !estaTerminada(tarea));
}

export function obtenerTerminadas(tareas) {
  return tareas.filter(estaTerminada);
}

// MISIÓN 6
export function cambiarEstado(tareas, id) {
  return tareas.map(tarea =>
    tarea.id === id
      ? { ...tarea, completada: !tarea.completada }
      : tarea
  );
}

// MISIÓN 7
export function eliminarTarea(tareas, id) {
  return tareas.filter(tarea => tarea.id !== id);
}

// MISIÓN 8
export function obtenerResumen(tareas) {
  return {
    total: tareas.length,
    pendientes: obtenerPendientes(tareas).length,
    terminadas: obtenerTerminadas(tareas).length
  };
}

// MISIÓN 11 · Extensión B: buscar por texto
// Quita acentos, pasa a minúsculas y elimina espacios en los extremos.
function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function buscarPorTexto(tareas, texto) {
  const buscado = normalizar(texto);
  return tareas.filter(tarea => normalizar(tarea.titulo).includes(buscado));
}
