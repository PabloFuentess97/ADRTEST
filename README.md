# Generador ADR para HP Latex / ONYX

Sitio estático con editor de clasificación y tamaño de etiquetas ADR, distribución en rollo, y exportación PDF con tintas planas `CutContour` y `DRAG_KFINE`.

El arte original está incorporado dentro de `index.html`. El editor funciona localmente en Chrome y Edge, sin base de datos ni backend.

## Despliegue en Seenode

1. Crear un proyecto de tipo **Static Site** conectado a `PabloFuentess97/ADRTEST`.
2. Seleccionar la rama `main`.
3. Configurar:

| Opción | Valor |
| --- | --- |
| Directorio raíz | `.` |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Start command | No aplica |
| Variables de entorno | Ninguna |

4. Desplegar. El script de compilación copia el editor a `dist/index.html` sin instalar dependencias.

Para probarlo en local, abrir directamente `index.html`, o ejecutar `npm run build` y servir la carpeta `dist` mediante un servidor HTTP local.

## Importante antes de producción

Se han realizado comprobaciones estructurales de los PDF de prueba, pero se debe verificar en ONYX la detección de tintas planas y realizar una prueba física del contorno y separación en HP Latex 64 Plus Cutter. Los caracteres de clasificación nuevos pueden utilizar fuente sustitutiva.
