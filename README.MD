# Proyecto en Ubuntu, Docker, Nodejs y Librerías Correspondientes.

Este es un proyecto realizado en Ubuntu, Docker, Nodejs y varias librerías asociadas. A continuación se detallan los pasos seguidos para configurar y ejecutar el proyecto.

## Interacción con Docker y Creación de la Imagen MySQL

1. Interactue con Docker para crear la imagen MySQL y trabajar en ella.
2. Una vez familiarizado con Docker, trabaje en la imagen y cree la base de datos mediante SQL.
3. Exporte la base de datos al archivo `base_libreria.tar` descargar el siguiente link:
https://1drv.ms/u/s!AsteTQwovz09hacYYTnMFMzWPgqmNg?e=MIR2BW

**Nota:** A pesar de conocer SQL, PhpMyAdmin, Workbench y UML para el diseño del esquema, se optó por hacerlo en Docker mediante la consola para seguir el enfoque adecuado seguido en las prácticas.

## Configuración Inicial

1. Ejecutar el comando `npm init` para inicializar el proyecto.

## Configuración de Sequelize

2. Ejecutar el comando `npx sequelize-cli init` para configurar Sequelize.

## Definición de Modelos

3. Definir los modelos `Library`, `Book` y `User` en la carpeta `models`.

## Configuración de Passport

4. Configurar Passport para utilizar la estrategia de autenticación.

## Creación de Rutas

5. Crear las rutas en el archivo `routes/library.js` para gestionar las bibliotecas.

6. Crear las rutas en el archivo `routes/book.js` para gestionar los libros.

## Middleware de Passport

7. Agregar el middleware de Passport al archivo `routes/user.js`.

## Validación de Entidades

8. Utilizar la biblioteca de validación Joi y express-validator para validar las entidades.

## Creación de Usuario Administrador

9. Crear un usuario administrador utilizando seeders.

## Pruebas y Ejecución

10. Ejecutar el comando `npm start` para realizar pruebas y ejecutar la aplicación.
