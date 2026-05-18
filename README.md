# 🐻 CodeBears — PFE Evaluaciones 1, 2 y 3


**Asignatura:** Programación Front End  
**Año:** 2026

---

## ¿De qué trata esto?

Proyecto de sitio web desarrollado en tres sprints bajo metodología ágil. El sitio simula una empresa de desarrollo web llamada **CodeBears**: un negocio fur-midable con las garras bien puestas en cada línea de código.

No es un proyecto cualquiera. Es el resultado de once semanas sin hibernar.

---

## Estructura del proyecto

```
Codigoso/
├── index.html        ← Home. El corazón de la guarida.
├── servicios.html    ← Lo que hacemos. Sin rodeos, solo osos.
├── contacto.html     ← Escríbenos. No mordemos (casi nunca).
├── style.css         ← El pelaje visual del sitio.
├── image/            ← Galería ursina oficial.
│   ├── oso.jpg
│   ├── oso2.jpg
│   ├── oso3.jpg
│   ├── oso4.jpg
│   ├── oso5.png
│   ├── oso6.png
│   ├── oso7.png
│   ├── osos.jpg
│   ├── fatoso.png
│   └── bosque.jpg
└── js/
    ├── index.js          ← Saludo dinámico según la hora.
    └── validaciones.js   ← Validaciones del formulario (Sprint 2).
```

---

## Los tres sprints

### Sprint 1 — La maqueta
Se construyó la estructura del sitio usando etiquetas semánticas de HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`). Se aplicó un CSS propio con paleta basada en verde bosque y naranja ámbar. Se incluyeron tablas, listas, imágenes y vínculos internos y externos. Sin JavaScript, solo la base sólida sobre la que construir.

### Sprint 2 — La funcionalidad
Se incorporó JavaScript puro para la validación del formulario de contacto: campos obligatorios, formato de correo con regex, conteo de caracteres en tiempo real. También se agregó un saludo dinámico en el home que detecta la hora del día. El código dormía desde el Sprint 1, en el Sprint 2 despertó.

### Sprint 3 — React
Migración completa a React 18 vía CDN con Babel standalone. Se implementaron componentes reutilizables (`Header`, `Nav`, `TeamCard`, `ServiceCard`, `CampoInput`, entre otros), manejo de estado con `useState`, comunicación entre componentes mediante props, y animaciones CSS integradas. Ningún oso hibernó durante este proceso.

---

## El equipo CodeBears

| Nombre | Cargo |
|---|---|
| Bearnardo Ursúa | CEO & Desarrollo |
| Oswald Grizzman | Diseño UX |
| Grizzelda Pardos | Backend |
| Polabert Mieloso | QA & Testing |

Cuatro osos, un solo objetivo: que tu proyecto no se quede en la cueva.

---

## Tecnologías usadas

- HTML5 semántico
- CSS3 con animaciones (`@keyframes`)
- JavaScript ES6
- React 18 (CDN) + Babel Standalone

---

## Cómo abrir el proyecto
1. Abrir `index.html` en el navegador
2. No se requiere instalación, servidor ni npm. Solo un navegador con conexión a internet para cargar React desde CDN.

---

## Recursos utilizados

Las imágenes de osos provienen de la carpeta de recursos del curso (`Recursos HTML5/image/`). El CSS base toma como punto de partida los estilos vistos en clases (Calibri, `text-shadow`, paleta chocolate/beige), extendidos con la paleta verde/naranja del Sprint 3.

---

*CodeBears © 2026 — Grr-antizamos calidad. Sin hibernar desde 2015.*
