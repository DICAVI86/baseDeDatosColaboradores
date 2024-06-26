# Desafío 3 - Base de datos colaboradores
---
Un cliente nos solicita una aplicación que muestre un listado de colaboradores a partir de unos datos entregados, donde adicionalmente se pueda agregar colaboradores nuevos y filtrar la lista de resultados a partir de una barra de búsqueda que depure en función de cualquier dato del colaborador.
1. Crea al menos 4 componentes, Listado, Formulario, Buscador y Alert, todos estos serán importados desde App.jsx.

2. Cargar la lista de colaboradores desde un archivo js e importarlos en el archivo App.jsx.

3. En el componente Listado se deben mostrar los datos de los colaboradores utilizando una tabla de Bootstrap.

4. El componente formulario debe contener el formulario con los campos necesarios para agregar colaboradores a la lista y un botón para agregar los campos, además se debe validar que los campos no se encuentren vacíos.
   - Hint: En la guía, vimos que para agregar una tarea necesitamos un input y un estado para guardarlo. Además, para agregar un colaborador con nombre, correo, edad, cargo y teléfono se necesitan cinco inputs y cinco estados o un estado del tipo objeto.

5. Luego de presionar el botón de Agregar colaborador, el componente Alert debe mostrar un mensaje indicando si es que el colaborador fue agregado exitosamente o si los campos se encuentran vacíos.
    - Utiliza los props para mostrar un mensaje de error o de éxito.
    - Opcionalmente, puedes utilizar otro props para cambiar el color de la alerta (success o danger) según corresponda.
    - Como recordatorio, debes tener un state en el componente App que almacene el mensaje de error o de éxito, y pasar mediante props al componente Alert y Formulario.

6. Crear un componente para realizar una búsqueda de colaboradores por todos los campos del formulario.
    - Hint: Puedes utilizar el método .filter() de JavaScript para retornar el nuevo arreglo de colaboradores, a diferencia del borrado, el filter() se debe aplicar sobre el arreglo original en lugar del estado anterior.

7. Replicar el estilo de la aplicación usando Bootstrap, ya sea mediante react-bootstrap o su CDN.
    - Este debe ser responsive, como lo muestran las imágenes de referencia al final del desafío.

8. Crear un repositorio en GitHub para alojar el proyecto y trabajar de manera colaborativa.
    - Cada integrante del equipo deberá realizar al menos dos commits con distintas funcionalidades.

⌨️ Escrito por [Macarena Osses](https://github.com/Makaosva) y [Diego Castillo](https://github.com/DICAVI86)

