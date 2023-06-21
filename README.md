# Test
Pruebas para el Proceso en Seguros Bolivar

La app es una API Servicio donde se guarda y consulta la información básica de clientes(Nombres completos, tipos de documento y número de documento). Para hacer uso del servicio se debe antenticar con las credenciales de una cuenta válida en Github.

## Instrucciones

La app se desplega en ```http://localhost:3000``` y cuenta con dos endpoints, uno para consultar una lista de clientes y otra para regostra un nuevo cliente.

### 1. Deployment de la app

La app se despliega a traves de Docker, cuenta con dos servicios uno para levantar el sercio host de la api-rest y el otro para desplegar el servidor de datos que esta soportado en Mongo DB. Para subir los servicios por favor escribir

```docker-compose up -d```

### 2. Ingreso a la app
[Primero debe autenticarse, para ello se debe ingresar por -](http://localhost:3000/auth/github) la app lo redirigira al readme de la api

### 3. Endpoints

- [Consulta de clientes GET](http://localhost:3000/v1/customers)
- [Consulta de clientes POST](http://localhost:3000/v1/customer)

Ejemplo del payload

```
{
   "data":{
   
    "documentType": "CC",
    "name": "Luis Villa",
    "numberId": 1001245332
  }
   
 }
```



