import { describe, it, expect } from "vitest";
import {
  crearTarea,
  agregarTarea,
  buscarTarea,
  obtenerPendientes,
  obtenerTerminadas,
  cambiarEstado,
  eliminarTarea,
  obtenerResumen,
  buscarPorTexto
} from "../src/taskService.js";

/*
 * TODO REFACTOR LAB · PRUEBAS UNITARIAS
 *
 * Cada describe protege una función de taskService.js. Las pruebas siguen
 * Arrange–Act–Assert y se escribieron antes de la implementación (RED → GREEN → REFACTOR).
 */

// MISIÓN 2 · crearTarea

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

// MISIÓN 3 · agregarTarea

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

// MISIÓN 4 · buscarTarea

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

// MISIÓN 5 · obtenerPendientes y obtenerTerminadas

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

// MISIÓN 6 · cambiarEstado

describe("cambiarEstado", () => {

  it("cambia una tarea pendiente a terminada sin modificar el original", () => {
    // Arrange
    const tareas = [
      { id: 1, titulo: "Revisar requisitos", completada: false },
      { id: 2, titulo: "Diseñar pruebas", completada: false }
    ];

    // Act
    const resultado = cambiarEstado(tareas, 1);

    // Assert
    expect(resultado[0].completada).toBe(true);
    expect(tareas[0].completada).toBe(false);
    expect(resultado).not.toBe(tareas);
    expect(resultado[0]).not.toBe(tareas[0]);
  });

  it("cambia una tarea terminada a pendiente sin alterar las demás", () => {
    // Arrange
    const tareas = [
      { id: 1, titulo: "Revisar requisitos", completada: true },
      { id: 2, titulo: "Diseñar pruebas", completada: false },
      { id: 3, titulo: "Refactorizar código", completada: true }
    ];

    // Act
    const resultado = cambiarEstado(tareas, 1);

    // Assert
    expect(resultado[0].completada).toBe(false);
    expect(resultado[1]).toEqual(tareas[1]);
    expect(resultado[2]).toEqual(tareas[2]);
    expect(tareas[0].completada).toBe(true);
  });

  it("conserva el contenido de la colección cuando el id no existe", () => {
    // Arrange
    const tareas = [
      { id: 1, titulo: "Revisar requisitos", completada: false },
      { id: 2, titulo: "Diseñar pruebas", completada: true }
    ];

    // Act
    const resultado = cambiarEstado(tareas, 10);

    // Assert
    expect(resultado).toEqual(tareas);
    expect(resultado).not.toBe(tareas);
  });

});

// MISIÓN 7 · eliminarTarea

describe("eliminarTarea", () => {

  it("elimina la tarea con el id indicado sin modificar el original", () => {
    // Arrange
    const tareas = [
      { id: 1, titulo: "Revisar requisitos", completada: false },
      { id: 2, titulo: "Diseñar pruebas", completada: true },
      { id: 3, titulo: "Refactorizar código", completada: false }
    ];

    // Act
    const resultado = eliminarTarea(tareas, 2);

    // Assert
    expect(resultado).toEqual([
      { id: 1, titulo: "Revisar requisitos", completada: false },
      { id: 3, titulo: "Refactorizar código", completada: false }
    ]);
    expect(tareas).toHaveLength(3);
    expect(resultado).not.toBe(tareas);
  });

  it("conserva todas las tareas cuando el id no existe", () => {
    // Arrange
    const tareas = [
      { id: 1, titulo: "Revisar requisitos", completada: false },
      { id: 2, titulo: "Diseñar pruebas", completada: true }
    ];

    // Act
    const resultado = eliminarTarea(tareas, 99);

    // Assert
    expect(resultado).toEqual(tareas);
    expect(resultado).toHaveLength(2);
  });

  it("devuelve un array vacío cuando la colección está vacía", () => {
    // Arrange
    const tareas = [];

    // Act
    const resultado = eliminarTarea(tareas, 1);

    // Assert
    expect(resultado).toEqual([]);
  });

});

// MISIÓN 8 · obtenerResumen

describe("obtenerResumen", () => {

  it("cuenta total, pendientes y terminadas de una colección mixta", () => {
    // Arrange
    const tareas = [
      { id: 1, titulo: "Revisar requisitos", completada: false },
      { id: 2, titulo: "Diseñar pruebas", completada: true },
      { id: 3, titulo: "Refactorizar código", completada: false },
      { id: 4, titulo: "Integrar interfaz", completada: true },
      { id: 5, titulo: "Documentar README", completada: false }
    ];

    // Act
    const resumen = obtenerResumen(tareas);

    // Assert
    expect(resumen).toEqual({ total: 5, pendientes: 3, terminadas: 2 });
  });

  it("devuelve todos los contadores en cero cuando la colección está vacía", () => {
    // Arrange
    const tareas = [];

    // Act
    const resumen = obtenerResumen(tareas);

    // Assert
    expect(resumen).toEqual({ total: 0, pendientes: 0, terminadas: 0 });
  });

  it("no modifica la colección original al calcular el resumen", () => {
    // Arrange
    const tareas = [
      { id: 1, titulo: "Revisar requisitos", completada: true },
      { id: 2, titulo: "Diseñar pruebas", completada: true }
    ];
    const copia = structuredClone(tareas);

    // Act
    const resumen = obtenerResumen(tareas);

    // Assert
    expect(resumen).toEqual({ total: 2, pendientes: 0, terminadas: 2 });
    expect(tareas).toEqual(copia);
  });

});

// MISIÓN 11 · Extensión B: buscarPorTexto
// Decisión: la búsqueda ignora mayúsculas/minúsculas y acentos, y un texto vacío no filtra.

describe("buscarPorTexto", () => {

  const tareas = [
    { id: 1, titulo: "Revisar requisitos", completada: false },
    { id: 2, titulo: "Diseñar pruebas", completada: true },
    { id: 3, titulo: "Refactorizar código", completada: false }
  ];

  it("encuentra coincidencias parciales sin importar mayúsculas o minúsculas", () => {
    // Arrange
    const texto = "PRUEBAS";

    // Act
    const resultado = buscarPorTexto(tareas, texto);

    // Assert
    expect(resultado).toEqual([
      { id: 2, titulo: "Diseñar pruebas", completada: true }
    ]);
  });

  it("ignora los acentos al comparar", () => {
    // Arrange
    const texto = "codigo";

    // Act
    const resultado = buscarPorTexto(tareas, texto);

    // Assert
    expect(resultado.map(tarea => tarea.id)).toEqual([3]);
  });

  it("devuelve un array vacío cuando ninguna tarea coincide", () => {
    // Arrange
    const texto = "despliegue";

    // Act
    const resultado = buscarPorTexto(tareas, texto);

    // Assert
    expect(resultado).toEqual([]);
  });

  it("devuelve todas las tareas cuando el texto está vacío o sólo tiene espacios", () => {
    // Act
    const sinTexto = buscarPorTexto(tareas, "");
    const soloEspacios = buscarPorTexto(tareas, "   ");

    // Assert
    expect(sinTexto).toEqual(tareas);
    expect(soloEspacios).toEqual(tareas);
  });

});
