## Creación de Bases de Datos

Lo primero es conectar SQL Management Studio a un servidor, y después crear una nueva consulta.

 Hay que tener en cuenta que como las comillas no se usan en Transact SQL, lo contenido entre ellas es variable. 

* **Crear una nueva base de datos:** `create database "nombre"`

* **Borrar una base de datos:** `drop database "base"` . Hay que tener en cuenta que a la hora de eliminar una base de datos no podemos tenerla seleccionada.

* **Usar una base de datos:** `use "base"`

* **Crear tabla:** `create table "nombre" ("campos de la tabla")` . Es necesario introducir mínimo un campo para crear una tabla.

* **Crear campo:** Dentro de los paréntesis de una tabla: `"nombre de campo" "tipo de campo"`

* **Tipos de campos:** 

  * **char ():** Caracteres. Entre paréntesis introducimos la cantidad de caracteres a ocupar en memoria.

  * **varchar ():** Caracteres. Entre paréntesis introducimos la cantidad máxima que puede tener.

  * **int:** Número entero de 4 bytes.

  * **bigint:** Número entero de 8 bytes.

  * **int identity (a, b):** Numeración automática, siendo "a" donde empieza el contador y "b" de cuanto en cuanto aumenta.

  * **decimal (a, b):** Número con decimales, siendo "a" la cantidad de cifras que tiene (enteras y decimales) y "b" la cantidad de decimales.

  * **date:** Fecha.

  * **datetime:** Fecha y hora.

  * **money:** Dinero.

* **Restricciones:** `constraint "nombre" "tipo" "sentencia según tipo"`. En caso de ser default o unique es obligatorio ponerlo en la misma línea que el campo en el que se crea.

* **Tipo de restricciones:** 

  * **primary key:** Una clave primaria, que identifica cada registro de la tabla. No pueden ser nulas y solo puede haber una por tabla, que puede consistir en uno o más campos. Además, cada valor es único.

  * **foreign key:** Una clave foránea, que sirve de enlace hacia otras tablas. La tabla que contiene la clave foránea es la tabla "hijo", y la que contiene la clave primaria a la que hace referencia es la tabla referenciada o "padre". 

    Un campo de la tabla hijo que tenga una clave foránea solo puede tener registros que tengan valores que también se encuentren en el campo de la tabla padre.

  * **default: ** Se utiliza para dar un valor por defecto a una columna. Se usará si no se especifica otro valor.

  * **check:** Se utiliza para limitar el rango de valor que pueden colocarse en una columna.

  * **unique:** Se utiliza para asegurarse de que todos los valores en una columna sean únicos. La restricción "primary key" lo añade automáticamente.

  * **not null:** Se utiliza para que a la hora de introducir un registro, el campo que contenga esta constraint no pueda ser nulo.

* **Introducir un comentario:** ```--"comentario"``

* **Ejemplo de lo anterior:**

  ```Transact SQL
  create database Tienda --aquí creamos la base de datos con nombre "Tienda

  use Tienda --la seleccionamos
  go --es importante que tras un use pongamos el elemento go

  create table Productos ( --creamos una tabla con campos, en este caso de tipos variados
  	codigo_producto char(13)
  		constraint pk_codigo_producto primary key,
  	cantidad_producto int,
  		constraint df_cantidad_producto default 0,
  	precio_producto money not null,
  	fecha_caducidad date not null	
  )

  use master 
  go
  drop database Tienda --ejemplo de como borrar la base de datos
  ```

* ​
