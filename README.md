<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" alt="NestJS Logo" width="100" />
</p>

# CRUD de Tareas - NestJS (MVP)

Este proyecto es un **MVP** (Producto Mínimo Viable) construido con **NestJS** que permite **crear** y **listar** tareas a través de una **API REST**.

## 🚀 Tecnologías utilizadas

- [NestJS](https://nestjs.com/) (Framework Node.js)
- Node.js
- TypeScript

## 📦 Instalación

Sigue estos pasos para clonar y correr el proyecto:

```bash
git clone https://github.com/Dancolm95/api-rest-nest
cd api-rest-nest
npm install
npm run start
```
## Endpoints Disponibles

- POST/tasks : Crea una nueva tarea.
- GET/tasks : Lista todas las tareas.

### Notas importantes:
- El campo description es obligatorio.
- El servidor asigna automáticamente:
  - Un id incremental.
  - El campo ```completed``` es ```false``` por defecto.

## 🎯 Estado del proyecto

✅ MVP completado:
- Crear Tareas.
- Listar Tareas.
- Validación de campo description.
- Gestión basica de errores.

## 📈 Mejoras Futuras
- Actualizar el estado de una tarea.
- Eliminar tareas.
- Implementar DTOs y Pipes de validación.
- Conectar a una base de datos.
- Agregar pruebas unitarias.
