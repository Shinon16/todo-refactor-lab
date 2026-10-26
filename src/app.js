/*
 * MISIÓN 9 · ADAPTADOR DE INTERFAZ
 *
 * app.js sólo lee eventos, delega las reglas a taskService.js y vuelve a
 * renderizar el estado resultante. No contiene reglas de negocio.
 *
 *   evento del usuario → app.js → taskService.js → nuevo estado → render() → DOM
 */

import {
  crearTarea,
  agregarTarea,
  eliminarTarea,
  cambiarEstado,
  obtenerPendientes,
  obtenerTerminadas,
  obtenerResumen
} from "./taskService.js";

const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const message = document.querySelector("#message");
const summary = document.querySelector("#summary");
const filters = [...document.querySelectorAll("[data-filter]")];

// Estado de la aplicación
let tareas = [
  crearTarea(1, "Revisar requisitos"),
  crearTarea(2, "Diseñar pruebas"),
  crearTarea(3, "Refactorizar código")
];
let siguienteId = 4;
let filtro = "todas";

function tareasVisibles() {
  if (filtro === "pendientes") return obtenerPendientes(tareas);
  if (filtro === "terminadas") return obtenerTerminadas(tareas);
  return tareas;
}

function crearElementoTarea(tarea) {
  const li = document.createElement("li");
  li.className = tarea.completada ? "task done" : "task";

  const titulo = document.createElement("span");
  titulo.className = "title";
  titulo.textContent = tarea.titulo;

  const acciones = document.createElement("span");
  acciones.className = "task-actions";

  const botonEstado = document.createElement("button");
  botonEstado.dataset.toggle = tarea.id;
  botonEstado.textContent = tarea.completada ? "Reabrir" : "Completar";

  const botonEliminar = document.createElement("button");
  botonEliminar.dataset.delete = tarea.id;
  botonEliminar.textContent = "Eliminar";

  acciones.append(botonEstado, botonEliminar);
  li.append(titulo, acciones);
  return li;
}

function render() {
  const visibles = tareasVisibles();
  list.replaceChildren(...visibles.map(crearElementoTarea));

  if (visibles.length === 0) {
    const vacio = document.createElement("li");
    vacio.className = "task";
    vacio.textContent = "No hay tareas para mostrar en este filtro.";
    list.append(vacio);
  }

  const { total, pendientes, terminadas } = obtenerResumen(tareas);
  summary.textContent = `Total: ${total} · Pendientes: ${pendientes} · Terminadas: ${terminadas}`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const titulo = input.value.trim();

  if (!titulo) {
    message.textContent = "Escribe un título antes de agregar.";
    return;
  }

  tareas = agregarTarea(tareas, crearTarea(siguienteId, titulo));
  siguienteId++;
  input.value = "";
  message.textContent = "";
  render();
});

list.addEventListener("click", (event) => {
  const { toggle, delete: eliminar } = event.target.dataset;

  if (toggle !== undefined) {
    tareas = cambiarEstado(tareas, Number(toggle));
  } else if (eliminar !== undefined) {
    tareas = eliminarTarea(tareas, Number(eliminar));
  } else {
    return;
  }

  message.textContent = "";
  render();
});

filters.forEach(button => button.addEventListener("click", () => {
  filtro = button.dataset.filter;
  filters.forEach(b => b.classList.toggle("active", b === button));
  message.textContent = "";
  render();
}));

render();
