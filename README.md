# FERROTEC Industrial — Catálogo AR
## Proyecto 2 · Opción B · Tecnologías Emergentes e Innovación · URL

---

## Estructura del proyecto

```
ferrotec-catalog/
├── index.html          ← Página principal del catálogo
├── style.css           ← Estilos
├── script.js           ← Lógica e interactividad
├── models/
│   ├── taladro.glb         ← Coloca aquí tu modelo
│   ├── esmeriladora.glb    ← Coloca aquí tu modelo
│   └── llave_torque.glb    ← Coloca aquí tu modelo
└── README.md
```

---

## Paso 1: Agregar los modelos

1. Copia tus 3 archivos `.glb` dentro de la carpeta `models/`
2. Renómbralos exactamente así (sin espacios, sin acentos):
   - `taladro.glb`
   - `esmeriladora.glb`
   - `llave_torque.glb`

---

## Paso 2: Publicar en GitHub Pages

1. Crea un repositorio en GitHub (puede ser privado o público)
2. Sube todos los archivos del proyecto (incluyendo la carpeta `models/`)
3. Ve a **Settings → Pages**
4. En "Source" selecciona: `Deploy from a branch → main → / (root)`
5. Guarda. En 1-2 minutos tu sitio estará disponible en:
   `https://TU-USUARIO.github.io/TU-REPOSITORIO/`

> ⚠️ GitHub Pages requiere que el repositorio sea **público** para el plan gratuito.

---

## Paso 3 (alternativa): Publicar en Netlify

1. Ve a [netlify.com](https://www.netlify.com) y crea cuenta gratuita
2. En el dashboard, arrastra y suelta la carpeta completa del proyecto
3. Netlify genera automáticamente una URL con HTTPS

---

## ¿Por qué necesitamos HTTPS?

La AR y el acceso a la cámara del celular requieren HTTPS por seguridad del navegador.
Tanto GitHub Pages como Netlify lo proveen automáticamente y de forma gratuita.

---

## Herramientas utilizadas

- **model-viewer v3.5** (Google) — visor 3D e integración AR
- **ARCore / Scene Viewer** (Android) — renderizado AR en Android
- **Quick Look** (iOS/Safari) — renderizado AR en iPhone
- **HTML/CSS/JavaScript** estático — sin frameworks ni dependencias de servidor
- **Barlow / Barlow Condensed** (Google Fonts) — tipografía

---

## Créditos de modelos 3D

(Completar con el nombre del autor y URL de Sketchfab de cada modelo descargado)

| Modelo | Autor | Licencia | URL |
|--------|-------|----------|-----|
| Taladro | — | CC Attribution | — |
| Esmeriladora | — | CC Attribution | — |
| Llave de torque | — | CC Attribution | — |
