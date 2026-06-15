# Mr. Oído — Demo Web, App Móvil y CRM

Centro auditivo familiar de Barcelona. Este repositorio contiene las demos de la web pública, la aplicación móvil y el CRM interno del proyecto de transformación digital.

**Equipo:** Claudia Febres · Jairo García · Zharith Salguero · Felix Puquimia  
**Centro:** Jesuïtes El Clot · Curso 2025/2026

---

## Estructura

```
MR.OIDO/
├── README.md
└── Web/
    ├── CLAUDE.md             # Contexto del proyecto para Claude Code
    ├── web/                  # Demo web pública
    │   ├── index.html
    │   ├── css/styles.css
    │   └── js/main.js
    ├── app/                  # Demo app móvil (frame de teléfono)
    │   ├── index.html
    │   ├── css/styles.css
    │   └── js/main.js
    ├── crm/                  # CRM interno de gestión de pacientes
    │   ├── index.html
    │   ├── css/styles.css
    │   └── js/main.js
    ├── assets/
    │   ├── images/           # Imágenes usadas en los demos
    │   └── raw/              # Imágenes fuente originales
    └── _old/                 # Versiones monolíticas anteriores (archivadas)
```

## GitHub Pages

Los tres demos están publicados en GitHub Pages y se actualizan automáticamente con cada push a `main`:

| Demo | Descripción |
|------|-------------|
| `/web/` | Página web pública de la clínica |
| `/app/` | Demo interactiva de la app móvil |
| `/crm/` | Panel CRM de gestión interna |

## Credenciales demo

| Demo | Usuario | Contraseña |
|------|---------|------------|
| App móvil | `demo` | `1234` |
| CRM | `admin` | `1234` |

## Qué incluye cada demo

### Web (`/web/`)
Página pública de la clínica con hero animado, servicios, tecnología, perfiles de pacientes, testimoniales, marcas y formulario de cita. Stack: HTML/CSS/JS · AOS · Swiper · Tabler Icons · Inter.

### App (`/app/`)
Demo de la app móvil en frame de teléfono. Pantallas: splash → login → home, citas, audífonos, notificaciones, soporte, perfil. Navegación con JS puro.

### CRM (`/crm/`)
Panel interno de gestión con:
- **Dashboard** — métricas, próximas citas, actividad reciente
- **Alertas** — banner automático de revisiones vencidas
- **Pacientes** — tabla con búsqueda y filtros, ficha detallada con historial, notas clínicas por visita e historial de ajustes remotos
- **Citas** — agenda con estados (pendiente / confirmada / realizada / cancelada) y modal para crear nuevas citas
- Datos de referencia ficticios (8 pacientes, 12 citas) — proyecto de clase

## Tecnologías

- HTML5 + CSS3 + JavaScript vanilla (sin frameworks)
- Iconos: Tabler Icons (CDN)
- Animaciones scroll: AOS 2.3.4
- Slider: Swiper 11
- Fuente: Inter (Google Fonts)
- Deploy: GitHub Actions → GitHub Pages

## Deploy

Cada push a `main` que toque archivos en `Web/` dispara el workflow `.github/workflows/pages.yml`, que copia el contenido de `Web/` al branch `gh-pages` y lo publica automáticamente.

## Colaboradores

- `463280clot-code`
