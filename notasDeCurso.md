@platzi esta es mi opinión de final del curso de Webpack, la escribo aquí ya que el campo por defecto es muy corto.

__TLDR:__ El curso está desactualizado es necesario y urgente rehacerlo para wp4 y babel7.

_Gracias a todas las dudas y problemas que encontré en el curso terminé leyendome toda la documentación y varios issues de webpack_

## Contexto
Ya tenía experiencia con bower y grunt, la principal razon para hacer este curso fue la alerta de bower para usar WP; además de que el (mismo) profesor en el curso de react usa WP.

## Dificultades que encontré en el curso
* En general hay muchos problemas con webpack 4 que si bien no son problema del profesor son un fastidio progresar (por ejemplo el montaje de WDS, o el loader de stylus, o el minimozado... todo esto cambió entre WP3 y WP4).
* De la misma manera la nueva versión de Babel(7) cambió el nombre de sus dependencias y como uno inyecta las opciones al compilador.
* Acerca del soporte de EcmaScript(6/7/8...) y Babel; el vocabulario usado, las razones dadas son totalmente alejadas del mercado:
	* Babel se usa como compatibility layer para los navegadores desactualizados (IE, chrome/FFx/Edge viejos...)
	* Como tal los navegadores modernos soporta EM6/7 sin problema
* Las preguntas del examen necesitan una mejor redacción son confusas entre el contexto del curso y los conocimientos extras del mercado, inclusive una pregunta se mostró mal.

## Cosas que faltaron
* Como pasar los archivos (.js especialmente) hasheados automaticamente al html.
* Minimizado del html.
* Implemetación de web workers y service workers al bundle.
* Dar a entender que webpack es un **module bundler** que en conjunto con npm se puede usar como task runner, comparandolo con los metodos que se usaban antes como Gulp/Grunt y AMDJS/RequireJS.

## Para el profesor
Hay muchas cosas que en el vocabulario puede mejorar, hablar más tecnicamente de ciertos temas puede mejorar la experiencia de los alumnos.

Conclusiones:
* Parafraseando al profesor: _"webpack igual ${"terrible"} developer experience"_.
* La diferencia es mucha entre el webpack y babel enseñados (4 y 6 respectivamente) y los actuales; Es necesario rehacer el curso para reflejar los cambios en las ultimas versiones.

Att: _**DFOXpro**_
