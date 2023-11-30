# Prueba técnica de SNGULAR

## Como usar el programa?

Hay 2 formas de usarlo:

1. la primer forma es ir al sitio web desplegado en vercel usando el siguiente [link](https://tecnical-test-sngular.vercel.app/)

   - https://tecnical-test-sngular.vercel.app/

2. Por entorno Local, descargando el codigo y ejecutándolo, para esto se deben de seguir lo siguientes pasos:

   - Asegurarse de tener Node.js instalado con la version o superior 20.9.0 [ (Link directo para instalarlo)](https://nodejs.org/en) o también visita su pagina oficial buscando en google "Node.js"
   - Este proyecto esta hecho con el administrador de paquetes **_pnpm_**, asegúrate de tenerlo instalado, conoce mas visitando el sitio oficial de [pnpm](https://pnpm.io/es/installation)
   - Una vez hecho lo anterior se puede descargar el repositorio
   - Abriendo el directorio de la aplicación en la terminal usar el comando `pnpm install` para instalar todas las dependencias
   - Luego de eso solo queda ejecutar el comando `pnpm run dev` para iniciar el servidor local o también se puede usar el comando `pnpm run test` para ejecutar las pruebas del proyecto

<hr>

## Tecnologías usadas
- React.js
- Vite
- Vitest - librería de testing 
- Tailwind css - librería de preprocesamiento de estilos css
- ...

<hr>


## Prueba técnica con las simientes características

Desarrollar una clase con un método que entregue el término n de la serie:

> serie(**_n_**) = 2Fibonacci(**_n_**) + 3Triangular(**_n_**) + 7Primo(**_n_**)

Realizar pruebas unitarias al método de la serie numérica usando los 10 números naturales como entrada (10 casos de prueba en total).

Desarrollar 3 componentes de React o Angular:

1.- un componente visual que muestra un formulario para introducir el número n

2.- un componente no-visual donde se calcule el término n de la serie

3.- un componente visual que muestra el resultado del cálculo

Se espera que sean componentes distintos, integrados en una misma aplicación para evaluar el paso de información entre componentes.

Se permite utilizar JavaScript o TypeScript usando como runtime node.js o deno.js y el corredor de pruebas unitarias de preferencia del candidato entrevistado.

Se evalúa la calidad del código en términos de presentación y lógica

<hr>

## Como se resolvió del problema

En el problema planteado arriba plantea que tengo que hacer un programa donde ingrese un numero natural e imprima en pantalla el resultado de multiplicar por 2 el numero en Fibonacci del numero natural sumado a 3 veces el numero triangular del numero natural sumado a 7 veces el numero primo mas cercano al numero natural. También tengo que .crear test de las funciones creadas para realizar las operaciones.

Primero cree las funciones, una para obtener el Fibonacci, otra para calcular el Triangular y otra para obtener el valor primo mas cercano, estas funciones las utilice para crear una ultima función llamada 'useCalc' para realizar fácilmente y de forma escalable la operación requerida.

Luego de tener listas ;las funciones use la librería de Vitest para crear los test de estas funciones, primero cree un test para cada función básica (Fibonacci, Triangular y Primo), luego cree un test para la función 'useCalc' donde uso un bucle y 2 arreglos de números para poder generar los test de este mismo.

Luego de tener la parte lógica del proyecto solo quedaba la interfaz de usuario para esto cree 3 componentes, el componente App, el componente input y el componente output, el componente App es el componente principal donde se rendarían los otros 2 componentes, el componente input es el componente donde se encuentra el formulario para ingresar el numero natural y el componente output es el componente donde se muestra el resultado de la operación.

En general es lo mas elemental del proyecto y lo que se necesita para saber como funciona de forma básica.
