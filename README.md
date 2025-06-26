# 🧠 AdminTareasApp

Aplicación web para la **Gestión de tareas** construida con **Angular 17.3**.  
Consume una API RESTful en .NET Core y permite realizar operaciones **CRUD** de forma intuitiva y profesional.

---

## ⚙️ Tecnologías usadas

- ✅ Angular 17.3
- ✅ Bootstrap 5
- ✅ SweetAlert2
- ✅ Reactive Forms
- ✅ HttpClient
- ✅ Routing

## 🚀 Cómo correr el proyecto

### 1. Clona el repositorio

```bash
git clone https://github.com/tuusuario/AdminTareasApp.git
cd AdminTareasApp

2. Instala las dependencias
npm install

3. Corre la app en modo desarrollo
ng serve

Abre en el navegador:
📍 http://localhost:4200
```

🌐 Comunicación con el backend
La conexion a la API esta configurada en el puerto: 5123

El HttpClient está configurado para consumir endpoints desde la URL, ejemplo:
 'http://localhost:5123/api/tareas';
Si la API arranca en un puerto diferente lo puedes cambiar en el archivo environment.ts
ruta: 
src/environments/environment.ts

```
🗂️ Estructura del proyecto
AdminTareasApp/
│
├── app/
│   ├── components/
│   │   ├── tareas/
│   │   │   ├── tarea-lista/       # Listado y acciones
│   │   │   └── tarea-form/        # Crear / editar
│   │
│   ├── services/
│   │   ├── tarea.service.ts       # Lógica de consumo HTTP
│   │   └── notification.service.ts# SweetAlert2 centralizado
│   │
│   ├── models/
│   │   └── tarea.model.ts         # Modelo Tarea
│   │
│   └── app-routing.module.ts      # Rutas definidas
```
🧪 Funcionalidades
✔️ Ver listado de tareas
✔️ Crear nueva tarea
✔️ Editar tarea existente
✔️ Eliminar tarea con confirmación
✔️ Validaciones en formularios
✔️ Notificaciones con SweetAlert2
✔️ Estilos aplicados con Bootstrap

✅ Validaciones
Todos los campos son obligatorios

El estado debe ser un número entre 0 y 2

Fecha de creación se asigna automáticamente

✨ Extras técnicos
Diseño responsive con Bootstrap

Importación agrupada vía index.ts para servicios

Lógica de formularios desacoplada con Reactive Forms

SweetAlerts encapsulados en un servicio reusable

📦 Posibles mejoras futuras
Paginación en el listado

Filtro por estado o título

Guard para proteger rutas (si se implementa autenticación)

Soporte multilenguaje

```
🧑‍💻 Autor
Desarrollado por Alfredo Cano
Contacto: alfredo10396.c@gmail.com
```