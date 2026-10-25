import { describe, it, expect } from "vitest";
import {
  crearTarea,
  agregarTarea,
  buscarTarea,
  obtenerPendientes,
  obtenerTerminadas,
  cambiarEstado,
  eliminarTarea,
  obtenerResumen
} from "../src/taskService.js";

/*
 * TODO REFACTOR LAB · SUITE STARTER
 *
 * Activa/crea pruebas misión por misión. No escribas todas las soluciones de
 * una vez. Para cada comportamiento sigue RED → GREEN → REFACTOR.
 */

describe("crearTarea", () => {
  it("crea una tarea pendiente con id y título", () => {
    // Arrange
    const id = 10;
    const titulo = "Diseñar pruebas";

    // Act
    const tarea = crearTarea(id, titulo);

    // Assert
    expect(tarea).toEqual({ id: 10, titulo: "Diseñar pruebas", completada: false });
  });
});

// MISIÓN 3: agrega al menos dos pruebas para agregarTarea().

describe("agregarTarea", () => {

  it("agrega una nueva tarea a la colección", () => {
    // Arrange
    const tareas = [
      { id: 1, titulo: "Revisar requisitos", completada: false }
    ];

    const nuevaTarea = {
      id: 2,
      titulo: "Diseñar pruebas",
      completada: false
    };

    // Act
    const resultado = agregarTarea(tareas, nuevaTarea);

    // Assert
    expect(resultado).toEqual([
      { id: 1, titulo: "Revisar requisitos", completada: false },
      { id: 2, titulo: "Diseñar pruebas", completada: false }
    ]);
  });

  it("aumenta la cantidad de tareas sin modificar el array original", () => {
    // Arrange
    const tareas = [
      { id: 1, titulo: "Revisar requisitos", completada: false }
    ];

    const nuevaTarea = {
      id: 2,
      titulo: "Diseñar pruebas",
      completada: false
    };

    // Act
    const resultado = agregarTarea(tareas, nuevaTarea);

    // Assert
    expect(resultado).toHaveLength(2);
    expect(tareas).toHaveLength(1);
    expect(resultado).not.toBe(tareas);
  });

});

// MISIÓN 4: prueba id existente e inexistente para buscarTarea().

describe("buscarTarea", () => {

  it("encuentra una tarea con un id existente", () => {
    // Arrange
    const tareas = [
      { id: 1, titulo: "Revisar requisitos", completada: false },
      { id: 2, titulo: "Diseñar pruebas", completada: false },
      { id: 3, titulo: "Refactorizar código", completada: true }
    ];

    const idBuscado = 2;

    // Act
    const resultado = buscarTarea(tareas, idBuscado);

    // Assert
    expect(resultado).toEqual({
      id: 2,
      titulo: "Diseñar pruebas",
      completada: false
    });
  });

  it("devuelve undefined cuando el id no existe", () => {
    // Arrange
    const tareas = [
      { id: 1, titulo: "Revisar requisitos", completada: false },
      { id: 2, titulo: "Diseñar pruebas", completada: false }
    ];

    const idBuscado = 10;

    // Act
    const resultado = buscarTarea(tareas, idBuscado);

    // Assert
    expect(resultado).toBeUndefined();
  });

});

// MISIÓN 5: prueba colección mixta, sin coincidencias y vacía.

describe("obtenerPendientes", () => {

  it("devuelve solo las tareas pendientes de una colección mixta", () => {
    // Arrange
    const tareas = [
      { id: 1, titulo: "Revisar requisitos", completada: false },
      { id: 2, titulo: "Diseñar pruebas", completada: true },
      { id: 3, titulo: "Refactorizar código", completada: false }
    ];

    // Act
    const resultado = obtenerPendientes(tareas);

    // Assert
    expect(resultado).toEqual([
      { id: 1, titulo: "Revisar requisitos", completada: false },
      { id: 3, titulo: "Refactorizar código", completada: false }
    ]);

    expect(tareas).toHaveLength(3);
  });

  it("devuelve un array vacío si todas las tareas están terminadas", () => {
    // Arrange
    const tareas = [
      { id: 1, titulo: "Revisar requisitos", completada: true },
      { id: 2, titulo: "Diseñar pruebas", completada: true }
    ];

    // Act
    const resultado = obtenerPendientes(tareas);

    // Assert
    expect(resultado).toEqual([]);
  });

});

describe("obtenerTerminadas", () => {

  it("devuelve solo las tareas terminadas de una colección mixta", () => {
    // Arrange
    const tareas = [
      { id: 1, titulo: "Revisar requisitos", completada: false },
      { id: 2, titulo: "Diseñar pruebas", completada: true },
      { id: 3, titulo: "Refactorizar código", completada: false }
    ];

    // Act
    const resultado = obtenerTerminadas(tareas);

    // Assert
    expect(resultado).toEqual([
      { id: 2, titulo: "Diseñar pruebas", completada: true }
    ]);
  });

  it("devuelve arrays vacíos cuando no existen tareas", () => {
    // Arrange
    const tareas = [];

    // Act
    const pendientes = obtenerPendientes(tareas);
    const terminadas = obtenerTerminadas(tareas);

    // Assert
    expect(pendientes).toEqual([]);
    expect(terminadas).toEqual([]);
  });

});

// MISIÓN 6: prueba cambio correcto, otra tarea intacta e id inexistente.
// MISIÓN 7: prueba eliminar existente, inexistente y colección vacía.
// MISIÓN 8: prueba obtenerResumen(), incluyendo colección vacía.

// Los imports anteriores quedan preparados para que construyas la suite de forma incremental.
void agregarTarea;
void buscarTarea;
void obtenerPendientes;
void obtenerTerminadas;
void cambiarEstado;
void eliminarTarea;
void obtenerResumen;
