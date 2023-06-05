# nodejs-mongo-websockets
Node.js: Base de Datos con MongoDB y WebSockets

## Peticiones HTTP

### PETICION
- Metodo
- Protocolo
Otros: {
  Host
  Referer
  User-Agent
  Connection
  ...
}

EJEMPLO: GET /index.html HTTP/1.1

### RESPUESTA

RESPUESTA EJEMPLO: HTTP/1.1 200 OK

Otros: {
  Date
  Content-Type
  Content-Length
  ...
}

## Puntos Clave

1. Metodos: Que queremos hacer
2. Estado: Como se resolvio la operacion
3. Cuerpo: Que devuelve el servidor

### Metodos

El verbo que indica en la peticion que deseamos hacer.

1. GET: Recoge informacion del servidor
2. PUT: Reemplaza toda la informacion en el servidor (de algun elemento existente)
3. DELETE: Eliminar informacion del servidor
4. POST: Añadir informacion al servidor
5. PATCH: Reemplaza solo una parte de la informacion en el servidor (de algun elemento existente)
6. OPTIONS: Pedir informacion sobre los metodos (POST, PUT, PATCH, DELETE)

### Cabeceras

Informacion contextual de la peticion. (Como quiero hacer la peticion).

- Autenticacion: Asegurarte de que puedes pedir cosas al servidor (authorization)
- Cache: Almacenamiento temporal. Gestiona durante cuanto tiempo la respuesta será la misma
- Indicaciones
- Condiciones
- Accept: Define el contenido que acepta
- CORS
- Cookies: Compartir informacion entre peticiones
- ...

### Estados

Son numeros que indican como ha resultado la peticion.

- 2XX: OK
- 3XX: Redirigido
- 4XX: Error de cliente
  - 400: Bad Request
  - 401: Unauthorized
  - 403: Forbidden (prohibido)
  - 404: Not found
- 500: Internal server error (Error de servidor)

### Cuerpo

Es la informacion en si de la peticion. Que tiene y como viene depende de las cabeceras Content-Type y Content-Length.

- Content-Type: {
  text/html
  text/css
  application/javascript
  image/jpeg
  application/json
  application/xml
}

#### Query

Informacion extra que se puede agregar a la peticion. Tambien se puede utilizar para compartir informacion con el frontend pero con cuidado porque esta será visible, por lo que no tiene que ser informacion sensible. Su estructura es:

- ? Al final de la URL
- nombre=valor
- separado por &

## Trabajando con los Headers

En el metodo get del archivo server.js agregamos la informacion del header con req.headers y lo mostramos enconsola. Si ejecutamos el get desde el navegador vendra mucha mas informacion. Los importantes son:

1. cache-control
2. user-agent
3. accept
4. accept-encoding

## Detalles de error especificos

Los detalles de los errores no deben estar a disposicion del cliente sino del equipo de trabajo. Para ello, cuando se ejecute un error, guardaremos su log con su correspondiente detalle. (Vease archivo response.js).

## Rutas, Controladores y Bases de Datos

Las peticiones vienen desde Internet hacia nuestro servidor. Quien recibe las peticiones es server.js y se encarga de verificar que las peticiones sean correctas y se encarga de cargar toda la informacion importante de nuestro servidor (DB, cabeceras, etc). Luego el archivo server.js pasa la informacion al archivo routes.js, encargado de gestionar las rutas y llamar al componente adecuado para la misma.

Los componentes se componen de 3 capas separadas en 3 archivos js:

- Network --> HTTP (Red)
- Controller --> Logica de Negocio (servicio)
- Store --> BD (Almacenamiento)

### Modulo Response

Se crea un modulo response.js que sera el encargdo de devolver las peticiones exitosas desde los componentes al cliente con un formato unificado. Esta tambien se trata de una capaa de Red.

## Separando el Proyecto en secciones

Creamos la carpeta components y dentro la carpeta messages.

## Mongoose

Utilizaremos la libreria mongoose para armar los esquemas con los que manejaremos los datos con nuestra BD.