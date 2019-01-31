# Webpack helloworld

Este fue un experimento para implementar lo aprendido en el curso de Platzi sobre webpack

## Cosas implementadas del curso

* Transpilado + empaquetado + minimizado de codigo `Javascript`
* Transpilado + empaquetado + minimizado de codigo `Stylus`
* Empaquetado de `React(dom)`
* ("livereload")`HotModuleReplacement` con `WebpackDevServer`

## Un paso más allá

Cosas extras al curso:

* Transpilado de codigo `Pug/Jade`
* Minimizado de `Html`
* Carga de archivos `Css` hasheados automaticamente
* Uso de `(web)workers`
* Configuración compartida para producción y desarrollo
* Todo corriendo sobre `webpack 4` y `babel 7`

## Qué mirar

`webpack.common.js` Tiene las Configuraciones generales para webpack, `webpack.dev.js` agrega las variaciones para el entorno de desarrollo y `webpack.config.js` agrega las variaciones para producción.

`package.json` Muestra las dependencias usadas en el proyecto y los scripts disponibles para correr:
* `npm run dist` Genera los archivos para producción
* `npm run dist:wds` Genera los archivos para producción y se mantiene en modo watch
* `npm run dev` Genera los archivos para desarrollo
* `npm run dev:wds` Genera los archivos para desarrollo y se mantiene en modo watch

Las carpetas `dist` y `www` tienen respectivamente los archivos generados para producción y desarrollo, estos archivos no se editaron manualmente.
