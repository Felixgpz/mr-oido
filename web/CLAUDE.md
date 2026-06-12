# Mister Oído — Contexto del proyecto

## Estructura
```
MR.OIDO/
├── Web/                        ← working directory principal
│   ├── web/                    ← demo web pública
│   │   ├── index.html
│   │   ├── css/styles.css
│   │   └── js/main.js
│   ├── app/                    ← demo app móvil (frame de teléfono)
│   │   ├── index.html
│   │   ├── css/styles.css
│   │   └── js/main.js
│   └── .github/workflows/pages.yml
└── assets/
    └── images/                 ← imágenes compartidas
```

## Rutas de imágenes
- Desde `web/`: `../assets/images/`
- Desde `app/`: `assets/images/` (sin `../` porque app/ está al mismo nivel que assets/)

## Deploy
- Repo GitHub: `Felixgpz/mr-oido`
- GitHub Actions (`.github/workflows/pages.yml`) copia `web/.` al branch `gh-pages` en cada push a `main` que toque `web/**`
- Para publicar: `git add` → `git commit` → `git push origin main`

## Stack
- HTML/CSS/JS puro, sin framework
- AOS 2.3.4 (animaciones scroll) — elementos con `data-aos` arrancan en `opacity:0`, ocupan espacio aunque no se vean
- Swiper 11 (slider hero, testimoniales, logos)
- Tabler Icons (webfont)
- Inter (Google Fonts)

## Convenciones CSS
- Variables en `:root`: `--navy`, `--blue`, `--blue-dark`, `--blue-mid`, `--sky`, `--sky-light`, `--sky-pale`, `--ink`, `--muted`, `--line`, `--soft`, `--gold`
- Secciones con `.sec{padding:60px 56px}` y `.sec-alt` para fondo `--soft`
- Hero: grid 2 columnas, blobs decorativos en `.hero-blobs` (wrapper absoluto para no romper el grid)

## App demo
- Pantallas: splash → login (demo/1234) → home, cita, audífonos, notif, soporte, perfil
- Navegación con JS puro (goTo / goBack)
