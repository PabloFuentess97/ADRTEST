/** Compilación estática para Seenode. Sin dependencias. */
import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
if (!existsSync('index.html')) throw new Error('Falta index.html');
const html = readFileSync('index.html', 'utf8');
if (!html.includes('<!DOCTYPE html>') || !html.includes('</html>')) throw new Error('HTML incompleto');
mkdirSync('dist', { recursive: true });
copyFileSync('index.html', 'dist/index.html');
console.log('Sitio preparado: dist/index.html');
